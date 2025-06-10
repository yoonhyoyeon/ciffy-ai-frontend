import LoginPopupContents from '@/component/LoginPopupContents';
import PopupLayout from '@/component/PopupLayout';

export const metadata = {
  title: '로그인'
}

const Login = () => {
    return (
        <PopupLayout>
            <LoginPopupContents />
        </PopupLayout>
    )
}

export default Login;