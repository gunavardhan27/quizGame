import quizlogo from '../assets/quiz-logo.png'
export default function Header(){
    return (
        <div style={{textAlign:'center'}}>
        <img src={quizlogo} style={{height:'90px',width:'120px'}} />
        <h1>Online Quiz</h1>
        </div>
    )
}