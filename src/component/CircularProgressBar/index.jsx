
'use client';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import styles from './index.module.css';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const CircularProgressBar = ({ value, max, strokeWidth = 5 }) => {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    setPercentage(max > 0 ? (value / max) * 100 : 0);
  }, [value, max]);

  console.log('[CircularProgressBar]', { value, max, percentage });

  return (
    <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={strokeWidth}
        styles={buildStyles({
          pathColor: value >= max ? 'var(--color-blue-1)' : 'var(--color-blue-1-opacity-50)',
          trailColor: 'var(--color-blue-2-opacity-5)',
          textColor: 'var(--color-blue-2)',
          // CSS 기반 애니메이션 설정: stroke-dashoffset 전환
          pathTransition: 'stroke-dashoffset 1s ease-in-out'
        })}
    >
        <div className={value >= max ? styles.circular_progress_bar_text_active : styles.circular_progress_bar_text}>
            <span className={styles.small_text}>전체</span>
            <CountUp end={Math.round(percentage)} duration={1} />%
        </div>
    </CircularProgressbarWithChildren>
  );
};

export default CircularProgressBar;
