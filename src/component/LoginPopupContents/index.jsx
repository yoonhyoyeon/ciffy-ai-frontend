'use client';
import Button from '../Button';
import styles from './index.module.css';
import { useFormStatus } from 'react-dom';
import { useState, useEffect, useRef } from 'react';
import { loginAction } from '@/actions/auth';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth';

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button
            customStyles={{ backgroundColor: 'var(--color-blue-2)', color: 'var(--color-white)' }}
            type="submit"
            disabled={pending}
        >
            {pending ? '로그인 중...' : '로그인'}
        </Button>
    );
}

const LoginPopupContents = () => {
    const idInputRef = useRef(null);
    const [error, setError] = useState('');
    const router = useRouter();
    const { login, isAuthorized } = useAuthStore();

    useEffect(() => {
        if (isAuthorized) {
            router.replace('/');
        }
    }, [isAuthorized]);

    async function action(formData) {
        setError('');
        const result = await loginAction(formData);
        if (result?.error) {
            setError(result.error);
            // 로그인 실패 시 아이디 입력란에 포커스를 설정합니다.
            idInputRef.current?.focus();
        } else {
            // zustand로 인증 상태 갱신(쿠키 저장 포함)
            login(result.data.data.access_token, { id: '1234567890', name: '윤효연'});
            window.location.reload();
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>로그인</h2>
            <span className={styles.txt}>대양휴머니티칼리지 사이트에 로그인하여 인증합니다.<br/>(세종대학교 포털 ID/PW와 동일)</span>
            <form action={action}>
                <input ref={idInputRef} className={styles.input} name="id" type="text" placeholder="아이디" required />
                <input className={styles.input} name="password" type="password" placeholder="비밀번호" required />
                {error && <div className={styles.error}>{error}</div>}
                <SubmitButton />
            </form>
        </div>
    )
}

export default LoginPopupContents;