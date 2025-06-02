import styles from './index.module.css';
import RatingItem from '../RatingItem';

const TotalRating = ({ ratingCount }) => {
    //index 0이 가장 낮은 평점
    //index 4가 가장 높은 평점
    const reversedRatingCount = [...ratingCount].reverse();
    const totalRating = ratingCount.reduce((acc, cur, index) => acc + (index + 1) * cur, 0) / ratingCount.reduce((acc, cur) => acc + cur, 0);
    const totalReviewCount = ratingCount.reduce((acc, cur) => acc + cur, 0);
    const activeIndex = reversedRatingCount.indexOf(Math.max(...ratingCount));

    return (
        <div className={styles.container}>
            <div className={styles.totalRating}>
                <span className={styles.totalRatingNumber}>
                    {totalRating.toFixed(2)}
                </span>
                <div className={styles.ratingBackground}>
                    <div className={styles.ratingBar} style={{width: `${totalRating * 20}%`}}></div>
                </div>
                <span className={styles.totalReviewNumber}>({totalReviewCount}개의 평가)</span>
            </div>
            <div className={styles.ratingList}>
                {
                    reversedRatingCount.map((value, index) => (
                        <RatingItem 
                            key={index}
                            value={value}
                            maxValue={totalReviewCount}
                            color='var(--color-yellow-0)'
                            nonActiveColor='var(--color-yellow-0-opacity-60)'
                            isActive={index == activeIndex}
                        >
                            <img src="/images/icon_starOn.png"/>
                            <span className={styles.ratingText}>{5-index}</span>
                        </RatingItem>
                    ))
                }
            </div>
        </div>
    )
}

export default TotalRating;