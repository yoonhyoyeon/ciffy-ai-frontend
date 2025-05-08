import styles from './BottomButtonGroup.module.css';

export default function BottomButtonGroup({ onPrev, onNext }) {
  return (
    <div className={styles.buttonGroup}>
      <button className={styles.prevButton} onClick={onPrev}>이전</button>
      <button className={styles.nextButton} onClick={onNext}>다음</button>
    </div>
  );
}