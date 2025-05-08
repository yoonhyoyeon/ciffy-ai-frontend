"use client";
import SurveyProgressBar from "./component/SurveyProgressBar";
import QuestionBox from "./component/QuestionBox";
import NavigationButtons from "./component/NavigationButtons";
import styles from './index.module.css';
import { useState } from "react";
import { FormQ1, FormQ2, FormQ3, FormQ4, FormQ5, FormQ6, FormQ7, FormQ8, FormQ9, FormQ10 } from "./component/QuestionForms";

export default function TimetableCreateSurvey() {
    const [question_index, setQuestionIndex] = useState(0);
    const [answer, setAnswer] = useState({
        'batch_courses': [{
            course_name: "",
            section: ""
        }],
        'unavailable_times': [
            // {
            //     id: 1,
            //     day: "",
            //     start: "",
            //     end: ""
            // }
        ],
        'required_courses': [{
            course_name: "",
            professor: ""
        }],
        'major_requirement_count': 0,
        'preferred_major_courses': [{
            course_name: "",
            professor: ""
        }],
        'preferred_assignment_count': 0, // -1, 0, 1 숫자 코드(enum)
        'preferred_attendance_check_method': 0, // -1, 0, 1 숫자 코드(enum)
        'preferred_exam_count': 0, // -1, 0, 1 숫자 코드(enum)  
        'preferred_team_project_count': 0, // -1, 0, 1 숫자 코드(enum)
        'preferred_professors': ['한동일']
    });
    const questions = [
        {
            id: 'batch_courses',
            title: "이미 일괄 신청된 강의가 있나요?",
            description: "강의명만 입력하거나 강의+분반을 선택해주세요",
            form: <FormQ1 question_id='batch_courses' answer={answer} setAnswer={setAnswer}/>
        },
        {
            id: 'unavailable_times',
            title: "수강 불가능한 시간을 선택해주세요",
            description: "",
            form: <FormQ2 question_id='unavailable_times' answer={answer} setAnswer={setAnswer}/>
        },
        {
            id: 'required_courses',
            title: "꼭 들어야 하는 과목이 있나요?",
            description: "강의명만 입력하거나 강의+교수를 선택해주세요",
            form: <FormQ3 question_id='required_courses' answer={answer} setAnswer={setAnswer}/>
        },
        {
            id: 'major_requirement_count',
            title: "전공 필수 과목은 몇 개를 수강하고 싶으신가요?",
            description: "",
            form: <FormQ4 question_id='major_requirement_count' answer={answer} setAnswer={setAnswer}/>
        },
        {
            id: 'preferred_major_courses',
            title: "희망하는 전공 선택 과목을 골라주세요",
            description: "",
            form: <FormQ5 question_id='preferred_major_courses' answer={answer} setAnswer={setAnswer}/>
        },
        {
            id: 'preferred_assignment_count',
            title: "과제 분량은 어느 정도를 선호하시나요?",
            description: "",
            form: <FormQ6 question_id='preferred_assignment_count' answer={answer} setAnswer={setAnswer}/>
        },
        {
            id: 'preferred_attendance_check_method',
            title: "출석 확인 방식은 어느 것을 선호하시나요?",
            description: "",
            form: <FormQ7 question_id='preferred_attendance_check_method' answer={answer} setAnswer={setAnswer}/>
        },
        {
            id: 'preferred_exam_count',
            title: "선호하는 시험 개수의 정도를 알려주세요",
            description: "",
            form: <FormQ8 question_id='preferred_exam_count' answer={answer} setAnswer={setAnswer}/>
        },
        {
            id: 'preferred_team_project_count',
            title: "팀플은 얼마나 선호하시나요?",
            description: "",
            form: <FormQ9 question_id='preferred_team_project_count' answer={answer} setAnswer={setAnswer}/>
        },
        {
            id: 'preferred_professors',
            title: "선호하는 교수님이 있다면 입력해주세요",
            description: "",
            form: <FormQ10 question_id='preferred_professors' answer={answer} setAnswer={setAnswer}/>
        },
    ]

    return (
        <div className={styles.container}>
            <SurveyProgressBar index={question_index+1} max={questions.length} />
            <QuestionBox question={questions[question_index]} question_index={question_index} />
            <NavigationButtons index={question_index} max={questions.length} setIndex={setQuestionIndex} />
        </div>
    );
}