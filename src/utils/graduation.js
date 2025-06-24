export const convertTrackToData = (track) => {
    return track.map((track) => {
        const takedLectureCount = track.subjects.reduce((cnt, lecture) => cnt + lecture.taken, 0);
        return {
            track: track.track,
            name: track.name,
            lectureCount: track.subjects.length,
            takedLectureCount: takedLectureCount,
            requiredCount: 6,
            lectures: track.subjects,
            status: takedLectureCount >= 6 ? 'P' : 'F',
        }
    });
}

export function convertGraduationData(graduation) {
  if (!graduation || !graduation.requiredCredits || !graduation.completedCredits) return {
    total: { current: 0, total: 0 },
    requirements: []
  };

  // 전공
  const majorItems = [
    {
      name: '전공필수',
      current: graduation.completedCredits['전공필수'] || 0,
      total: graduation.requiredCredits['전공필수'] || 0
    },
    {
      name: '전공선택',
      current: graduation.completedCredits['전공선택'] || 0,
      total: graduation.requiredCredits['전공선택'] || 0
    }
  ];

  // 교양
  const liberalNames = ['공통필수', '균형교양', '학문기초', '전공기초'];
  const liberalItems = liberalNames.map(name => ({
    name,
    current: graduation.completedCredits[name] || 0,
    total: graduation.requiredCredits[name] || 0
  }));

  // 전체 학점
  const totalCurrent = Object.values(graduation.completedCredits).reduce((a, b) => a + b, 0);
  const totalRequired = graduation.requiredCredits['졸업학점'] || 0;

  return {
    total: { current: totalCurrent, total: totalRequired },
    requirements: [
      { title: '전공', items: majorItems },
      { title: '교양', items: liberalItems }
    ]
  };
}

export function convertTakenLecturesToList(takenLectures) {
    const list = [];
    takenLectures.forEach(semester => {
        semester.courses.forEach(course => {
            list.push({
                id: course.course.id,
                name: course.course.name,
                type: course.course.type,
                credit: course.course.credits,
            });
        });
    });
    return list;
}