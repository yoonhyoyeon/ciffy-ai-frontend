import styles from './index.module.css';
import Link from 'next/link';
import CertificationProgressItem from './CetificationProgressItem';

const GraduationTrackBox = ({data}) => {
    console.log(data);
    const status = data.reduce((cnt, element) => cnt + (element.status === 'P'), 0);
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.txt_area}>
                    <h1>트랙</h1>
                    <span className={styles.status}> {status} / 3</span>
                    <span className={styles.description}>트랙별로 6과목 이상 이수 시 트랙 이수 완료</span>
                </div>
                <span className={styles.detail_link}><Link href="/graduation/track">자세히 보기 &gt;</Link></span>
            </div>
            <div className={styles.certification_list}>
                {data.map((item, index) => (
                    <CertificationProgressItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
}

export default GraduationTrackBox;