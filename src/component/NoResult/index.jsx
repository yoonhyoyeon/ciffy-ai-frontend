import AlertIcon from '@/assets/svg/icon_alert.svg';
import styles from './index.module.css';

const NoResult = ({message}) => {
    return (
        <div className={styles.container}>
            <AlertIcon fill="#06003A" fillOpacity="0.1" />
            <h2>{message}</h2>
        </div>
    )
}

export default NoResult;