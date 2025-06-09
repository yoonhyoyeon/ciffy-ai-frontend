'use server';
const createReviewAction = async (formData) => {
    // const { lectureId, rating, semester, content, assignment, group, score } = formData;
    // const review = {
    //     lectureId,
    //     rating,
    //     semester,
    //     content,
    //     assignment,
    //     group,
    //     score,
    // }
    console.log(formData);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                status: 200,
                message: '리뷰가 성공적으로 작성되었습니다.',
                data: formData,
            });
        }, 1000);
    });
}

export { createReviewAction };