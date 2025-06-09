import styles from './index.module.css';
import TimetableLectureItem from './TimetableLectureItem';
import { groupLecturesByDay } from '@/utils';
import cx from 'classnames';

const Timetable = ({data, isHoverable = false}) => {
    const { lectures, id } = data;
    const lecturesByDay = groupLecturesByDay(lectures);
    return (
        <div className={cx([styles.container, isHoverable&&styles.isHoverable])}>
            <div className={styles.timetable_wrap}>
                <div className={styles.mask}>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                </div>
                <div className={styles.time_label}>
                    <span className={styles.label}>9</span>
                    <span className={styles.label}>10</span>
                    <span className={styles.label}>11</span>
                    <span className={styles.label}>12</span>
                    <span className={styles.label}>1</span>
                    <span className={styles.label}>2</span>
                    <span className={styles.label}>3</span>
                    <span className={styles.label}>4</span>
                    <span className={styles.label}>5</span>
                    <span className={styles.label}>6</span>
                </div>
                <div className={styles.column}>
                    <span className={styles.label}>월</span>
                    {
                        lecturesByDay.mon?.map((v, i) => (
                            <TimetableLectureItem 
                                key={i}
                                data={v}
                            />
                        ))
                    }
                </div>
                <div className={styles.column}>
                    <span className={styles.label}>화</span>
                    {
                        lecturesByDay.tue?.map((v, i) => (
                            <TimetableLectureItem 
                                key={i}
                                data={v}
                            />
                        ))
                    }
                </div>
                <div className={styles.column}>
                    <span className={styles.label}>수</span>
                    {
                        lecturesByDay.wed?.map((v, i) => (
                            <TimetableLectureItem 
                                key={i}
                                data={v}
                            />
                        ))
                    }
                </div>
                <div className={styles.column}>
                    <span className={styles.label}>목</span>
                    {
                        lecturesByDay.thu?.map((v, i) => (
                            <TimetableLectureItem 
                                key={i}
                                data={v}
                            />
                        ))
                    }
                </div>
                <div className={styles.column}>
                    <span className={styles.label}>금</span>
                    {
                        lecturesByDay.fri?.map((v, i) => (
                            <TimetableLectureItem 
                                key={i}
                                data={v}
                            />
                        ))
                    }
                </div>
            </div>
            <div className={styles.online_wrap}>
                {
                    lecturesByDay.online?.map((v, i) => (
                        <span key={i}>{ v.title }</span>
                    ))
                }
            </div>
        </div>
    );
}

export default Timetable;