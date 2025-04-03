"use client";
import styles from './index.module.css';
import { useEffect, useState } from 'react';

const ProgressBar = ({data, max, barColor='var(--color-blue-1)', height='14px'}) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        setProgress(data/max*100);
    }, []);
    return (
        <div 
            className={styles.progress_bg}
            style={{height: height}}
        >
            <div 
                className={styles.progress_bar} 
                style={{width: progress+'%', backgroundColor: barColor}}
            ></div>
        </div>
    );
}

export default ProgressBar;