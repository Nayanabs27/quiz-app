function Result({questionBank, usersAnswers,restartQuiz}) {
  function getScore(){
    let finalScore = 0;
    usersAnswers.forEach((answer,index) => {
      if(answer===questionBank[index].answer){
        finalScore++;
      }
    });
  return finalScore;
  }
  const score = getScore();

  
  return (
    <div className="result">
      <h2>Quiz Completed</h2>
      <p>Your Score : {score}/{questionBank.length}</p>
      <button className="restart-button" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}


export default Result;