'use client';
import styles from './index.module.css';
import Table from '@/component/Table';
import Timetable from '@/component/Timetable';
import NoResult from '@/component/NoResult';
import { useState } from 'react';

const userInfo = {
  name: '김시피',
  major: '컴퓨터공학과',
  studentId: '000000000',
};

const certification = {
  서양: 2,
  동양: 4,
  동서양: 1,
  과학사상: 0,
};

const courseHeaders = ['년도', '학기', '학수번호', '과목명', '이수구분', '선택영역', '학점'];
const courseList = [
  { year: '2024', semester: '1학기', id: '9489', name: '세계사:인간과문명', type: '교선', area: '사상과 역사', credit: 3 },
  { year: '2024', semester: '1학기', id: '9790', name: '고급프로그래밍입문-P', type: '교선1', area: '자연과과학기술', credit: 3 },
  { year: '2024', semester: '1학기', id: '9791', name: '고급프로그래밍입문-C', type: '교선1', area: '자연과과학기술', credit: 3 },
];

const timetableOptions = [
  { label: '24년 2학기', value: '2024-2' },
  { label: '24년 1학기', value: '2024-1' },
];

// timetableData 예시 (없으면 null)
const timetableData = {
  id: 1,
  lectures: [
    {
      id: 1,
      title: '자료구조',
      room: 'IT201',
      day: ['mon', 'wed'],
      startHour: 9,
      endHour: 10.5, // 9:00~10:30
    },
    {
      id: 2,
      title: '알고리즘',
      room: 'IT202',
      day: ['tue', 'thu'],
      startHour: 10.5,
      endHour: 12, // 10:30~12:00
    },
    {
      id: 3,
      title: '컴퓨터네트워크',
      room: 'IT203',
      day: ['wed'],
      startHour: 13,
      endHour: 15, // 13:00~15:00
    },
    {
      id: 4,
      title: '운영체제',
      room: 'IT204',
      day: ['fri'],
      startHour: 15.5,
      endHour: 17, // 15:30~17:00
    },
    {
      id: 5,
      title: '소프트웨어공학',
      room: 'IT205',
      day: ['mon'],
      startHour: 16,
      endHour: 18, // 16:00~18:00
    },
  ],
};

export default function MyPage() {
  const [selectedTimetable, setSelectedTimetable] = useState(timetableOptions[0].value);
  const hasTimetable = !!timetableData;

  return (
    <div className={styles.myPageWrap}>
      <div className={styles.header}>마이페이지</div>
      <div className={styles.semisterSelectSection}>
        <span className={styles.timetableTitle}>저장 된 시간표</span>
        <select
          className={styles.timetableSelect}
          value={selectedTimetable}
          onChange={e => setSelectedTimetable(e.target.value)}
        >
          {timetableOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div className={styles.contents}>
        <div className={styles.left}>
          <div className={styles.infoBox}>
            <div className={styles.infoLeft}>
              <div className={styles.infoTitle}>내 정보</div>
              <div className={styles.infoRow}><span>이름</span><span>{userInfo.name}</span></div>
              <div className={styles.infoRow}><span>학과</span><span>{userInfo.major}</span></div>
              <div className={styles.infoRow}><span>학번</span><span>{userInfo.studentId}</span></div>
            </div>
            <div className={styles.infoRight}>
              <div className={styles.infoTitle}>고전독서인증</div>
              <div className={styles.infoRow}><span>서양</span><span>{certification.서양}권</span></div>
              <div className={styles.infoRow}><span>동양</span><span>{certification.동양}권</span></div>
              <div className={styles.infoRow}><span>동서양</span><span>{certification.동서양}권</span></div>
              <div className={styles.infoRow}><span>과학사상</span><span>{certification.과학사상}권</span></div>
            </div>
          </div>
          <div className={styles.courseSection}>
            <h2 className={styles.subtitle}>내 기이수 과목</h2>
            <Table headers={courseHeaders} data={courseList} />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.timetableBox}>
            <div className={styles.timetableContent}>
              {hasTimetable ? (
                <Timetable data={timetableData} />
              ) : (
                <NoResult message="저장된 시간표가 없습니다." />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}