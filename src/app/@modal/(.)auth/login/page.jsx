import LoginPopupContents from '@/component/LoginPopupContents';
import PopupLayout from '@/component/PopupLayout';

export const metadata = {
  title: 'Login'
}

const Login = () => {
    return (
        <PopupLayout>
            <LoginPopupContents />
        </PopupLayout>
    )
}

export default Login;