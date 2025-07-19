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

export async function authFetch(url, options = {}) {
    let finalUrl = url;
    let accessToken = null;
    if (typeof window !== 'undefined') {
        // localStorage에서 access_token 가져오기 (클라이언트)
        accessToken = localStorage.getItem('access_token');
    }
    else {
        // 쿠키에서 access_token 가져오기 + 절대 URL (서버사이드)
        finalUrl = process.env.NEXT_PUBLIC_API_URL + url;
        try {
            const { cookies } = await import('next/headers');
            const cookieStore = await cookies();
            accessToken = cookieStore.get('access_token')?.value;
        } catch (error) {
            console.error('쿠키 접근 실패:', error);
        }
    }

    // Authorization 헤더에 토큰 추가
    const headers = { ...(options.headers || {}) };

    if (accessToken) {
        headers['Authorization'] = accessToken.startsWith('Bearer ')
            ? accessToken
            : 'Bearer ' + accessToken;
    }

    // Content-Type 설정
    if (options.body && !(options.body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
    }
    
    const response = await fetch(finalUrl, {
        ...options,
        headers
    });
    
    return response;
}