import ProfessorSearchSelect from "./ProfessorSearchSelect";
const FormQ10 = ({question_id, answer, setAnswer}) => {
    return (
        <ProfessorSearchSelect 
            value={answer[question_id]} 
            onChange={(value) => setAnswer((prev) => ({...prev, [question_id]: value}))} 
        />
    )
}

export default FormQ10;