'use client';
import { useState, useEffect } from 'react';
import styles from '../index.module.css';
import cx from 'classnames';
import Table from '@/component/Table';
import { useGraduationStore } from '@/store/graduation';
import { useAuthStore } from '@/store/auth';

const courseList = [
    {
        id: 9489,
        name: '세계사:인간과문명',
        type: '교선',
        area: '사상과 역사',
        credit: 3,
    },
    {
        id: 9790,
        name: '고급프로그래밍입문-P',
        type: '교선1',
        area: '자연과과학기술',
        credit: 3,
    },
    {
        id: 9936,
        name: 'Technical Writing기초',
        type: '교선',
        area: '자연과과학기술',
        credit: 2,
    },
];

const tableHeaders = ['학수번호', '과목명', '이수구분', '학점', '이수여부'];


const GraduationMajor = () => {
    const tabs = ['전공필수', '전공선택'];
    const [selectedTab, setSelectedTab] = useState(0);
    const { courses, takenLectures, fetchTakenLectures, fetchCourses } = useGraduationStore();
    const { user } = useAuthStore();
    useEffect(() => {
        fetchCourses();
        fetchTakenLectures();
    }, []);
    console.log(takenLectures);

    const convertedData = {
        "전공필수": courses.filter(course => course.type === '전공필수' && course.mandatory === user.major).map(course => ({
            id: course.id,
            name: course.name,
            type: course.type,
            credit: course.credits,
            taken: takenLectures.some(lecture => lecture.id === course.id),
        })),
        "전공선택": courses.filter(course => course.type === '전공선택' && course.mandatory === user.major).map(course => ({
            id: course.id,
            name: course.name,
            type: course.type,
            credit: course.credits,
            taken: takenLectures.some(lecture => lecture.id === course.id),
        })),
    }
    console.log(convertedData);
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>전공</h1>
            <div className={styles.tab}>
                {tabs.map((tab, index) => (
                    <span 
                        key={index} 
                        className={cx(styles.tab_item, selectedTab === index && styles.active)} 
                        onClick={() => setSelectedTab(index)}
                    >{tab}</span>
                ))}
            </div>
            <div className={styles.content}>
                <h2 className={styles.subtitle}>이번 학기에 수강할 수 있어요.</h2>
                <Table headers={tableHeaders} data={convertedData[tabs[selectedTab]]} />
            </div>
        </div>
    )
}

export default GraduationMajor;
