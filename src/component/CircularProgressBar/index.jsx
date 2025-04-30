'use client';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { easeQuadInOut } from 'd3-ease';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from './AnimatedProgressProvider';
import styles from './index.module.css';

const CircularProgressBar = ({ value, max, strokeWidth=5 }) => {
    const percentage = value/max*100;
    return (
        <AnimatedProgressProvider
            valueStart={0}
            valueEnd={percentage}
            duration={1.4}
            easingFunction={easeQuadInOut}
        >
            {v => {
                const roundedValue = Math.round(v);
                return (
                    <CircularProgressbarWithChildren 
                        value={v} 
                        strokeWidth={strokeWidth}
                        styles={buildStyles({ pathTransition: "none",
                            pathColor: value>=max?"var(--color-blue-1)":"var(--color-blue-1-opacity-50)",
                            textColor: "var(--color-blue-2)",
                            trailColor: "var(--color-bg)",
                            backgroundColor: "var(--color-bg)",
                         })}
                    >
                        <div className={value===max?styles.circular_progress_bar_text_active:styles.circular_progress_bar_text}><span>전체</span>{`${roundedValue}%`}</div>
                    </CircularProgressbarWithChildren>
                );
            }}
        </AnimatedProgressProvider>      
    );
};

export default CircularProgressBar;