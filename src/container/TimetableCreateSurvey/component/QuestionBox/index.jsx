import styles from './index.module.css';

const QuestionBox = ({ question, question_index }) => {
    return (
        <div className={styles.container}>
            <span>Q{question_index + 1}</span>
            <h1>{question.title}</h1>
            <p>{question.description}</p>
            <div className={styles.form_container}>
                {question.form}
            </div>
        </div>
    );
}

export default QuestionBox;