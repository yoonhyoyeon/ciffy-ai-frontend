'use client';
import styles from './index.module.css';
import Link from 'next/link';
import Button from '@/component/Button';
import cx from 'classnames';
import { useRef, useEffect, useState } from 'react';

const Description = ({type, tag, title, description, btn, image}) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={cx(
                styles.container,
                type === 'right' ? styles.fromRight : styles.fromLeft,
                visible && styles.fadeIn,
                type === 'right' && styles.right
            )}
        >
            <div className={styles.text_area}>
                <div className={styles.contents}>
                    <div className={styles.tag}>{tag}</div>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.description}>{description}</div>
                    <Link href={btn.link}>
                        <Button size="medium">{btn.text}</Button>
                    </Link>
                </div>
            </div>
            <div className={styles.image_area}>
                <div className={styles.image_container}>
                    <img src={image}></img>
                </div>
            </div>
        </div>
    )
}

export default Description;