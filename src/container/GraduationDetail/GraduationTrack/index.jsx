'use client';
import { useState, useEffect } from 'react';
import styles from '../index.module.css';
import cx from 'classnames';
import Table from '@/component/Table';
import { useGraduationStore } from '@/store/graduation';
import NoResult from '@/component/NoResult';

const tableHeaders = ['과목명', '이수여부'];


const GraduationTrack = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const { track, fetchTrack } = useGraduationStore();
    console.log(track);
    useEffect(() => {
        fetchTrack();
    }, []);
    const tabs = track.map((item) => item.name);
    if(track.length === 0) return <NoResult message="트랙 제도에 해당되지 않는 학생이에요." />;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>트렉제도</h1>
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
                <h2 className={styles.subtitle}>지정과목</h2>
                <Table headers={tableHeaders} data={track[selectedTab]?.lectures ?? []} />
            </div>
        </div>
    )
}

export default GraduationTrack;
