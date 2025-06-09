'use client';
import styles from './index.module.css';

const Button = ({size, isShadow, isFilled, customStyles, children, ...others}) => {
    const sizeStyle = {
        small: { padding: '9px 20px', fontSize: '14px', borderRadius: '4px'},
        medium: { padding: '13px 20px', fontSize: '14px', borderRadius: '4px'},
        large: { padding: '20px 58px', fontSize: '25px', borderRadius: '15px'} 
    }
    const shadowStyle = isShadow ? {
        boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.1)'
    } : null;
    const filledStyle = isFilled ? {
        backgroundColor: 'var(--color-blue-2)',
        color: 'var(--color-white)'
    } : null;
    const disabledStyle = others.disabled ? {
        opacity: 0.5
    } : null;

    const style = {
        ...sizeStyle[size], 
        ...shadowStyle, 
        ...filledStyle,
        ...disabledStyle,
        ...customStyles,
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