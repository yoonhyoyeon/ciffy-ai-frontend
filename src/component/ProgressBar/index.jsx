"use client";
import styles from './index.module.css';
import { useEffect, useState } from 'react';

const ProgressBar = ({value, max, barColor='var(--color-blue-1-opacity-50)', barHeight='10px'}) => {
    const [progress, setProgress] = useState(0);
    const activeBarColor = 'var(--color-blue-1)';
    useEffect(() => {
        setProgress(value/max*100);
    }, []);
    return (
        <div 
            className={styles.progress_bg}
            style={{height: barHeight}}
        >
            <div 
                className={styles.progress_bar} 
                style={{width: progress+'%', backgroundColor: value===max?activeBarColor:barColor}}
            ></div>
        </div>
    );
}

export default ProgressBar;