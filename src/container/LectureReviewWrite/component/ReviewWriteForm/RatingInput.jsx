'use client';
import styles from './index.module.css';

const RatingInput = () => {
    return (
        <div className={styles.input_item}>
            <span className={styles.title}>평점</span>
            <div className={styles.ratingContainer}>
                {[5, 4, 3, 2, 1].map((value) => (
                    <div key={value} className={styles.ratingWrapper}>
                        <input 
                            type="radio" 
                            id={`rating${value}`} 
                            name="rating" 
                            value={value} 
                            required 
                        />
                        <label 
                            htmlFor={`rating${value}`} 
                            className={styles.ratingLabel}
                        >
                            <div className={styles.ratingStar}></div>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RatingInput;