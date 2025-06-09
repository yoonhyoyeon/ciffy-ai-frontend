import styles from './index.module.css';
import Button from '@/component/Button';
import TotalRating from './component/TotalRating';
import FeatureRating from './component/FeatureRating';
import ReviewList from './component/ReviewList';
import Link from 'next/link';

const LectureDetail = ({lecture}) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <span className={styles.titleText}>{lecture.title}</span>
                    <span className={styles.professorText}>{lecture.professor}</span>
                </div>
                <Link href={`/lecture/write/${lecture.id}`}>
                    <Button size="medium" isFilled>강의 후기 작성하기</Button>
                </Link>
            </div>
            <div className={styles.contents}>
                <div className={styles.totalData}>
                    <TotalRating ratingCount={lecture.ratingCount} />
                    <FeatureRating 
                        data={lecture.assignmentCount} 
                        totalReviewCount={lecture.totalReviewCount} 
                        title="과제"
                        label={['없음', '보통', '많음']}
                    />
                    <FeatureRating 
                        data={lecture.teamCount} 
                        totalReviewCount={lecture.totalReviewCount} 
                        title="조모임"
                        label={['없음', '보통', '많음']}
                    />
                    <FeatureRating 
                        data={lecture.gradeCount}
                        totalReviewCount={lecture.totalReviewCount} 
                        title="성적"
                        label={['너그러움', '보통', '깐깐함']}
                    />
                </div>
                <div className={styles.reviewList}>
                    <ReviewList lectureId={lecture.id} />
                </div>
            </div>
        </div>
    )
}

export default LectureDetail;