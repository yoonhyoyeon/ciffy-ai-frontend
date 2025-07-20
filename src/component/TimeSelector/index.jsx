import { useState, useMemo } from "react";
import styles from "./index.module.css";
import cx from "classnames";
import {
  DAYS,
  getTimeBlocks,
  isInRange,
  isInAnyRange,
  isOverlapping,
  getBorderStyleClass,
} from "@/utils/timeSelector";

export default function TimeSelector({
  startHour = 9,
  endHour = 18,
  onSelect,
  answer,
  question_id
}) {
  // 시간 블록 생성 (30분 단위) - useMemo로 캐싱
  const timeBlocks = useMemo(() => getTimeBlocks(startHour, endHour), [startHour, endHour]);
  
  const [isSelecting, setIsSelecting] = useState(false); // 선택 중인 지 여부
  const [tempRange, setTempRange] = useState(null); // 임시 선택 범위
  const [hoveredRange, setHoveredRange] = useState(null); // 호버된 범위
  const [selectedRanges, setSelectedRanges] = useState(() => {
    return answer[question_id].length > 0 ? answer[question_id] : [];
  }); //answer[question_id] 값 불러오기

  const deleteRange = (foundIdx) => {
    const newRanges = selectedRanges.filter((_, idx) => idx !== foundIdx);
    setSelectedRanges(newRanges);
    onSelect(newRanges);
    return;
  }

  const startSelection = (dayIdx, blockIdx) => {
    setIsSelecting(true);
    setTempRange({ dayIndex: dayIdx, startBlock: blockIdx, endBlock: blockIdx });
  }

  const confirmSelection = (blockIdx) => {
    const newRange = {
      dayIndex: tempRange.dayIndex,
      startBlock: tempRange.startBlock,
      endBlock: blockIdx,
    };
    // 겹침 검사
    if (isOverlapping(newRange, selectedRanges)) {
      return; // 겹치면 선택 취소
    }
    // 범위 확정
    setIsSelecting(false);
    setSelectedRanges(prev => [...prev, newRange]);
    setTempRange(null);
    onSelect([...selectedRanges, newRange]);
  }

  // 셀 클릭 핸들러
  const handleCellClick = (dayIdx, blockIdx) => {
    if (!isSelecting) {
      // 선택 모드가 아닐 때: 기존 범위 삭제 또는 새 선택 시작
      const foundIdx = selectedRanges.findIndex(range => isInRange(dayIdx, blockIdx, range));
      if (foundIdx !== -1) {
        // 이미 선택된 범위 클릭 시 삭제
        deleteRange(foundIdx);
      }
      else {
        // 새 선택 시작
        startSelection(dayIdx, blockIdx);
      }
    } else {
      // 선택 모드일 때: 범위 확정
      confirmSelection(blockIdx);
    }
  };

  // 셀 MouseOver 핸들러
  const handleCellMouseOver = (dayIdx, blockIdx) => {
    if (isSelecting) {
      // 선택 모드: 임시 범위 업데이트
      setTempRange({ ...tempRange, endBlock: blockIdx });
    } else {
      // 일반 모드: 호버된 range 찾기
      const foundRange = selectedRanges.find(range => isInRange(dayIdx, blockIdx, range));
      setHoveredRange(foundRange || null);
    }
  };

  // 셀 MouseLeave 핸들러
  const handleCellMouseLeave = () => {
    setHoveredRange(null);
  };

  return (
    <div className={cx(styles.timetableWrapper, {
      [styles.noSelecting]: !isSelecting, // 선택 모드가 아닐 때 스타일
    })}>
      <table className={styles.timetable}>
        <thead>
          <tr>
            <th></th>
            {DAYS.map((d) => (
              <th key={d}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeBlocks.map((block, blockIdx) => (
            <tr key={blockIdx}>
              <td className={styles.timeLabel}>
                {block.min === 0 ? block.hour : ""}
              </td>
              {DAYS.map((_, dayIdx) => (
                <td
                    key={dayIdx}
                    className={cx(
                      styles.cell,
                      {
                        [styles.selected]: isInAnyRange(dayIdx, blockIdx, selectedRanges), // 선택된 범위
                        [styles.tempOverlap]: isInRange(dayIdx, blockIdx, tempRange) && isInAnyRange(dayIdx, blockIdx, selectedRanges), // 임시 범위와 겹침
                        [styles.temp]: isInRange(dayIdx, blockIdx, tempRange) && !isInAnyRange(dayIdx, blockIdx, selectedRanges), // 임시 범위
                        [styles.hoveredRange]: isInRange(dayIdx, blockIdx, hoveredRange) // 호버된 범위
                      },
                      getBorderStyleClass(dayIdx, blockIdx, selectedRanges, styles) // border 스타일
                    )}
                    onClick={() => handleCellClick(dayIdx, blockIdx)}
                    onMouseOver={() => handleCellMouseOver(dayIdx, blockIdx)}
                    onMouseLeave={handleCellMouseLeave}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}