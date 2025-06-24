import styles from './index.module.css';
import Link from 'next/link';
const LectureCard = ({lecture}) => {
    return (
        <Link href={`/lecture/detail/${lecture.id}`}>
            <div className={styles.container}>
                <div className={styles.lectureInfo}>
                    <div className={styles.lectureInfoHeader}>
                    <h2>{lecture.course?.name || lecture.name}</h2>
                    <h3>{lecture.classId}</h3>
                </div>
                <div className={styles.lectureInfoFooter}>
                    <span className={styles.professor}>{lecture.professor}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default LectureCard;