import Answers from "./Answers"
import { useCallback } from "react"
import QuizTimer from "./QuizTimer"
export default function Question({question,questionNumber,handleSelectedAnswer,selectedAnswer,answerState,onSkipAnswer}){
    
    return (
        <div>
             <p>Current Question</p>
            <QuizTimer 
            //to reset the quiz timer whenever the qn changes we use the key
            //since qn no change doesnt make this component to be re-rendered
            //so we keep these two comp under a new comp with name question so we can write key directly to parent Question
            
            timeout={10000} onTimeout={onSkipAnswer} />
            {questionNumber <question.length ? question[questionNumber].text : 'over'}
            <Answers 
            //key={questionNumber}
            //we can use key to force react to recreate this component whenever main func is updated
            answers={question[questionNumber].answers} 
            questionNumber={questionNumber}
            onSelect={handleSelectedAnswer}
            answerState={answerState}
            selectedAnswer={selectedAnswer}
            question={question}
            />
        </div>
    )
}