"use client";
import styles from './index.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const messages = [
    '테스트가 완료되었어요',
    '테스트 결과를 바탕으로 분석 중입니다...',
    '곧 멋진 시간표를 보여드릴게요!'
];

const TimetableCreateLoading = () => {
    const [step, setStep] = useState(0);
    const router = useRouter();

    useEffect(() => {
        if (step < messages.length - 1) {
            const randomTime = Math.floor(Math.random() * 3000) + 2000;
            const timer = setTimeout(() => setStep(step + 1), randomTime);
            return () => clearTimeout(timer);
        } else {
            const randomTime = Math.floor(Math.random() * 1000) + 2000;
            const timer = setTimeout(() => router.replace('/timetable/create/select'), randomTime);
            return () => clearTimeout(timer);
        }
    }, [step, router]);

    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <img className={styles.animatedImg} src="/images/img_timetable_create.png" alt="시간표 만들기" />
                <h1 key={step} className={styles.animatedText}>{messages[step]}</h1>
                <span>테스트를 바탕으로 시간표를<br/>짜고 있어요. 조금만 기다려주세요!</span>
            </div>
        </div>
    )
};

export default TimetableCreateLoading;