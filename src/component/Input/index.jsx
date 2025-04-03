import styles from './index.module.css';
import cx from 'classnames';

const Input = ({value, onChange, type, placeholder, onKeyDown, errorMessage}) => {
    return (
        <>
        <input 
            className={cx(styles.input, { [styles.error]: errorMessage })}
            value={value} 
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            onKeyDown={onKeyDown}
        />
        {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        </>
        
    )
}

export default Input;