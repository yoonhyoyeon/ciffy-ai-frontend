import { authFetch } from '@/utils'; // authFetch를 사용하면 accessToken 자동 포함

const removeSpaces = (str) => (str || '').replace(/\s+/g, '');
const getLectures = async ({ keyword = '', sort = '' } = {}) => {
  const res = await authFetch('/api/lectures');
  if (!res.ok) throw new Error('강의 목록을 불러오지 못했습니다.');
  let lectures = await res.json();

  if (keyword) {
    const lowerKeyword = removeSpaces(keyword.toLowerCase());
    lectures = lectures.filter(
      (lecture) => {
        const name = removeSpaces((lecture.course.name || '').toLowerCase());
        const professor = removeSpaces((lecture.course.professor || '').toLowerCase());
        return name.includes(lowerKeyword) || professor.includes(lowerKeyword);
      }
    );
  }

  // 3. sort 적용 (예: 'title', 'professor', 'rating' 등)
//   if (sort) {
//     lectures = [...lectures].sort((a, b) => {
//       if (sort === 'title') {
//         return a.title.localeCompare(b.title);
//       }
//       if (sort === 'professor') {
//         return a.professor.localeCompare(b.professor);
//       }
//       if (sort === 'rating') {
//         return (b.totalRating || 0) - (a.totalRating || 0);
//       }
//       // 필요시 다른 정렬 조건 추가
//       return 0;
//     });
//   }

  return lectures;
};

const getLectureInfo = async (id) => {
    const res = await authFetch(`/api/lectures/${id}`);
    if (!res.ok) throw new Error('강의 정보를 불러오지 못했습니다.');
    const lecture = await res.json();
    return {
        id: lecture.id,
        title: lecture.course.name,
        professor: lecture.professor,
        assignmentCount: [Math.floor(Math.random() * 10) + 20, Math.floor(Math.random() * 15) + 10, Math.floor(Math.random() * 5) + 1],
        teamCount: [Math.floor(Math.random() * 20) + 25, Math.floor(Math.random() * 10) + 5, Math.floor(Math.random() * 3) + 1],
        gradeCount: [Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 8) + 2, Math.floor(Math.random() * 15) + 30],
    }
}

export { getLectures, getLectureInfo };