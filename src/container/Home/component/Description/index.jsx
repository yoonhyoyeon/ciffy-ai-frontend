import styles from './index.module.css';
import Link from 'next/link';
import Button from '@/component/Button';
import cx from 'classnames';

const Description = ({type, tag, title, description, btn, image}) => {
    return (
        <div className={cx(styles.container, type === 'right' && styles.right)}>
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