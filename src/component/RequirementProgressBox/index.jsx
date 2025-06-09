import styles from './index.module.css';
import RequirementProgressItem from './RequirementProgressItem';
import Link from 'next/link';

const RequirementProgressBox = ({data, link}) => {
    const { title, items } = data;
    
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span>{title}</span>
                {
                    link && (
                        <Link className={styles.detail_link} href={link}>자세히 보기 &gt;</Link>
                    )
                }
            </div>
            {items.map((item, idx) => (
                <RequirementProgressItem key={idx} item={item} />
            ))}
        </div>
    );
}

export default RequirementProgressBox;