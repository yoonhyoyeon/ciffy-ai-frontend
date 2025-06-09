import styles from './index.module.css';
import Timetable from '@/component/Timetable';

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
            day: ['fri'], // 금요일
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

const MyPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.timetable_wrap}>
                <Timetable data={timetableData} />
            </div>
            <div className={styles.user_info_wrap}>
                <div className={styles.header}>
                    <h1>내 정보</h1>
                    <span className={styles.logout}><img src="/images/icon_logout.png" alt="로그아웃" />로그아웃</span>
                </div>
                <div className={styles.user_info}>
                    <div className={styles.user_info_item}>
                        <span className={styles.user_info_item_label}>이름</span>
                        <span className={styles.user_info_item_value}>홍길동</span>
                    </div>
                    <div className={styles.user_info_item}>
                        <span className={styles.user_info_item_label}>학과</span>
                        <span className={styles.user_info_item_value}>컴퓨터공학과</span>
                    </div>
                    <div className={styles.user_info_item}>
                        <span className={styles.user_info_item_label}>학기</span>
                        <span className={styles.user_info_item_value}>3-1학기</span>
                    </div>
                    <div className={styles.user_info_item}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPage;