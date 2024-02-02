import {useRef} from "react";
function Answers({answers,questionNumber,onSelect,selectedAnswer,answerState,question}){
    const shuffledAnswers = useRef()
    if(!shuffledAnswers.current){ 
        // it means the ref wont be sshuffled again and again
    console.log(questionNumber)
    shuffledAnswers.current=[...answers];
    shuffledAnswers.current.sort(()=>Math.random()-0.5);
    }
    return (
        <ul id="answers">
                {questionNumber < question.length && shuffledAnswers.current.map((ans)=> {
                    const isSelected = selectedAnswer[selectedAnswer.length-1] === ans;
                    let css=''
                    if(isSelected && answerState==='selected'){
                        css='selected'
                    }
                    if(isSelected && (answerState==='wrong' || answerState==='correct')){
                        css=answerState
                    }
                    return (
                        <li className="answer" key={ans}>
                        <button className={css} onClick={()=>onSelect(ans)}>{ans}</button>
                    </li>
                )})}
            </ul>
    )
}

export default Answers