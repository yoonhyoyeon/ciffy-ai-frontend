'use client';
import styles from './index.module.css';
import CountUp from 'react-countup';

const RatingItem = ({value, maxValue, children, color='var(--color-blue-2)',nonActiveColor='var(--color-blue-2-opacity-60)', isActive=false}) => {
    const activeColor = isActive ? color : nonActiveColor;
    return (
        <div className={styles.container}>
            <div className={styles.label} style={{color: activeColor}}>
                {children}
            </div>
            <div className={styles.progressWrapper}>
                <div className={styles.percentage} style={{color: activeColor}}>
                    <CountUp end={Math.round(value/maxValue*100)} duration={1} />%
                </div>
                <div className={styles.barBackground}>
                    <div 
                        className={styles.bar} 
                        style={{
                            width: `${value===0?0:value/maxValue*100}%`,
                            backgroundColor: activeColor
                        }}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RatingItem;