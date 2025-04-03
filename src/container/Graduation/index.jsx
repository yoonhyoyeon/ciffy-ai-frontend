import Link from 'next/link';
import styles from './index.module.css';
import TotalGraduate from './component/TotalGraduate';
import UserInfo from '@/component/UserInfo';
import GraduationProgress from '@/component/GraduationProgress';

const Graduation = ({data}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>졸업요건 분석</h1>
            <UserInfo />
            <TotalGraduate dataobj={data[0]}/>
            <Link href={`/graduation/detail/0`}><GraduationProgress title="전공 필수"/></Link>
            <Link href={`/graduation/detail/1`}><GraduationProgress title="전공 선택"/></Link>
            <Link href={`/graduation/detail/2`}><GraduationProgress title="교양 선택"/></Link>
            <Link href={`/graduation/detail/3`}><GraduationProgress title="공통교양필수"/></Link>
            <Link href={`/graduation/detail/4`}><GraduationProgress title="학문기초교양필수"/></Link>
            <Link href={`/graduation/detail/5`}><GraduationProgress title="영어졸업인증"/></Link>

        </div>
    );
}

export default Graduation;