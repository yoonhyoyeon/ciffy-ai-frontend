import styles from './index.module.css';
import { useState, useEffect } from 'react';

const CourseInputRow = ({ value, setRows, onRemove, subdata_option }) => {
    const [courseName, setCourseName] = useState(value.course_name || '');
    const [subdata, setSubdata] = useState(value[subdata_option] || '');

    // useEffect(() => {
    //     setRows(prevRows => prevRows.map(row =>
    //         row.id === value.id
    //             ? { ...row, course_name: courseName, subdata }
    //             : row
    //     ));
    // }, [courseName, subdata, setRows, value.id]);

    const Submit = () => {
        setRows(prevRows => prevRows.map(row =>
            row.id === value.id
                ? { ...row, course_name: courseName, [subdata_option]: subdata }
                : row
        ));
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'courseName') {
            setCourseName(value);
        } else if (name === 'subdata') {
            setSubdata(value);
        }
    }

    return (
        <div className={styles.input_row}>
            <input placeholder="강의명을 입력하세요" type="text" name="courseName" value={courseName} onChange={handleChange} />
            <input placeholder="선택" type="text" name="subdata" value={subdata} onChange={handleChange} />
            <button className={styles.remove_button} onClick={Submit}><img src="/images/icon_x.png" alt="X" /></button>
        </div>
    );
}

export default CourseInputRow;