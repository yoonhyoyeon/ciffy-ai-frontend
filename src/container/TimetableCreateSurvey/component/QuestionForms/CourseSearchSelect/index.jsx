import styles from './index.module.css';
import { useState, useEffect } from 'react';
import CourseInputRow from './CourseInputRow';

export const SUBDATA_TYPE = {
    SECTION: 'section',
    PROFESSOR: 'professor',
  };

const subdataOptions = {
    [SUBDATA_TYPE.SECTION]: {
        title: "분반",
        api_url: "https://api.example.com/section"
    },
    [SUBDATA_TYPE.PROFESSOR]: {
        title: "교수",
        api_url: "https://api.example.com/professor"
    }
}
const generatedId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
}

const CourseSearchSelect = ({subdata_option=SUBDATA_TYPE.SECTION, answer, question_id, updateAnswer}) => {
    const [rows, setRows] = useState(() => answer[question_id].length > 0 ? answer[question_id].map((v) => ({...v, is_submitted: true})) : [
        {
            id: generatedId(),
            course_name: "",
            [subdata_option]: ""
        }
    ]);
    useEffect(() => {
        updateAnswer(rows);
    }, [rows]);
    
    const handleRemove = (id) => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    };
    const handleAdd = () => {
        setRows((prevRows) => [...prevRows, {
            id: generatedId(),
            course_name: "",
            is_submitted: false,
            [subdata_option]: ""
        }]);
    };
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.header_item}>강의명</div>
                <div className={styles.header_item}>{subdataOptions[subdata_option].title}</div>
                <div className={styles.space}></div>
            </div>
            <div className={styles.input_container}>
                {rows.map((row, idx) => (
                    <CourseInputRow
                        key={row.id}
                        idx={idx}
                        value={row}
                        setRows={setRows}
                        onRemove={() => handleRemove(row.id)}
                        subdata_option={subdata_option}
                        isSubmitted={row.is_submitted}
                    />
                ))}
            </div>
            <button className={styles.addButton} onClick={handleAdd}>
            + 강의 추가
            </button>
        </div>
    )
}

export default CourseSearchSelect;