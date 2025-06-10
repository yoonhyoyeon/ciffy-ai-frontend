import { authFetch } from '@/utils'; // authFetch를 사용하면 accessToken 자동 포함

const removeSpaces = (str) => (str || '').replace(/\s+/g, '');
const getLectures = async ({ keyword = '', sort = '' } = {}) => {
  // 1. 전체 강의 목록 받아오기
  const res = await authFetch('/api/courses');
  if (!res.ok) throw new Error('강의 목록을 불러오지 못했습니다.');
  let lectures = await res.json();

  // 2. keyword 필터링 (title, professor 등에서 포함되는지)
  if (keyword) {
    const lowerKeyword = removeSpaces(keyword.toLowerCase());
    lectures = lectures.filter(
      (lecture) => {
        const name = removeSpaces((lecture.name || '').toLowerCase());
        const professor = removeSpaces((lecture.professor || '').toLowerCase());
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
    const res = await authFetch(`/api/courses/${id}`);
    if (!res.ok) throw new Error('강의 정보를 불러오지 못했습니다.');
    const lecture = await res.json();
    return {
        id: lecture.id,
        title: lecture.name,
        professor: lecture.professor,
        totalRating: 4.5,
        ratingCount: [3, 0, 4, 10, 27],
        assignmentCount: [4, 26, 13],
        teamCount: [30, 8, 5],
        gradeCount: [1, 4, 38],
        totalReviewCount: 43,
    }
}

export { getLectures, getLectureInfo };