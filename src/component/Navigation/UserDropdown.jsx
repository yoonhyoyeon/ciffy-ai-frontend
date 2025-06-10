"use client";
import { useState } from 'react';
import styles from './index.module.css';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth';
import Cookies from 'js-cookie';

const UserDropdown = ({closeNavbar, userid, username, checkAuth}) => {
    const { logout } = useAuthStore();
    const router = useRouter();
    const [opened, setOpened] = useState(false);

    const sign_out = (e) => {
        logout();
        Cookies.remove('access_token', { path: '/' });
        router.push('/');
    }
    return (
        <div className={styles.UserDropdown}>
            <span 
                onClick={() => {
                    setOpened((prev) => !prev);
                }} 
                className={styles.txt}
            >{username} ⏷</span>
            <div 
                className={`${opened ? styles.opened : null} ${styles.background}`}
                onClick={() => setOpened(false)}
            >
                <div className={styles.dropdown_box}>
                    <div 
                        onClick={() => {
                            setOpened(false);
                            closeNavbar();
                            router.push('/mypage');
                        }} 
                        className={styles.item}
                    >마이페이지</div>
                    <div onClick={sign_out} className={styles.item}>로그아웃</div>
                </div>
            </div>
        </div>
    );
}

export default UserDropdown;