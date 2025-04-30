import styles from './index.module.css';
import CircularProgressBar from '@/component/CircularProgressBar';

const TotalGraduationBox = ({data}) => {
    const {total, current} = data;
    const isActive = current >= total;

    return (
        <div className={styles.container}>
            <div className={styles.progress_bar_wrap}>
                <CircularProgressBar value={current} max={total} />
            </div>
            <div className={styles.text_wrap}>
                <h1>전체</h1>
                <h3>총 기준 학점 <span className={isActive ? styles.active : ''}>{total}</span></h3>
                <h3>총 이수 학점 <span className={isActive ? styles.active : ''}>{current}</span></h3>
            </div>
        </div>
    );
}

export default TotalGraduationBox;