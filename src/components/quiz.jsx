import React , {useState} from 'react';
import Result from './result';
function Quiz(){
const questionBank = [
    {
    question : "What is the capital of france ?",
    options : ["Berlin","Madrid","Paris","Rome"],
    answer : "Paris",
    },
    {
    question : "What are the programming languages used for Web Development?",
    options : ["PHP","Python","Javascript","Java","All"],
    answer : "All",
    },
    {
    question :"What does JSX stand for?",
    options : ["JavaScript XML","JavaScript Xtreme","JavaScript Xpress","JavaScript X-ray"],
    answer : "JavaScript XML",
    },
];
                   
    const initialAnswers = [null,null,null];                    
    const [usersAnswers,setusersAnswers] = useState(initialAnswers);
    const [currentQuestion , setcurrentQuestion] = useState(0);

    const [isQuizFinished ,setQuizFinished] = useState(false);

    const selectedAnswer = usersAnswers[currentQuestion];

    
    function handleSelectOption(option){
         const newUsersAnswers = [...usersAnswers];
         newUsersAnswers[currentQuestion] = option;   
     
        setusersAnswers(newUsersAnswers);
    }
    function goToNext(){
        if (currentQuestion == questionBank.length - 1){
            setQuizFinished(true);
        } 
        else{
        setcurrentQuestion(currentQuestion +1);
        }
    }  
    function goToPrev(){                         
        if(currentQuestion > 0){ 
        setcurrentQuestion(currentQuestion - 1);
       }
    }
     function restartQuiz(){
    setusersAnswers(initialAnswers);
    setcurrentQuestion(0);
    setQuizFinished(false);
  }
       if (isQuizFinished) {
      return <Result 
      usersAnswers={usersAnswers} 
      questionBank={questionBank} 
      restartQuiz={restartQuiz}
      />
      }
    return (
    <div>
        <h2 >Question {currentQuestion+1}</h2>
    <p className="question">{questionBank[currentQuestion].question}</p> 
  {questionBank[currentQuestion].options.map((option) =>(<button className={"option"+(selectedAnswer === option ? " selected" : "")}
    onClick={() => handleSelectOption(option)}>{option}</button>))}
   <div className="nav-buttons">
    <button onClick={goToPrev} disabled={currentQuestion===0}>Previous</button>
    <button onClick={goToNext} disabled={!selectedAnswer}>
        {currentQuestion===questionBank.length-1 ? "Finish Quiz" : "Next"}</button>

    </div>
    </div>
);
}
export default Quiz;