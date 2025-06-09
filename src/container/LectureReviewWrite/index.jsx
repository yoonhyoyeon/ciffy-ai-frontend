import styles from './index.module.css';
import ReviewWriteForm from './component/ReviewWriteForm';

const LectureReviewWrite = ({ lecture }) => {
    return (
        <div className={styles.container}>
            <h1>강의후기 작성하기</h1>
            <div className={styles.description}>
                <ul>
                    <li>어떤 점이 좋았는지, 아쉬웠는지 구체적인 내용을 작성해주세요.</li>
                    <li>강의와 관련 없는 내용은 삼가주세요.</li>
                    <li>비방, 욕설, 차별적 표현은 금지됩니다.</li>
                    <li>개인정보는 작성하지 마세요.</li>
                </ul>
            </div>
            <div className={styles.lecture_info}>
                <div className={styles.lecture_info_item}>
                    <span className={styles.label}>강의명</span>
                    <span className={styles.value}>{lecture.title}</span>
                </div>
                <div className={styles.lecture_info_item}>
                    <span className={styles.label}>교수님</span>
                    <span className={styles.value}>{lecture.professor}</span>
                </div>
            </div>
            <ReviewWriteForm lectureId={lecture.id} />
        </div>
    )
}

export default LectureReviewWrite;