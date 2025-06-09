'use client';
import { useRouter } from 'next/navigation';
import styles from './index.module.css';
import Timetable from '@/component/Timetable';
import Button from '@/component/Button';

const timetableList = [
    {
        id: 1,
        lectures: [
            {
                id: 1,
                title: '인도의 정치 경제와 사회',
                professor: '이지은',
                room: '집401',
                day: ['mon'], // 월요일
                startHour: 9, // 9시~11시
                endHour: 11
            },
            {
                id: 2,
                title: '데이터 구조',
                professor: '박미정',
                room: 'IT201',
                day: ['tue'], // 화요일
                startHour: 11,
                endHour: 13
            },
            {
                id: 3,
                title: '소프트웨어 공학',
                professor: '최준혁',
                room: '컴공301',
                day: ['wed'], // 수요일
                startHour: 13,
                endHour: 15
            },
            {
                id: 4,
                title: '알고리즘',
                professor: '김철수',
                room: 'IT202',
                day: ['thu'], // 목요일
                startHour: 9,
                endHour: 11
            },
            {
                id: 5,
                title: '컴퓨터 네트워크',
                professor: '이영희',
                room: 'IT203',
                day: ['fri'], // 금요일
                startHour: 11,
                endHour: 13
            },
            {
                id: 6,
                title: '온라인 강의1',
                professor: '최준혁',
                type: 'online'
            }
        ]
    },
    {
        id: 2,
        lectures: [
            {
                id: 1,
                title: '인도의 정치 경제와 사회',
                professor: '이지은',
                room: '집401',
                day: ['mon', 'tue'], // 월, 화
                startHour: 9,
                endHour: 11
            },
            {
                id: 2,
                title: '데이터 구조',
                professor: '박미정',
                room: 'IT201',
                day: ['wed'], // 수요일
                startHour: 11,
                endHour: 13
            },
            {
                id: 3,
                title: '소프트웨어 공학',
                professor: '최준혁',
                room: '컴공301',
                day: ['thu'], // 목요일
                startHour: 13,
                endHour: 15
            },
            {
                id: 4,
                title: '운영체제',
                professor: '박성민',
                room: 'IT204',
                day: ['fri'], // 금요일
                startHour: 9,
                endHour: 11
            },
            {
                id: 5,
                title: '온라인 강의2',
                professor: '이수진',
                type: 'online'
            }
        ]
    },
    {
        id: 3,
        lectures: [
            {
                id: 1,
                title: '인도의 정치 경제와 사회',
                professor: '이지은',
                room: '집401',
                day: ['mon', 'tue', 'wed'], // 월, 화, 수
                startHour: 9,
                endHour: 11
            },
            {
                id: 2,
                title: '데이터 구조',
                professor: '박미정',
                room: 'IT201',
                day: ['thu'], // 목요일
                startHour: 11,
                endHour: 13
            },
            {
                id: 3,
                title: '컴퓨터 네트워크',
                professor: '이영희',
                room: 'IT203',
                day: ['fri'], // 금요일
                startHour: 13,
                endHour: 15
            },
            {
                id: 4,
                title: '운영체제',
                professor: '박성민',
                room: 'IT204',
                day: ['thu'], // 목요일
                startHour: 15,
                endHour: 17
            },
            {
                id: 5,
                title: '온라인 강의3',
                professor: '최준혁',
                type: 'online'
            }
        ]
    }  
];
  
const TimetableCreateSelect = () => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>시간표가 완성되었어요</h1>
                <span>마음에 드는 시간표를 눌러 자세히 볼 수 있어요</span>
            </div>
            <div className={styles.timetable_list}>
                {
                    timetableList.map((timetable) => (
                        <div className={styles.timetable_wrap} key={timetable.id}>
                            <Timetable data={timetable} isHoverable={true} />
                            <div className={styles.button_wrap}>
                                <Button onClick={() => router.push(`/timetable/create/detail/${timetable.id}`)} size="small" customStyles={{backgroundColor: 'var(--color-blue-2-opacity-10)', color: 'var(--color-blue-2)', border: 0}}>자세히 보기</Button>
                                <Button size="small" isFilled={true}>선택하기</Button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default TimetableCreateSelect;