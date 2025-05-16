import OptionSelector from "./OptionSelector";

const FormQ9 = ({question_id, answer, setAnswer}) => {
    return (
        <OptionSelector 
            options={[
                {value: 0, label: '선호하지 않음'},
                {value: 1, label: '보통'},
                {value: 2, label: '매우 선호'}
            ]} 
            value={answer[question_id]} 
            onChange={
                (value) => setAnswer((prev) => ({...prev, [question_id]: value}))
            } 
        />
    )
}

export default FormQ9;