import styles from './ReviewItem.module.css';

const ReviewItem = ({review}) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.ratingBg}>
                    <div className={styles.ratingBar} style={{width: `${review.rating * 20}%`}}></div>
                </div>
                <div className={styles.semester}>{review.semester}</div>
            </div>
            <div className={styles.content}>{review.content}</div>
        </div>
    )
}  

export default ReviewItem;