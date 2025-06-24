import styles from './index.module.css';
import { useState, useEffect } from 'react';

const CourseInputRow = ({ value, setRows, onRemove, subdata_option, isSubmitted }) => {
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
        if(courseName.trim() === '' || subdata.trim() === '') {
            alert('모든 항목을 입력해주세요.');
            return;
        }
        setRows(prevRows => prevRows.map(row =>
            row.id === value.id
                ? { ...row, course_name: courseName, [subdata_option]: subdata, is_submitted: !isSubmitted }
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
            <input placeholder="강의명을 입력하세요" type="text" name="courseName" value={courseName} onChange={handleChange} disabled={isSubmitted} />
            <input placeholder="선택" type="text" name="subdata" value={subdata} onChange={handleChange} disabled={isSubmitted} />
            <button className={styles.remove_button} onClick={Submit}>{isSubmitted ? '수정' : '확인'}</button>
            <button className={styles.remove_button} onClick={onRemove}><img src="/images/icon_x.png" alt="X" /></button>
        </div>
    );
}

export default CourseInputRow;