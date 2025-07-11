import styles from './index.module.css';
import ReviewItem from './ReviewItem';
import NoResult from '@/component/NoResult';

const ReviewList = ({reviews}) => {
    return (
        <div className={styles.container}>
            {
                reviews.length > 0 ? (
                    reviews.map((review) => (
                        <ReviewItem key={review.id} review={review} />
                    ))
                ) : (
                    <NoResult message={`아직 강의 후기가 없어요\n첫번째 후기를 작성해보세요`} />
                )
            }
        </div>
    )
}

export default ReviewList;