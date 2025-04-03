import LoginPopupContents from '@/component/LoginPopupContents';

export const metadata = {
    title: 'Login'
}

const Login = () => {
    return (
        <div style={{width: '100dvw', height: 'calc(100dvh - 200px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <LoginPopupContents />
        </div>
    )
}

export default Login;