"use client";
import styles from '../../index.module.css';

const NavigationButtons = ({ index, max, setIndex }) => {
    return (
        <div className={styles.navigation_buttons}>
            {index > 1 && <button onClick={() => setIndex(index - 1)}>이전</button>}
            {index < max && <button onClick={() => setIndex(index + 1)}>다음</button>}
        </div>
    );
}
export default NavigationButtons;