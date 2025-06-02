import styles from './index.module.css';
import LectureCard from './LectureCard';

const LectureList = ({lectures}) => {
    return (
        <div className={styles.container}>
            {
                lectures.map((lecture) => (
                    <LectureCard key={lecture.id} lecture={lecture} />
                ))
            }
        </div>
    )
}

export default LectureList;