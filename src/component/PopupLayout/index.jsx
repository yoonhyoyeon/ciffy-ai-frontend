'use client';
import styles from './index.module.css';
import { useRouter } from 'next/navigation';

const Popup = ({children}) => {
    const router = useRouter();
    const closePopup = () => {
        router.back();
    }
    return (
        <div className={styles.container} onClick={closePopup}>
            <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
                <img onClick={closePopup} className={styles.close_btn} src="/images/x-icon.png" />
                {children}
            </div>
        </div>
    )
}

export default Popup;