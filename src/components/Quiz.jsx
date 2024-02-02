import question from "../../questions"
import Answers from "./Answers"
import completed from '../assets/quiz-complete.png'
import Question from "./Question"
import { useState,useCallback, useEffect } from "react"
//import { useRef } from "react"
import QuizTimer from "./QuizTimer"
export default function Quiz(){
    //const shuffledAnswers = useRef()
    const [answerState,setAnswerState] = useState('')
    const [selectedAnswer,addAnswer] = useState([])
    const questionNumber = answerState==='' ? selectedAnswer.length : selectedAnswer.length -1;
    //const [shuffledAnswers,changeOrder]=useState([])
    //console.log(shuffledAnswers.length)
    const quizComplete = (questionNumber===question.length)
    //let shuffledAnswers=[];
    //if (!quizComplete){
      //  useEffect(()=>{
        //    const p=[...question[questionNumber].answers]
          //  p.sort(()=>Math.random() - 0.5)
          //changeOrder(p)
          
        //},[questionNumber])
    //}
    //or above one is using useref,below one is using refs.  Both are correct
    if(!quizComplete){
        
    }
    
    const handleSelectedAnswer = useCallback(function handleSelectedAnswer(value){
        setAnswerState('selected')
        addAnswer((prevData)=>(
            [...prevData,value]
        ))
        setTimeout(()=>{
            if(value===question[questionNumber].answers[0]){
                setAnswerState('correct')
            }
            else{
                setAnswerState('wrong')
            }
            setTimeout(()=>{
                setAnswerState('')
            },2000)
            },1000)
    },[questionNumber])
    // inside a callback if we use any function or variable to update we should use it as a depedndency
    const handleSkipAnswer = useCallback(()=>handleSelectedAnswer(null),[handleSelectedAnswer])

    if (quizComplete){
        return (
            <>
            <img src={completed} style={{height:'150px',width:'110px'}} />
            <p>Quiz Completed</p>
            <p>Your score is</p>
            </>
        )
    }
    
    return (
        <div>
            <Question question={question} 
            key={questionNumber}
            questionNumber={questionNumber}
            handleSelectedAnswer={handleSelectedAnswer}
            selectedAnswer={selectedAnswer}
            answerState={answerState}
            onSkipAnswer={handleSkipAnswer} />
            <h2>selected answers {selectedAnswer.map(k=>(
                <p key={k}>{k}</p>
            ))}</h2>
        </div>
    )

}