'use client';
import styles from './index.module.css';

const Table = ({ headers, data }) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.type}</td>
                        <td>{row.area}</td>
                        <td>{row.credit}</td>
                        <td>
                            {row.credit === 3 ? (
                                <span className={styles.checkIconFilled}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="12" fill="var(--color-blue-1)"/>
                                        <path d="M7 12.5L11 16.5L17 9.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                            ) : (
                                <span className={styles.checkIconEmpty}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="12" fill="var(--color-blue-1-opacity-10)"/>
                                    </svg>
                                </span>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table; 