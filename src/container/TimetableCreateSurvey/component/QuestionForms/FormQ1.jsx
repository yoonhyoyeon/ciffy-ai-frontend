import CourseSearchSelect, { SUBDATA_TYPE } from "./CourseSearchSelect";

const FormQ1 = ({question_id, answer, setAnswer}) => {
    return (
        <CourseSearchSelect 
            subdata_option={SUBDATA_TYPE.SECTION} 
            answer={answer} 
            question_id={question_id}
            updateAnswer={(rows) => {
                setAnswer((prev) => ({
                    ...prev,
                    [question_id]: rows.map(row => row.course_name && row.course_name.trim() !== '' ? {
                        id: row.id,
                        course_name: row.course_name,
                        [SUBDATA_TYPE.SECTION]: row[SUBDATA_TYPE.SECTION]
                    } : null).filter(Boolean)
                }));
            }}
        />
    );
}

export default FormQ1;