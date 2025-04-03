'use client';
import styles from './index.module.css';

const Button = ({size, isShadow, customStyles, children, ...others}) => {
    const sizeStyle = {
        small: { padding: '10px 20px', fontSize: '14px', borderRadius: '4px'},
        medium: { padding: '15px 58px', fontSize: '20px', borderRadius: '8px'},
        large: { padding: '20px 58px', fontSize: '25px', borderRadius: '15px'} 
    }
    const shadowStyle = isShadow ? {
        boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.1)'
    } : null;

    const style = {
        ...shadowStyle, 
        ...sizeStyle[size], 
        ...customStyles
    };
    return (
        <button 
            className={styles.btn}
            style={style} 
            {...others}
        >
            {children}
        </button>
    )
}

export default Button;