// src/utils/timetable.js

// 요일 한글 → 영문 변환
const dayMap = {
  '월': 'mon',
  '화': 'tue',
  '수': 'wed',
  '목': 'thu',
  '금': 'fri',
  '토': 'sat',
  '일': 'sun'
};

// 시간 문자열 "수 10:00~12:00" → { day: ['wed'], startHour: 10, endHour: 12 }
export function parseLectureTime(timeStr) {
  if (!timeStr) return { day: [], startHour: null, endHour: null };
  const match = timeStr.match(/([월화수목금토일])\s*(\d{2}):(\d{2})~(\d{2}):(\d{2})/);
  if (!match) return { day: [], startHour: null, endHour: null };
  const day = [dayMap[match[1]]];
  const startHour = parseInt(match[2], 10) + (parseInt(match[3], 10) === 30 ? 0.5 : 0);
  const endHour = parseInt(match[4], 10) + (parseInt(match[5], 10) === 30 ? 0.5 : 0);
  return { day, startHour, endHour };
}

// API 응답 → timetableList 변환
export function convertApiTimetablesToList(apiTimetables) {
  if (!Array.isArray(apiTimetables)) return [];
  return apiTimetables.map((timetable, idx) => {
    // majors, liberals 등 여러 타입의 강의가 있을 수 있음
    const lectures = [];
    // 전공, 교양 등 모든 강의 배열 합치기
    ['majors', 'liberals', 'preRegistered'].forEach(type => {
      if (Array.isArray(timetable[type])) {
        timetable[type].forEach(lec => {
          // 시간 정보 파싱
          const { day, startHour, endHour } = parseLectureTime(lec.time);
          lectures.push({
            id: lec.id || lec.courseId || `${type}-${Math.random()}`,
            name: lec.course?.name || lec.name || '',
            professor: lec.professor || '',
            room: lec.room || '',
            day,
            startHour,
            endHour,
            type: lec.type || '',
            credits: lec.course?.credits || lec.credits || undefined
          });
        });
      }
    });
    return {
      id: idx + 1,
      lectures
    };
  });
}
