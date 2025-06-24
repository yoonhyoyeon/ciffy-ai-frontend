'use client';
import { useRouter } from 'next/navigation';
import styles from './index.module.css';
import Timetable from '@/component/Timetable';
import Button from '@/component/Button';
import { useTimetableStore } from '@/store/timetable';
import { useEffect } from 'react';

const TimetableCreateSelect = () => {
    const router = useRouter();
    const { convertedTimetable, loadTimetable } = useTimetableStore();
    useEffect(() => {
        if (convertedTimetable.length === 0) {
            loadTimetable();
        }
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>시간표가 완성되었어요</h1>
                <span>마음에 드는 시간표를 눌러 자세히 볼 수 있어요</span>
            </div>
            <div className={styles.timetable_list}>
                {
                    convertedTimetable.map((timetable) => (
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