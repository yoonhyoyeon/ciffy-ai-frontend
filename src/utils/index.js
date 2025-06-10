export function groupLecturesByDay(lectures) {
    const days = ['mon', 'tue', 'wed', 'thu', 'fri'];
    const result = { online: [] };

    days.forEach(day => {
        result[day] = [];
    });

    lectures.forEach(lecture => {
        if (lecture.type === 'online') {
            result.online.push(lecture);
        } else if (lecture.day.some(day => days.includes(day))) {
            lecture.day.forEach(day => {
                result[day].push(lecture);
            });
        }
    });

    return result;
}

// src/utils/authFetch.js
export async function authFetch(url, options = {}) {
    // 클라이언트 환경에서만 localStorage 접근
    let accessToken = null;
    if (typeof window !== 'undefined') {
      accessToken = localStorage.getItem('access_token');
    }
  
    // 헤더 병합
    const headers = {
      ...(options.headers || {}),
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      'Content-Type': options.body && !(options.body instanceof FormData) ? 'application/json' : undefined,
    };
  
    // fetch 실행
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
      ...options,
      headers,
    });
  
    return response;
  }