import ProgressBar from '@/component/ProgressBar';
import styles from './index.module.css';
import cx from 'classnames';

const RequirementProgressItem = ({item}) => {
    const isActive = item.current >= item.total;
    return (
        <div className={styles.requirement_item}>
            <div className={styles.requirement_item_title}>{item.name}</div>
            <div className={cx(styles.requirement_item_text, isActive && styles.requirement_item_text_active)}>{item.current} / {item.total}</div>
            <div className={styles.requirement_item_progress}>
                <ProgressBar value={item.current} max={item.total} />
                <div className={styles.percentage}>{Math.round(item.current / item.total * 100)}%</div>
            </div>
        </div>
    );
}

export default RequirementProgressItem;