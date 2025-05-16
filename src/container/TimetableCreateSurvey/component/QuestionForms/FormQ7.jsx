import OptionSelector from "./OptionSelector";

const FormQ7 = ({question_id, answer, setAnswer}) => {
    return (
        <OptionSelector 
            options={[
                {value: 0, label: '전자출결'},
                {value: 1, label: '직접호명'},
                {value: 2, label: '상관없다'}
            ]} 
            value={answer[question_id]} 
            onChange={
                (value) => setAnswer((prev) => ({...prev, [question_id]: value}))
            } 
        />
    )
}

export default FormQ7;