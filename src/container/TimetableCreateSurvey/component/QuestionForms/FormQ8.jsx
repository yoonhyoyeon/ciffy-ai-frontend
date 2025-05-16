import OptionSelector from "./OptionSelector";

const FormQ8 = ({question_id, answer, setAnswer}) => {
    return (
        <OptionSelector 
            options={[
                {value: 0, label: '최대한 적은 것이 좋다'},
                {value: 1, label: '보통'},
                {value: 2, label: '많을수록 좋다'}
            ]} 
            value={answer[question_id]} 
            onChange={
                (value) => setAnswer((prev) => ({...prev, [question_id]: value}))
            } 
        />
    )
}

export default FormQ8;