import ProgressBar from '@/component/ProgressBar';
import styles from './index.module.css';
import cx from 'classnames';
const CertificationProgressItem = ({item}) => {
    const isActive = item.status === 'P';
    return (
        <div className={styles.certification_item}>
            <div className={styles.certification_item_top}>
                <div className={styles.certification_item_title}>{item.name}</div>
                <div className={cx(styles.certification_item_text, isActive && styles.status_active)}>{item.status}</div>
            </div>
            <div className={styles.certification_item_progress}>
                <ProgressBar value={isActive ? 1 : 0} max={1} />
                <div className={styles.percentage}>{isActive ? 100 : 0}%</div>
            </div>
        </div>
    );
}

export default CertificationProgressItem;