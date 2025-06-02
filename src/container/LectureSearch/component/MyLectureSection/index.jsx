import LectureList from '../LectureList';
import NoResult from '@/component/NoResult';
import styles from './index.module.css';
import SortSelect from '../SortSelect';

const MyLectureSection = ({myLectures, sort}) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <h1 className={styles.title}>내 강의</h1>
                    <h2 className={styles.subtitle}>지금 듣는 강의의 후기를 확인해보세요!</h2>
                </div>
                <SortSelect sort={sort} />
            </div>
            {
                myLectures.length > 0 ?
                <LectureList lectures={myLectures} /> :
                <NoResult message="내 강의의 후기를 확인할 수 없어요" />
            }
        </div>
    )
}

export default MyLectureSection;