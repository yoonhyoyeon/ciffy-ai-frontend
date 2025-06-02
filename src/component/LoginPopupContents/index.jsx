import Button from '../Button';
import styles from './index.module.css';
import Form from 'next/form';
import { signIn } from '@/service/auth';

const LoginPopupContents = () => {
    const handleSubmit = async(formData) => {
        "use server";
        const res = await signIn(formData);
        console.log(res);
    }
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>로그인</h2>
            <span className={styles.txt}>대양휴머니티칼리지 사이트에 로그인하여 인증합니다.<br/>(세종대학교 포털 ID/PW와 동일)</span>
            <Form action={handleSubmit}>
                <input className={styles.input} name="id" type="text" placeholder="아이디" required />
                <input className={styles.input} name="pw" type="password" placeholder="비밀번호" required />
                <Button customStyles={{backgroundColor: 'var(--color-blue-2)', color: 'var(--color-white)'}} type="submit">로그인</Button>
            </Form>
        </div>
    )
}

export default LoginPopupContents;