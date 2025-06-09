'use client';
import styles from './index.module.css';
import { useState } from 'react';
import cx from 'classnames';

const RatingInput = () => {
    const [selectedRating, setSelectedRating] = useState(0);
    return (
        <div className={styles.input_item}>
            <span className={styles.title}>평점</span>
            {
                [1,2,3,4,5].map((value) => (
                    <div key={value}>
                        <input hidden type="radio" id={`rating${value}`} name="rating" value={value} checked={selectedRating === value} onChange={() => setSelectedRating(value)} required />
                        <label htmlFor={`rating${value}`} className={cx(styles.ratingLabel, value <= selectedRating && styles.ratingLabelActive)}>
                            <div className={styles.ratingStar}></div>
                        </label>
                    </div>
                ))
            }
        </div>
    );
}

export default RatingInput;