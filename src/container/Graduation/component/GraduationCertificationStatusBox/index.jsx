import styles from './index.module.css';
import Link from 'next/link';
import CertificationProgressItem from './CetificationProgressItem';

const GraduationCertificationStatusBox = ({data}) => {
    const status = data.reduce((cnt, element) => cnt + (element.status === 'P' || element.current >= element.max), 0);
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.txt_area}>
                    <h1>졸업인증</h1>
                    <span className={styles.status}> {status} / 2</span>
                    <span className={styles.description}>3개 중 2개 이상 통과해야함</span>
                </div>
            </div>
            <div className={styles.certification_list}>
                {data.map((item, index) => (
                    <CertificationProgressItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
}

export default GraduationCertificationStatusBox;