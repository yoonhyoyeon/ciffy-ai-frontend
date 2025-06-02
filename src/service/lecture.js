const getLectures = async ({ keyword, sort }) => {
    return [
        {
            id: 98291,
            title: '그래픽 디자인',
            professor: '심대기',
        },
        {
            id: 98292,
            title: '그래픽 디자인',
            professor: '심대기',
        },
        {
            id: 98293,
            title: '그래픽 디자인',
            professor: '심대기',
        },
        {
            id: 98294,
            title: '그래픽 디자인',
            professor: '심대기',
        },
        {
            id: 98295,
            title: '그래픽 디자인',
            professor: '심대기',
        },
        {
            id: 98296,
            title: '그래픽 디자인',
            professor: '심대기',
        },
        {
            id: 98297,
            title: '그래픽 디자인',
            professor: '심대기',
        },
        {
            id: 98298,
            title: '그래픽 디자인',
            professor: '심대기',
        },
    ];
};

const getLectureInfo = async (id) => {
    return {
        id: 98291,
        title: '그래픽 디자인',
        professor: '심대기',
        totalRating: 4.5,
        ratingCount: [3, 0, 4, 10, 27],
        assignmentCount: [4, 26, 13],
        teamCount: [30, 8, 5],
        gradeCount: [1, 4, 38],
        totalReviewCount: 43,
    }
}

export { getLectures, getLectureInfo };