import styles from './index.module.css';
import RatingItem from '../RatingItem';

const FeatureRating = ({data, totalReviewCount, title, label}) => {
    const activeIndex = data.indexOf(Math.max(...data));
    console.log(data);
    
    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.ratingList}>
                {
                    data.map((value, index) => {
                        const isActive = index == activeIndex;
                        console.log(index);
                        return (
                            <RatingItem
                                key={index}
                                value={value}
                                maxValue={totalReviewCount}
                                color='var(--color-blue-2)'
                                isActive={isActive}
                            >
                                <span>{label[index]}</span>
                            </RatingItem>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FeatureRating;