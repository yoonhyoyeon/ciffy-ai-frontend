import TimeSelector from "@/component/TimeSelector";

const FormQ2 = ({question_id, answer, setAnswer}) => {
    return (
        <TimeSelector 
            answer={answer} 
            question_id={question_id}
            onSelect={(selectedRanges) => {
                setAnswer((prev) => ({
                    ...prev,
                    [question_id]: selectedRanges
                }));
            }}
        />
    );
}

export default FormQ2;