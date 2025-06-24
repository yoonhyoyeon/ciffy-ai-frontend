"use client";
import styles from '../../index.module.css';
import { useRouter } from 'next/navigation';

const NavigationButtons = ({ index, max, setIndex, onSubmit }) => {
    const router = useRouter();
    return (
        <div className={styles.navigation_buttons}>
            {index >= 1 && <button className={styles.prev_button} onClick={() => setIndex(index - 1)}>이전</button>}
            {index < max-1 && <button className={styles.next_button} onClick={() => setIndex(index + 1)}>다음</button>}
            {index === max-1 && <button className={styles.next_button} onClick={onSubmit}>테스트 완료</button>}
        </div>
    );
}
export default NavigationButtons;