import styles from './index.module.css';
import TotalGraduationBox from './component/TotalGraduationBox';
import RequirementProgressBox from '@/component/RequirementProgressBox';
import GraduationCertificationStatusBox from './component/GraduationCertificationStatusBox';
import Button from '@/component/Button';

const Graduation = () => {
  const data = {
    total: { current: 100 ,total: 140 },
    requirements: [
      {
        title: '전공',
        items: [
          { name: '전공필수', current: 33, total: 33 },
          { name: '전공선택', current: 23, total: 33 }
        ]
      },
      {
        title: '교양',
        items: [
          { name: '공통교양필수', current: 23, total: 33 },
          { name: '학문기초교양필수', current: 23, total: 33 },
          { name: '교양선택', current: 23, total: 33 }
        ]
      }
    ],
    certifications: [
      { name: '영어졸업인증', status: 'P' },
      { name: '고전독서인증', status: 'NP' },
      { name: '소프트웨어코딩졸업인증', status: 'NP' }
    ]
  };
  const { total, requirements, certifications } = data;


  return (
      <div className={styles.container}>
          <div className={styles.top_bar}>
              <h1 className={styles.title}>졸업요건분석</h1>
              <Button size="medium" isFilled={true}>기이수 성적표 업로드</Button>
          </div>
          <div className={styles.contents}>
              <div className={styles.row1}>
                <div className={styles.total_section}>
                  <TotalGraduationBox
                      data={total}
                  />
                </div>
                <div className={styles.requirement_section}>
                  {requirements.map((req, idx) => {
                    const link = req.title === '전공' ? '/graduation/major' : req.title === '교양' ? '/graduation/general' : '/graduation/certification';
                    return (
                      <RequirementProgressBox
                          key={req.title+idx}
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
          </div>
      </div>
  );
}

export default Graduation;