'use client';
import { useState, useEffect } from 'react';
import styles from '../index.module.css';
import cx from 'classnames';
import Table from '@/component/Table';
import { useGraduationStore } from '@/store/graduation';

const courseList = [
    {
        id: '010352',
        name: 'English Listening Practice 1',
        type: '교필',
        credit: 2,
    },
    {
        id: '010354',
        name: 'English Reading Practice 1',
        type: '교필',
        credit: 2,
    },
    {
        id: '011110',
        name: '신입생세미나',
        type: '교필',
        credit: 1,
    },
    {
        id: '011182',
        name: '대학생활과진로탐색',
        type: '교필',
        credit: 1,
    },
    {
        id: '011183',
        name: '취창업과진로설계',
        type: '공필',
        credit: 1,
    },
    {
        id: '009045',
        name: '창업과기업가정신1',
        type: '공필',
        credit: 1,
    },
    {
        id: '009067',
        name: '문제해결을위한글쓰기와발표',
        type: '공필',
        credit: 3,
    },
    {
        id: '009068',
        name: '서양철학:쟁점과토론',
        type: '공필',
        credit: 3,
    },
];

const tableHeaders = ['학수번호', '과목명', '이수구분', '학점', '이수여부'];


const GraduationGeneral = () => {
    const tabs = ['공통교양필수', '균형교양필수', '학문기초교양필수', '전공기초교양필수'];
    const [selectedTab, setSelectedTab] = useState(0);
    const { takenLectures, fetchTakenLectures } = useGraduationStore();

    useEffect(() => {
        fetchTakenLectures();
    }, []);
    console.log(takenLectures);

    const convertedData = courseList.map(course => ({
        id: course.id,
        name: course.name,
        type: course.type,
        credit: course.credit,
        taken: takenLectures.some(lecture => lecture.id === course.id),
    }));
    console.log(convertedData);
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>교양</h1>
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
                <h2 className={styles.subtitle}>필수과목</h2>
                <Table headers={tableHeaders} data={convertedData} />
            </div>
        </div>
    )
}

export default GraduationGeneral;