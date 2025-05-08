import CourseSearchSelect, { SUBDATA_TYPE } from "@/component/CourseSearchSelect";

const FormQ1 = ({question_id, answer, setAnswer}) => {
    return (
        <CourseSearchSelect 
            subdata_option={SUBDATA_TYPE.SECTION} 
            answer={answer} 
            setAnswer={setAnswer} 
            question_id={question_id}
        />
    );
}

export default FormQ1;