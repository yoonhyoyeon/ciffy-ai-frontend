"use client";
import ProgressBar from '@/component/ProgressBar';
import styles from './index.module.css';
import cx from 'classnames';
import CountUp from 'react-countup';

const RequirementProgressItem = ({item}) => {
    const isActive = item.current >= item.total;
    return (
        <div className={styles.requirement_item}>
            <div className={styles.requirement_item_title}>{item.name}</div>
            <div className={cx(styles.requirement_item_text, isActive && styles.requirement_item_text_active)}>
                <CountUp end={item.current} duration={1} /> / {item.total}
            </div>
            <div className={styles.requirement_item_progress}>
                <ProgressBar value={item.current} max={item.total} />
                <div className={styles.percentage}>
                    <CountUp end={Math.round(item.current / item.total * 100)} duration={1} />%
                </div>
            </div>
        </div>
    );
}

export default RequirementProgressItem;