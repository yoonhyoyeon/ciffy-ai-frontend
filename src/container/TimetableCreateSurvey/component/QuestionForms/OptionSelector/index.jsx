import styles from "./index.module.css";
const OptionSelector = ({options, value, onChange}) => {
    return (
        <div className={styles.container}>
            {
                options.map((option, i) => {
                    return (
                        <label key={option.value} className={styles.label}>
                            <input 
                                type="radio" 
                                name="radio-group" 
                                value={option.value} 
                                checked={value === option.value} 
                                onChange={() => onChange(option.value)} />
                            <span>{option.label}</span>
                        </label>
                    )
                })
            }
        </div>
    )
}

export default OptionSelector;