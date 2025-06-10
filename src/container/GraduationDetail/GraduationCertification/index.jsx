'use client';
import { useState } from 'react';
import styles from '../index.module.css';
import cx from 'classnames';
import Table from '@/component/Table';

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

const tableHeaders = ['학수번호', '과목명', '이수구분', '선택영역', '학점', ''];


const GraduationMajor = () => {
    const tabs = ['영어졸업인증', '고전독서인증', '소프트웨어코딩졸업인증'];
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>졸업인증</h1>
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
                <Table headers={tableHeaders} data={courseList} />
            </div>
            <div className={styles.content}>
                <h2 className={styles.subtitle}>필수과목 추천</h2>
                <Table headers={tableHeaders} data={courseList} />
            </div>
            <div className={styles.content}>
                <h2 className={styles.subtitle}>추천과목</h2>
                <Table headers={tableHeaders} data={courseList} />
            </div>
        </div>
    )
}

export default GraduationMajor;
