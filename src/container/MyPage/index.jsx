'use client';
import styles from './index.module.css';
import Table from '@/component/Table';
import Timetable from '@/component/Timetable';
import NoResult from '@/component/NoResult';
import { useState, useEffect } from 'react';
import { useTimetableStore } from '@/store/timetable';
import { useGraduationStore } from '@/store/graduation';
import { useAuthStore } from '@/store/auth';

const userInfo = {
  name: '윤효연',
  major: '컴퓨터공학과',
  studentId: '21011189',
};

const certification = {
  서양: 2,
  동양: 4,
  동서양: 1,
  과학사상: 0,
};

const courseHeaders = ['학수번호', '과목명', '이수구분', '학점'];

const timetableOptions = [
  { label: '25년 1학기', value: '2025-1' },
  { label: '24년 2학기', value: '2024-2' },
  { label: '24년 1학기', value: '2024-1' },
];

export default function MyPage() {
  const [selectedTimetable, setSelectedTimetable] = useState(timetableOptions[0].value);
  const { selectedTimetableId, convertedTimetable, loadTimetable } = useTimetableStore();
  const timetableData = convertedTimetable[selectedTimetableId-1];
  const hasTimetable = !!timetableData;
  const { takenLectures, fetchTakenLectures } = useGraduationStore();
  const { user, fetchUser } = useAuthStore();
  useEffect(() => {
    fetchUser();
    fetchTakenLectures();
  }, []);
  console.log(user);
  useEffect(() => {
    if (convertedTimetable.length === 0) {
      loadTimetable();
    }
  }, []);

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
              <div className={styles.infoRow}><span>이름</span><span>{user.name}</span></div>
              <div className={styles.infoRow}><span>학과</span><span>{user.major}</span></div>
              <div className={styles.infoRow}><span>학번</span><span>{user.studentId}</span></div>
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
            {takenLectures.length > 0 ? (
              <Table headers={courseHeaders} data={takenLectures} />
            ) : (
              <NoResult message={`기이수 과목이 없습니다. \n기이수 성적표를 업로드해주세요.`} />
            )}
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