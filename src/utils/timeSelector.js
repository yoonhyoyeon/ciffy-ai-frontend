// 요일 배열
export const DAYS = ["월", "화", "수", "목", "금"];

// 블록 인덱스를 시간 형식으로 변환 (예: 0 → 09:00, 1 → 09:30)
export function formatTime(blockIdx, startHour) {
  const hour = startHour + Math.floor(blockIdx / 2);
  const min = (blockIdx % 2) * 30;
  return `${hour.toString().padStart(2, "0")}:${min === 0 ? "00" : "30"}`;
}

// 선택된 시간대를 "요일 HH:MM~HH:MM" 포맷으로 변환
export function convertToUnavailableTimesFormat(selectedRanges, startHour = 9) {
  return selectedRanges.map(range => {
    const [start, end] = [range.startBlock, range.endBlock].sort((a, b) => a - b);
    const day = DAYS[range.dayIndex];
    const startTime = formatTime(start, startHour);
    const endTime = formatTime(end + 1, startHour);
    
    return `${day} ${startTime}~${endTime}`;
  });
}

// 선택된 범위 Border Style CSS 클래스 반환
export function getBorderStyleClass(dayIdx, blockIdx, ranges, styles) {
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
export function getTimeBlocks(startHour, endHour) {
  const blocks = [];
  for (let h = startHour; h < endHour; h++) {
    blocks.push({ hour: h, min: 0 });
    blocks.push({ hour: h, min: 30 });
  }
  blocks.push({ hour: endHour, min: 0 });
  return blocks;
}

// 셀이 특정 범위에 포함되는 지 확인
export function isInRange(dayIdx, blockIdx, range) {
  if (!range) return false;
  if (dayIdx !== range.dayIndex) return false;
  const [start, end] = [range.startBlock, range.endBlock].sort((a, b) => a - b);
  return blockIdx >= start && blockIdx <= end;
}

// 셀이 선택된 범위 중 하나에 포함되는 지 확인
export function isInAnyRange(dayIdx, blockIdx, ranges) {
  return ranges.some(range => isInRange(dayIdx, blockIdx, range));
}

// 새로운 범위가 기존 범위와 겹치는 지 확인
export function isOverlapping(newRange, ranges) {
  const [newStart, newEnd] = [newRange.startBlock, newRange.endBlock].sort((a, b) => a - b);
  return ranges.some(range => {
    if (range.dayIndex !== newRange.dayIndex) return false;
    const [start, end] = [range.startBlock, range.endBlock].sort((a, b) => a - b);
    return start <= newEnd && end >= newStart;
  });
} 