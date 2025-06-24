import styles from './index.module.css';
import Button from '@/component/Button';
import TotalRating from './component/TotalRating';
import FeatureRating from './component/FeatureRating';
import ReviewList from './component/ReviewList';
import Link from 'next/link';
import { getLectureInfo } from '@/service/lecture';
import { getLectureReviews } from '@/service/review';

const LectureDetail = async ({lectureId}) => {
    const lecture = await getLectureInfo(lectureId);
    const reviews = await getLectureReviews(lectureId);
    // const assignmentCount = reviews.map(review => review.assignmentCount).reduce((acc, cur) => acc + cur, 0);
    // const teamCount = reviews.map(review => review.teamCount).reduce((acc, cur) => acc + cur, 0);
    // const gradeCount = reviews.map(review => review.gradeCount).reduce((acc, cur) => acc + cur, 0);
    const totalReviewCount = reviews.length;
    const ratingCount = [0, 0, 0, 0, 0];
    reviews.forEach((review) => {
        ratingCount[review.rating - 1]++;
    });
    const assignmentCount = lecture.assignmentCount.reduce((acc, cur) => acc + cur, 0);
    const teamCount = lecture.teamCount.reduce((acc, cur) => acc + cur, 0);
    const gradeCount = lecture.gradeCount.reduce((acc, cur) => acc + cur, 0);

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
                    <TotalRating ratingCount={ratingCount} />
                    <FeatureRating 
                        data={totalReviewCount===0?[0,0,0]:lecture.assignmentCount} 
                        totalReviewCount={assignmentCount} 
                        title="과제"
                        label={['없음', '보통', '많음']}
                    />
                    <FeatureRating 
                        data={totalReviewCount===0?[0,0,0]:lecture.teamCount} 
                        totalReviewCount={teamCount} 
                        title="조모임"
                        label={['없음', '보통', '많음']}
                    />
                    <FeatureRating 
                        data={totalReviewCount===0?[0,0,0]:lecture.gradeCount} 
                        totalReviewCount={gradeCount} 
                        title="성적"
                        label={['너그러움', '보통', '깐깐함']}
                    />
                </div>
                <div className={styles.reviewList}>
                    <ReviewList reviews={reviews} />
                </div>
            </div>
        </div>
    )
}

export default LectureDetail;