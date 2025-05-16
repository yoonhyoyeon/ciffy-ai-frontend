import OptionSelector from "./OptionSelector";

const FormQ6 = ({question_id, answer, setAnswer}) => {
    return (
        <OptionSelector 
            options={[
                {value: 0, label: '적음'},
                {value: 1, label: '적당'},
                {value: 2, label: '많음'}
            ]} 
            value={answer[question_id]} 
            onChange={
                (value) => setAnswer((prev) => ({...prev, [question_id]: value}))
            } 
        />
    )
}

export default FormQ6;