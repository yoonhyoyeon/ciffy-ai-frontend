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
    // localStorage에서 access_token 가져오기 (클라이언트)
    let accessToken = null;
    if (typeof window !== 'undefined') {
        accessToken = localStorage.getItem('access_token');
    }
    
    // localStorage 접근 불가능하면 쿠키에서 가져오기 (서버사이드)
    if (!accessToken && typeof document !== 'undefined') {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; access_token=`);
        if (parts.length === 2) {
            accessToken = parts.pop().split(';').shift();
        }
    }
    
    // 서버사이드에서 쿠키 접근 (Next.js headers)
    if (!accessToken) {
        try {
            const { cookies } = await import('next/headers');
            const cookieStore = await cookies();
            accessToken = cookieStore.get('access_token')?.value;
        } catch (error) {
            // 쿠키 접근 실패 시 무시
        }
    }
    
    const headers = { ...(options.headers || {}) };

    // Authorization 헤더에 토큰 추가
    if (accessToken) {
        headers['Authorization'] = accessToken.startsWith('Bearer ')
            ? accessToken
            : 'Bearer ' + accessToken;
    }

    // Content-Type 설정 (FormData가 아닌 경우에만)
    if (options.body && !(options.body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
    }
    
    // fetch 실행 (Authorization 헤더만 사용)
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
        ...options,
        headers
    });
    
    return response;
}