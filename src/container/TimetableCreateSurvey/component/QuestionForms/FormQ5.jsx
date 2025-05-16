import CourseSearchSelect, { SUBDATA_TYPE } from "./CourseSearchSelect";

const FormQ5 = ({question_id, answer, setAnswer}) => {
    return (
        <CourseSearchSelect 
            subdata_option={SUBDATA_TYPE.PROFESSOR} 
            answer={answer} 
            setAnswer={setAnswer} 
            question_id={question_id}
        />
    );
}

export default FormQ5;