import { useState } from "react";
import styles from "./index.module.css";
import cx from "classnames";

// 요일 배열
const DAYS = ["월", "화", "수", "목", "금"];

// 블록 인덱스를 시간 형식으로 변환 (예: 0 → 09:00, 1 → 09:30)
function formatTime(blockIdx, startHour) {
  const hour = startHour + Math.floor(blockIdx / 2);
  const min = (blockIdx % 2) * 30;
  return `${hour.toString().padStart(2, "0")}:${min === 0 ? "00" : "30"}`;
}

// 선택된 시간대를 "요일 HH:MM~HH:MM" 포맷으로 변환
function convertToUnavailableTimesFormat(selectedRanges, startHour = 9) {
  return selectedRanges.map(range => {
    const [start, end] = [range.startBlock, range.endBlock].sort((a, b) => a - b);
    const day = DAYS[range.dayIndex];
    const startTime = formatTime(start, startHour);
    const endTime = formatTime(end + 1, startHour);
    
    return `${day} ${startTime}~${endTime}`;
  });
}

// 선택된 범위 Border Style CSS 클래스 반환
function getBorderStyleClass(dayIdx, blockIdx, ranges) {
    for (const range of ranges) {
        if (isInRange(dayIdx, blockIdx, range)) {
        const [start, end] = [range.startBlock, range.endBlock].sort((a, b) => a - b);
        if (start === end) return styles.selectedSingle; // 단일
        if (blockIdx === start) return styles.selectedStart; // 시작
        if (blockIdx === end) return styles.selectedEnd; // 끝
        return undefined; // 중간
        }
    }
    return undefined;
}

// 시작 시간부터 끝 시간까지 30분 단위로 블록 생성
function getTimeBlocks(startHour, endHour) {
  const blocks = [];
  for (let h = startHour; h < endHour; h++) {
    blocks.push({ hour: h, min: 0 });
    blocks.push({ hour: h, min: 30 });
  }
  blocks.push({ hour: endHour, min: 0 });
  return blocks;
}

// 셀이 특정 범위에 포함되는 지 확인
function isInRange(dayIdx, blockIdx, range) {
  if (!range) return false;
  if (dayIdx !== range.dayIndex) return false;
  const [start, end] = [range.startBlock, range.endBlock].sort((a, b) => a - b);
  return blockIdx >= start && blockIdx <= end;
}

// 셀이 선택된 범위 중 하나에 포함되는 지 확인
function isInAnyRange(dayIdx, blockIdx, ranges) {
  return ranges.some(range => isInRange(dayIdx, blockIdx, range));
}

// 새로운 범위가 기존 범위와 겹치는 지 확인
function isOverlapping(newRange, ranges) {
    const [newStart, newEnd] = [newRange.startBlock, newRange.endBlock].sort((a, b) => a - b);
    return ranges.some(range => {
        if (range.dayIndex !== newRange.dayIndex) return false;
        const [start, end] = [range.startBlock, range.endBlock].sort((a, b) => a - b);
        return start <= newEnd && end >= newStart;
    });
}

// 임시 범위와 기존 범위가 겹치는 셀인지 확인
function isCellTempOverlap(dayIdx, blockIdx, tempRange, ranges) {
    if (!tempRange) return false;
    if (!isInRange(dayIdx, blockIdx, tempRange)) return false;
    return ranges.some(range => isInRange(dayIdx, blockIdx, range));
}

export default function TimeSelector({
  startHour = 9,
  endHour = 18,
  onSelect,
  answer,
  question_id
}) {
  // 시간 블록 생성 (30분 단위)
  const timeBlocks = getTimeBlocks(startHour, endHour);
  
  const [isSelecting, setIsSelecting] = useState(false); // 선택 중인 지 여부
  const [tempRange, setTempRange] = useState(null); // 임시 선택 범위
  const [hoveredRange, setHoveredRange] = useState(null); // 호버된 범위
  const [selectedRanges, setSelectedRanges] = useState(() => {
    return answer[question_id].length > 0 ? answer[question_id] : [];
  }); //answer[question_id] 값이 있으면 그 값을 사용하고, 없으면 빈 배열을 사용

  // 셀 클릭 핸들러
  const handleCellClick = (dayIdx, blockIdx) => {
    if (!isSelecting) {
      // 선택 모드가 아닐 때: 기존 범위 삭제 또는 새 선택 시작
      const foundIdx = selectedRanges.findIndex(range => isInRange(dayIdx, blockIdx, range));
      if (foundIdx !== -1) {
        // 이미 선택된 범위 클릭 시 삭제
        const newRanges = selectedRanges.filter((_, idx) => idx !== foundIdx);
        setSelectedRanges(newRanges);
        onSelect(newRanges);
        return;
      }
      // 새 선택 시작
      setIsSelecting(true);
      setTempRange({ dayIndex: dayIdx, startBlock: blockIdx, endBlock: blockIdx });
    } else {
      // 선택 모드일 때: 범위 확정
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
      if (onSelect) onSelect([...selectedRanges, newRange]);
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
                        [styles.tempOverlap]: isInRange(dayIdx, blockIdx, tempRange) && isCellTempOverlap(dayIdx, blockIdx, tempRange, selectedRanges), // 임시 범위와 겹침
                        [styles.temp]: isInRange(dayIdx, blockIdx, tempRange) && !isCellTempOverlap(dayIdx, blockIdx, tempRange, selectedRanges), // 임시 범위
                        [styles.hoveredRange]: hoveredRange && isInRange(dayIdx, blockIdx, hoveredRange) // 호버된 범위
                      },
                      getBorderStyleClass(dayIdx, blockIdx, selectedRanges) // border 스타일
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

export { convertToUnavailableTimesFormat };