'use client'
import ProgressBar from "@/component/ProgressBar";
import styles from '../../index.module.css';

const SurveyProgressBar = ({ index, max }) => {
    return (
        <div className={styles.progress_bar}>
            <ProgressBar 
                value={index} 
                max={max} 
                barColor="var(--color-blue-2)" 
                barHeight={4}
            />
            <span>{Math.round(index / max * 100)}%</span>
        </div>
    );
}

export default SurveyProgressBar;