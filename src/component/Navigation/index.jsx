"use client"
import styles from './index.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Button from '@/component/Button';
import UserDropdown from './UserDropdown';
import cx from 'classnames';
import { useAuthStore } from '@/store/auth';

const Navigation = () => {
    const [background, setBackground] = useState(false); 
    const [mobile_opened, setMobile_opened] = useState(false);
    const { isAuthorized, user, checkAuth } = useAuthStore();
    const [userinfo, setUserinfo] = useState({
        id: '1234567890',
        name: '윤효연',
    });
    const path = usePathname();
    const router = useRouter();

    /* 스크롤 내리면 배경 색상 변경 */
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if(currentScrollY>0) setBackground(true);
            else setBackground(false);
        }
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    const openLogin = () => router.push('/auth/login'); // 로그인 페이지로 이동

    const closeNavbar = () => setMobile_opened(false); // 모바일 메뉴 닫기

    return (
        <div className={cx(styles.container, { [styles.opened]: mobile_opened }, { [styles.background_white]: background })}>
            { mobile_opened ? <div onClick={() => setMobile_opened((prev)=>!prev)} className={styles.mobile_background}></div> : null}
            <div className={styles.mobile_navbar}>
                <Link href="/"><img onClick={closeNavbar} className={styles.logo} src="/images/img_logo.png" /></Link>
                <div
                    className={cx(styles.menu_btn, { [styles.opened]: mobile_opened })} 
                    onClick={() => setMobile_opened((prev)=>!prev)}
                >
                    <div className={styles.bar1}></div>
                    <div className={styles.bar2}></div>
                    <div className={styles.bar3}></div>
                </div>
            </div>
            <Link href="/"><img className={styles.logo} src="/images/img_logo.png" /></Link>
            <ul className={styles.navlist}>
                <Link onClick={() => setMobile_opened((prev)=>!prev)} href="/timetable/create"><li className={path.startsWith('/timetable/create')?styles.active:null}>시간표짜기</li></Link>
                <Link onClick={() => setMobile_opened((prev)=>!prev)} href="/lecture/search"><li className={path.startsWith('/lecture')?styles.active:null}>강의후기</li></Link>
                <Link onClick={() => setMobile_opened((prev)=>!prev)} href="/graduation"><li className={path.startsWith('/graduation')?styles.active:null}>졸업요건분석</li></Link>
            </ul>
            { isAuthorized===null ? null : isAuthorized ?
                <UserDropdown
                    closeNavbar={closeNavbar}
                    userid={userinfo?.id}
                    username={userinfo?.name}
                    // checkAuth={checkAuth}
                /> :
                <Link href="/auth/login" scroll={false} className={cx({[styles.hidden]: path.startsWith('/auth')})}>
                    <Button 
                        size="small"
                        onClick={openLogin}
                    >
                        로그인
                    </Button>
                </Link>
            }
        </div>
    );
}

export default Navigation;