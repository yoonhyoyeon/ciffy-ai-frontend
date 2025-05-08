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

const CourseSearchSelect = ({subdata_option=SUBDATA_TYPE.SECTION, answer, setAnswer, question_id}) => {
    const [rows, setRows] = useState([
        {
            id: generatedId(),
            course_name: "",
            subdata: ""
        }
    ]);
    useEffect(() => {
        setAnswer((prev) => ({
            ...prev,
            [question_id]: rows.map(row => row.course_name && row.course_name.trim() !== '' ? {
                course_name: row.course_name,
                [subdata_option]: row.subdata
            } : null).filter(Boolean)
        }));
    }, [rows]);
    
    const handleRemove = (id) => {
        setRows(rows.filter(row => row.id !== id));
    };
    const handleAdd = () => {
        setRows([...rows, {
            id: generatedId(),
            course_name: "",
            subdata: ""
        }]);
    };
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span>강의명</span>
                <span>{subdataOptions[subdata_option].title}</span>
                <div className={styles.space}></div>
            </div>
            {rows.map((row, idx) => (
                <CourseInputRow
                    key={row.id}
                    idx={idx}
                    value={row}
                    setRows={setRows}
                    onRemove={() => handleRemove(row.id)}
                />
            ))}
            <button className={styles.addButton} onClick={handleAdd}>
            + 강의 추가
            </button>
        </div>
    )
}

export default CourseSearchSelect;