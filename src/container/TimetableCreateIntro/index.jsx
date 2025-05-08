import styles from './index.module.css';
import Link from 'next/link';
import Button from '@/component/Button';

const TimetableCreateIntro = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <img src="/images/img_timetable_create.png" alt="시간표 만들기" />
                <h1>나에게 최적의 시간표는 뭘까?</h1>
                <span>시간표를 짜기 전 10문항의 테스트로<br/>최적의 조건을 찾아봐요</span>
                <Link href="/timetable/create/survey">
                    <Button size="medium" isFilled>시작하기</Button>
                </Link>
            </div>
        </div>
    )
};

export default TimetableCreateIntro;