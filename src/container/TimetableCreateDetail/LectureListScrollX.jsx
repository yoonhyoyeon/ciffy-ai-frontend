import LectureCard from '@/component/LectureCard';
import styles from './index.module.css';
import cx from 'classnames';

const LectureListScrollX = ({lectures}) => {
    return (
        <div className={styles.lecture_list}>
            <div className={cx(styles.cover, styles.left_cover)}>
                <img src="/images/icon_right_arrow.png" alt="추가" />
            </div>
            <div className={cx(styles.cover, styles.right_cover)}>
                <img src="/images/icon_right_arrow.png" alt="추가" />
            </div>
            <div className={styles.lecture_list_wrap}>
                {
                    lectures.map((lecture) => (
                        <div key={lecture.id} className={styles.lecture_card}>
                        <LectureCard lecture={lecture} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LectureListScrollX;