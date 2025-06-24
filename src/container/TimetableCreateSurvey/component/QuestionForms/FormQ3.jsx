import CourseSearchSelect, { SUBDATA_TYPE } from "./CourseSearchSelect";

const FormQ3 = ({question_id, answer, setAnswer}) => {
    return (
        <CourseSearchSelect 
            subdata_option={SUBDATA_TYPE.PROFESSOR} 
            answer={answer} 
            updateAnswer={(rows) => {
                setAnswer((prev) => ({
                    ...prev,
                    [question_id]: rows.map(row => row.course_name && row.course_name.trim() !== '' ? {
                        id: row.id,
                        course_name: row.course_name,
                        [SUBDATA_TYPE.PROFESSOR]: row[SUBDATA_TYPE.PROFESSOR]
                    } : null).filter(Boolean)
                }));
            }}
            question_id={question_id}
        />
    );
}

export default FormQ3;