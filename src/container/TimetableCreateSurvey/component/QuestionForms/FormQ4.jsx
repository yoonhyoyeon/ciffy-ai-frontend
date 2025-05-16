import SliderInput from "./SliderInput";
const FormQ4 = ({question_id, answer, setAnswer}) => {
    return (
        <SliderInput
            min={0}
            max={5}
            answer={answer}
            question_id={question_id}
            onChange={(value) => {
                setAnswer(prev => ({...prev, [question_id]: value}));
            }}
        />
    );
}

export default FormQ4;