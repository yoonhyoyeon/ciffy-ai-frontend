'use client';
import styles from './index.module.css';

const DownArrow = () => {
    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }
    return (
        <img onClick={scrollDown} className={styles.down_arrow} src="/images/icon_down_arrow.png" />
    )
}

export default DownArrow;