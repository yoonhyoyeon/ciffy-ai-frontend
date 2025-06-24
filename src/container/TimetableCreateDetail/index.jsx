'use client';
import styles from './index.module.css';
import Timetable from '@/component/Timetable';
import LectureListScrollX from './LectureListScrollX';
import RequirementProgressBox from '@/component/RequirementProgressBox';
import Button from '@/component/Button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTimetableStore } from '@/store/timetable';
import { convertApiTimetablesToList } from '@/utils/timetable';

// const timetableData = {
//     id: 1,
//     comment: '팀플과 과제가 적고, 전공 필수 과목이 많은 시간표예요.',
//     lectures: [
//         {
//             id: 100001,
//             name: '인도의 정치 경제와 사회',
//             professor: '이지은',
//             room: '집401',
//             day: ['mon', 'tue', 'wed'], // 월, 화, 수
//             startHour: 9,
//             endHour: 11
//         },
//         {
//             id: 100002,
//             name: '데이터 구조',
//             professor: '박미정',
//             room: 'IT201',
//             day: ['thu'], // 목요일
//             startHour: 11,
//             endHour: 13
//         },
//         {
//             id: 100003,
//             name: '컴퓨터 네트워크',
//             professor: '이영희',
//             room: 'IT203',
//             day: ['fri'], // 금요일
//             startHour: 13,
//             endHour: 15
//         },
//         {
//             id: '006132',
//             name: '영상처리',
//             professor: '한동일',
//             room: 'IT204',
//             day: ['mon', 'wed'], // 월, 화, 수
//             startHour: 15,
//             endHour: 16.5
//         },
//         {
//             id: 100005,
//             name: '온라인 강의3',
//             professor: '최준혁',
//             type: 'online'
//         },
//         {
//             id: 100006,
//             name: '컴퓨터구조',
//             professor: '성춘향',
//             room: 'CO303',
//             day: ['fri'], // 금요일
//             startHour: 15,
//             endHour: 17
//         }
//     ]
// }

const graduationData = [
    {
      title: '전공',
      items: [
        { name: '전공필수', current: 30, total: 33 },
        { name: '전공선택', current: 23, total: 39 }
      ]
    },
    {
      title: '교양',
      items: [
        { name: '공통교양필수', current: 7, total: 8 },
        { name: '학문기초교양필수', current: 3, total: 3 },
        { name: '교양선택', current: 11, total: 21 }
      ]
    }
];

const TimetableCreateDetail = ({timetableId}) => {
    const router = useRouter();
    const [graduationDataState, setGraduationDataState] = useState(graduationData);
    const { setSelectedTimetableId, convertedTimetable, loadTimetable } = useTimetableStore();
    const timetableData = convertedTimetable[timetableId-1];

    useEffect(() => {
        if (convertedTimetable.length === 0) {
            loadTimetable();
        }
    }, []);

    useEffect(() => {
        const saved = typeof window !== 'undefined' && localStorage.getItem('graduationData');
        if (saved) {
            const parsed = JSON.parse(saved);
            // graduationDataState는 graduationData와 동일한 구조의 requirements 배열만 필요
            if (parsed.requirements) {
                setGraduationDataState(parsed.requirements);
            }
        }
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.timetable_wrap}>
                <Timetable data={timetableData||{ lectures: [], id: null }} isHoverable={true} />
                <div className={styles.button_wrap}>
                    <Button onClick={() => router.back()} size="small" customStyles={{backgroundColor: 'var(--color-blue-2-opacity-10)', color: 'var(--color-blue-2)', border: 0}}>이전</Button>
                    <Button size="small" isFilled={true} onClick={() => { setTimeout(() => { setSelectedTimetableId(timetableId); alert('시간표가 추가되었습니다.'); router.push('/mypage') }, 1000); }}>선택하기</Button>
                </div>
            </div>
            <div className={styles.detail_wrap}>
                <div className={styles.comment_wrap}>
                    <h1><img src="/images/icon_starOn.png" alt="시피가 시간표를 분석해봤어요!" />시피가 시간표를 분석해봤어요!</h1>
                    <p className={styles.comment}>팀플과 과제가 적고, 전공 필수 과목이 많은 시간표예요.</p>
                    <img className={styles.right_img} src="/images/img_timetable_create.png" alt="시피가 시간표를 분석해봤어요!" />
                </div>
                <div className={styles.item_wrap}>
                    <h1>강의후기 모아보기</h1>
                    <LectureListScrollX lectures={timetableData?.lectures||[]} />
                </div>
                <div className={styles.item_wrap}>
                    <h1>학기 종료 후 예상 졸업요건</h1>
                    <div className={styles.graduation_list}>
                        {
                            graduationDataState.map((data) => (
                                <RequirementProgressBox key={data.title} data={data} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimetableCreateDetail;
