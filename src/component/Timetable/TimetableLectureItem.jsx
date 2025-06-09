'use client';
import { useEffect, useState } from 'react';
import styles from './index.module.css';

const TimetableLectureItem = ({ data }) => {
    const { title, professor, room, day, startHour, endHour } = data;
    const [random, setRandom] = useState(1);

    useEffect(() => {
        setRandom(Math.floor(Math.random() * 4 + 1));
    }, []);

    const style = {
        height: `${(endHour - startHour) * 45}px`,
        top: `${(startHour - 9) * 45}px`
    };

    // fadeIn1, fadeIn2, fadeIn3, fadeIn4 클래스가 CSS에 정의되어 있어야 함
    const animationClass = styles[`fadeIn${random}`] || styles.fadeIn1;

    return (
        <div className={`${styles.item_container} ${animationClass}`} style={style}>
            <span className={styles.name}>
                { title }
            </span>
            <span className={styles.subtxt}>
                { professor }<br />
                { room }
            </span>
        </div>
    );
}

export default TimetableLectureItem;