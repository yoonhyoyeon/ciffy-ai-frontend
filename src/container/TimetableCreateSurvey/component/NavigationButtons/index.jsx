"use client";
import styles from '../../index.module.css';

const NavigationButtons = ({ index, max, setIndex }) => {
    return (
        <div className={styles.navigation_buttons}>
            {index >= 1 && <button className={styles.prev_button} onClick={() => setIndex(index - 1)}>이전</button>}
            {index < max && <button className={styles.next_button} onClick={() => setIndex(index + 1)}>다음</button>}
            {index >= max && <button className={styles.next_button}>테스트 완료</button>}
        </div>
    );
}
export default NavigationButtons;