'use client';
import styles from './index.module.css';
import TotalGraduationBox from './component/TotalGraduationBox';
import RequirementProgressBox from '@/component/RequirementProgressBox';
import GraduationCertificationStatusBox from './component/GraduationCertificationStatusBox';
import GraduationTrackBox from './component/GraduationTrackBox';
import Button from '@/component/Button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NoResult from '@/component/NoResult';
import { useGraduationStore } from '@/store/graduation';
import { convertGraduationData } from '@/utils/graduation';

const EMPTY_DATA = {
  total: { current: 0, total: 0 },
  requirements: [],
  certifications: []
};

const Graduation = () => {
  const { track, fetchTrack, takenLectures, fetchTakenLectures, graduation, fetchGraduation } = useGraduationStore();

  useEffect(() => {
    fetchGraduation();
    fetchTakenLectures();
    fetchTrack();
  }, []);

  // graduation 데이터 변환
  const convertedGraduationData = convertGraduationData(graduation);
  const certifications = [
    { name: '영어졸업인증', status: 'F' },
    { name: '고전독서인증', current: 6, max: 10 },
    { name: '소프트웨어코딩졸업인증', status: 'P' }
  ];

  const isEmpty = takenLectures.length === 0;

  return (
      <div className={styles.container}>
          <div className={styles.top_bar}>
              <h1 className={styles.title}>졸업요건분석</h1>
              <Link href="/graduation/upload">
                <Button size="medium" isFilled={true}>기이수 성적표 업로드</Button>
              </Link>
          </div>
          <div className={styles.contents}>
            {isEmpty ? (
              <NoResult message="졸업요건 데이터가 없습니다." />
            ) : (
              <>
              <div className={styles.row1}>
                <div className={styles.total_section}>
                  <TotalGraduationBox
                      data={convertedGraduationData.total}
                  />
                </div>
                <div className={styles.requirement_section}>
                  {convertedGraduationData.requirements.map((req, idx) => {
                    const link = req.title === '전공' ? '/graduation/major' : '/graduation/general';
                    return (
                      <RequirementProgressBox
                          key={req.title}
                          data={req}
                          link={link}
                      />
                    )
                  })}
                </div>
              </div>
              <div className={styles.row2}>
                <GraduationCertificationStatusBox
                    data={certifications}
                />
              </div>
              <div className={styles.row3}>
                {track.length > 0 ? (
                  <GraduationTrackBox
                      data={track}
                  />
                ) : null}
              </div>
              </>
            )}
          </div>
      </div>
  );
}

export default Graduation;