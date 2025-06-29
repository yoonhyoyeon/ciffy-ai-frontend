"use client";
import ProgressBar from '@/component/ProgressBar';
import styles from './index.module.css';
import cx from 'classnames';
import CountUp from 'react-countup';

const CertificationProgressItem = ({item}) => {
    const isActive = item.status === 'P' || item.current >= item.max;
    return (
        <div className={styles.certification_item}>
            <div className={styles.certification_item_top}>
                <div className={styles.certification_item_title}>{item.name}</div>
                <div className={cx(styles.certification_item_text, isActive && styles.status_active)}>{item.status ? item.status : item.current + ' / ' + item.max}</div>
            </div>
            <div className={styles.certification_item_progress}>
                <ProgressBar value={item.status ? (item.status === 'P' ? 1 : 0) : item.current/item.max} max={1} />
                <div className={styles.percentage}>
                    <CountUp end={item.status ? (item.status === 'P' ? 100 : 0) : item.current/item.max*100} duration={1} />%
                </div>
            </div>
        </div>
    );
}

export default CertificationProgressItem;