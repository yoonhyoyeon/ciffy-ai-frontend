import React, { useState } from "react";
import styles from "./index.module.css";
import cx from "classnames";

const DAYS = ["월", "화", "수", "목", "금"];

function formatTime(blockIdx, startHour) {
  const hour = startHour + Math.floor(blockIdx / 2);
  const min = (blockIdx % 2) * 30;
  return `${hour.toString().padStart(2, "0")}:${min === 0 ? "00" : "30"}`;
}

function convertSelectedRanges(selectedRanges, startHour = 9) {
  return selectedRanges.map(range => {
    const [start, end] = [range.startBlock, range.endBlock].sort((a, b) => a - b);
    return {
      day: DAYS[range.dayIndex],
      start: formatTime(start, startHour),
      end: formatTime(end + 1, startHour), // end+1로 끝나는 시각(반오픈구간) 표현
    };
  });
}

// 선택된 시간대를 "요일 HH:MM~HH:MM" 포맷으로 변환하는 함수
function convertToUnavailableTimesFormat(selectedRanges, startHour = 9) {
  return selectedRanges.map(range => {
    const [start, end] = [range.startBlock, range.endBlock].sort((a, b) => a - b);
    const day = DAYS[range.dayIndex];
    const startTime = formatTime(start, startHour);
    const endTime = formatTime(end + 1, startHour); // end+1로 끝나는 시각(반오픈구간) 표현
    
    return `${day} ${startTime}~${endTime}`;
  });
}

function getSelectedClass(dayIdx, blockIdx, ranges) {
    for (const range of ranges) {
        if (isInRange(dayIdx, blockIdx, range)) {
        const [start, end] = [range.startBlock, range.endBlock].sort((a, b) => a - b);
        if (start === end) return styles.selectedSingle;
        if (blockIdx === start) return styles.selectedStart;
        if (blockIdx === end) return styles.selectedEnd;
        return "";
        }
    }
    return "";
}

function getTimeBlocks(startHour, endHour) {
  const blocks = [];
  for (let h = startHour; h < endHour; h++) {
    blocks.push({ hour: h, min: 0 });
    blocks.push({ hour: h, min: 30 });
  }
  blocks.push({ hour: endHour, min: 0 });
  return blocks;
}

function isInRange(dayIdx, blockIdx, range) {
  if (!range) return false;
  if (dayIdx !== range.dayIndex) return false;
  const [start, end] = [range.startBlock, range.endBlock].sort((a, b) => a - b);
  return blockIdx >= start && blockIdx <= end;
}

function isInAnyRange(dayIdx, blockIdx, ranges) {
  return ranges.some(range => isInRange(dayIdx, blockIdx, range));
}

function isOverlapping(newRange, ranges) {
    const [newStart, newEnd] = [newRange.startBlock, newRange.endBlock].sort((a, b) => a - b);
    return ranges.some(range => {
        if (range.dayIndex !== newRange.dayIndex) return false;
        const [start, end] = [range.startBlock, range.endBlock].sort((a, b) => a - b);
        // 겹침: (start <= newEnd && end >= newStart)
        return start <= newEnd && end >= newStart;
    });
}

function isTempOverlapping(tempRange, ranges) {
  if (!tempRange) return false;
  return isOverlapping(tempRange, ranges);
}
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
  const timeBlocks = getTimeBlocks(startHour, endHour);
  const [isSelecting, setIsSelecting] = useState(false);
  const [tempRange, setTempRange] = useState(null);
  const [selectedRanges, setSelectedRanges] = useState(() => {
    return answer[question_id].length > 0 ? answer[question_id] : [];
  });

  const handleCellClick = (dayIdx, blockIdx) => {
    if (!isSelecting) {
      // 이미 선택된 범위에 포함된 셀 클릭 시 삭제
      const foundIdx = selectedRanges.findIndex(range => isInRange(dayIdx, blockIdx, range));
      if (foundIdx !== -1) {
        const newRanges = selectedRanges.filter((_, idx) => idx !== foundIdx);
        setSelectedRanges(newRanges);
        if (onSelect) onSelect(newRanges);
        return;
      }
      // 새 선택 시작
      setIsSelecting(true);
      setTempRange({ dayIndex: dayIdx, startBlock: blockIdx, endBlock: blockIdx });
    } else {
      // 선택 완료: 반드시 시작 요일로 고정
      const newRange = {
        dayIndex: tempRange.dayIndex,
        startBlock: tempRange.startBlock,
        endBlock: blockIdx,
      };
      // 겹침 검사
      if (isOverlapping(newRange, selectedRanges)) {
        // 겹치면 아무것도 하지 않고 첫 시간 선택 상태 유지
        return;
      }
      setIsSelecting(false);
      setSelectedRanges(prev => [...prev, newRange]);
      setTempRange(null);
      if (onSelect) onSelect([...selectedRanges, newRange]);
    }
  };

  const handleCellMouseOver = (_, blockIdx) => {
    if (isSelecting && tempRange) {
      setTempRange({ ...tempRange, endBlock: blockIdx });
    }
  };

  return (
    <div className={cx(styles.timetableWrapper, {
      [styles.noSelecting]: !isSelecting,
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
                    className={[
                    styles.cell,
                    isInAnyRange(dayIdx, blockIdx, selectedRanges) && styles.selected,
                    getSelectedClass(dayIdx, blockIdx, selectedRanges),
                    isInRange(dayIdx, blockIdx, tempRange) &&
                        (isCellTempOverlap(dayIdx, blockIdx, tempRange, selectedRanges)
                        ? styles.tempOverlap
                        : styles.temp),
                    ]
                    .filter(Boolean)
                    .join(" ")}
                    onClick={() => handleCellClick(dayIdx, blockIdx)}
                    onMouseOver={() => handleCellMouseOver(dayIdx, blockIdx)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// 함수들을 export해서 다른 컴포넌트에서 사용할 수 있도록 함
export { convertToUnavailableTimesFormat };