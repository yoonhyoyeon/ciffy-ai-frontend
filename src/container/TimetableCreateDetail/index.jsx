'use client';
import styles from './index.module.css';
import Timetable from '@/component/Timetable';
import LectureListScrollX from './LectureListScrollX';
import RequirementProgressBox from '@/component/RequirementProgressBox';
import Button from '@/component/Button';
import { useRouter } from 'next/navigation';

const timetableData = {
    id: 1,
    comment: '팀플과 과제가 적고, 전공 필수 과목이 많은 시간표예요.',
    lectures: [
        {
            id: 1,
            title: '인도의 정치 경제와 사회',
            professor: '이지은',
            room: '집401',
            credit: 3,
            day: ['mon', 'wed'], // 월요일, 수요일
            startHour: 9, // 9시~11시
            endHour: 11
        },
        {
            id: 2,
            title: '데이터 구조',
            professor: '박미정',
            room: 'IT201',
            credit: 3,
            day: ['tue'], // 화요일
            startHour: 11, // 11시~13시
            endHour: 13
        },
        {
            id: 3,
            title: '소프트웨어 공학',
            professor: '최준혁',
            room: '컴공301',
            credit: 3,
            day: ['wed'], // 수요일
            startHour: 13, // 13시~15시
            endHour: 15
        },
        {
            id: 4,
            title: '알고리즘',
            professor: '김철수',
            room: 'IT202',
            credit: 3,
            day: ['thu'], // 목요일
            startHour: 9, // 9시~11시
            endHour: 11
        },
        {
            id: 5,
            title: '컴퓨터 네트워크',
            professor: '이영희',
            room: 'IT203',
            credit: 3,
            day: ['fri'], // 금요일
            startHour: 11, // 11시~13시
            endHour: 13
        },
        {
            id: 6,
            title: '운영체제',
            professor: '박성민',
            room: 'IT204',
            credit: 3,
            day: ['fri', 'tue'], // 금요일, 화요일
            startHour: 14, // 14시~16시
            endHour: 16
        },
        {
            id: 7,
            title: '온라인 강의1',
            professor: '최준혁',
            type: 'online',
            credit: 3
        }
    ]
}

const graduationData = [
    {
      title: '전공',
      items: [
        { name: '전공필수', current: 33, total: 33 },
        { name: '전공선택', current: 23, total: 33 }
      ]
    },
    {
      title: '교양',
      items: [
        { name: '공통교양필수', current: 23, total: 33 },
        { name: '학문기초교양필수', current: 23, total: 33 },
        { name: '교양선택', current: 23, total: 33 }
      ]
    }
];

const TimetableCreateDetail = ({timetableId}) => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.timetable_wrap}>
                <Timetable data={timetableData} isHoverable={true} />
                <div className={styles.button_wrap}>
                    <Button onClick={() => router.back()} size="small" customStyles={{backgroundColor: 'var(--color-blue-2-opacity-10)', color: 'var(--color-blue-2)', border: 0}}>이전</Button>
                    <Button size="small" isFilled={true}>선택하기</Button>
                </div>
            </div>
            <div className={styles.detail_wrap}>
                <div className={styles.comment_wrap}>
                    <h1><img src="/images/icon_starOn.png" alt="시피가 시간표를 분석해봤어요!" />시피가 시간표를 분석해봤어요!</h1>
                    <p className={styles.comment}>{timetableData.comment}</p>
                    <img className={styles.right_img} src="/images/img_timetable_create.png" alt="시피가 시간표를 분석해봤어요!" />
                </div>
                <div className={styles.item_wrap}>
                    <h1>강의후기 모아보기</h1>
                    <LectureListScrollX lectures={timetableData.lectures} />
                </div>
                <div className={styles.item_wrap}>
                    <h1>학기 종료 후 예상 졸업요건</h1>
                    <div className={styles.graduation_list}>
                        {
                            graduationData.map((data) => (
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
