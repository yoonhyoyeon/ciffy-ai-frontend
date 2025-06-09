import styles from './index.module.css';
import Timetable from '@/component/Timetable';

const timetableList = [
    {
        id: 1,
        lectures: [{
            id: 1,
            title: '인도의 정치 경제와 사회',
            professor: '이지은',
            room: '집401',
            day: ['mon'], // 월요일
            startHour: 11.5, // 11시 시작
            endHour: 14   // 14시(2시) 종료
        },
        {
            id: 2,
            title: '데이터 구조',
            professor: '박미정',
            room: 'IT201',
            day: ['thu', 'fri'], // 목요일
            startHour: 10,
            endHour: 12
        },
        {
            id: 3,
            title: '소프트웨어 공학',
            professor: '최준혁',
            room: '컴공301',
            day: ['fri'], // 금요일
            startHour: 9,
            endHour: 11
        },
        {
            id: 4,
            title: '온라인 강의1',
            professor: '최준혁',
            type: 'online'
        }]
    },
    {
        id: 2,
        lectures: [{
            id: 1,
            title: '인도의 정치 경제와 사회',
            professor: '이지은',
            room: '집401',
            day: ['mon', 'tue'], // 월요일
            startHour: 11.5, // 11시 시작
            endHour: 14   // 14시(2시) 종료
        },
        {
            id: 2,
            title: '데이터 구조',
            professor: '박미정',
            room: 'IT201',
            day: ['thu', 'fri'], // 목요일
            startHour: 10,
            endHour: 12
        },
        {
            id: 3,
            title: '소프트웨어 공학',
            professor: '최준혁',
            room: '컴공301',
            day: ['fri'], // 금요일
            startHour: 9,
            endHour: 11
        }]
    },
    {
        id: 3,
        lectures: [{
            id: 1,
            title: '인도의 정치 경제와 사회',
            professor: '이지은',
            room: '집401',
            day: ['mon', 'tue', 'wed'], // 월요일
            startHour: 11.5, // 11시 시작
            endHour: 14   // 14시(2시) 종료
        },
        {
            id: 2,
            title: '데이터 구조',
            professor: '박미정',
            room: 'IT201',
            day: ['thu', 'fri'], // 목요일
            startHour: 10,
            endHour: 12
        },
        {
            id: 3,
            title: '소프트웨어 공학',
            professor: '최준혁',
            room: '컴공301',
            day: ['fri'], // 금요일
            startHour: 9,
            endHour: 11
        }]
    }  
];
  
const TimetableCreateSelect = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>시간표가 완성되었어요</h1>
                <span>마음에 드는 시간표를 눌러 자세히 볼 수 있어요</span>
            </div>
            <div className={styles.timetable_list}>
                {
                    timetableList.map((timetable) => (
                        <Timetable key={timetable.id} data={timetable} isHoverable={true} />
                    ))
                }
            </div>
        </div>
    );
}

export default TimetableCreateSelect;