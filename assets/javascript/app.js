/*display page with start
function to display begin game
onClick
query showing start button

click button
first question appears
timer starts - set timeOut
	.query to show question
	.target to start timer
	.if timer ===0
		display answer
		clearout for a few seconds
		function if answer
			.correct
			.incorrect
			.unanswered
end of game
display results
reset game
start over


function incrementTimer(){
 timer = setTimeout(){
  $('#timer').tex(timeRemaining);
  if(timeRemaining<= 0){
  	//not answered
  	noAnswer.push(targetQuestion);
  	alert('Time is Up');
  	askQuestion();
  }else{
  	timeRemaining=timeRemaining - 1;
  	incrementTimer();
  }

  }, 1000);
 }

function startTimer(){
 clearTimeout(timer);
 timeRemaining = 10; // in seconds
 incrementTimer();
}

function askQuestion(){
 if(timeQuestions.length<=0){
 	//complete
 	clearTimeout(timer);
 	alert("you're correct:" + answerRight.length);
 	alert("you're wrong:" + answerWrong.lenth);
 	alert("you have no answer:" + noAnswer.length)
 }else{
  startTimer();
  $('#containerForSelectedOptions').html("");

 targetQuestion = remainingQuestions.pop();
 //var answer = prompt(question.q);
 //if(answer === question.answer)
 // answerRight.push(question);
 //else
 // answerWrong.push(question);
 //
 var choice = targetQuestion.answer;
 $('#asked-question').html(targetQuestion.q);
 for (var i = 0; i< choices.length; i++){
 	var choice = $('<div>');
 	choice.text(choices[i]);
 	choice.attr('id', "choice-" +i);
 	choice.attr('index',i);
 	$('#containerForSelectedOptions').append(choice);

 	choice.click(function(){}
 //alert("I Guessed" + this.innerHTML){
 if(this.innerHTML === targetQuestion.correct){
 	alert("OK");
 	answerRight.push(targetQuestion);

 	askQuestion();	
 }
});
 }
}
}
askQuestion();

*/

var questions = [
    {
          question:"what is the largest city in the United States?",
          answer:["New York", "Los Angeles", "Chicago", "Dallas"],
          rightAnswer: "New York"
    },
{
          question:"who is the first black millionaire businesswoman?",
          answer: ["Oprah Winfrey","Esther Roll", "Sara Breedlove","Harriet Tubman"],
          rightAnswer: "Sara Breedlove aka Madame CJ Walker"
},
    {
          question:"which state flas depicts an eagle that looks confused and distressed?",
          answer: ["Michigan", "Illinois", "Kansas", "Oregon"],
          rightAnswer: "Illinois"
},

    {
          question:"what is 4 x 4",
          answer: ["4","18","16","14"],
          rightAnswer: "16"
},

];

var answers = ['New York', 'Breedlove', 'Illinois', '16'],
    data = $('input'),
    rightAnswer = 0,
    wrongAnswer = 0,
    noAnswer = 0,
    count = [],

    console.log(data);


function beginTheGame() {
  $('data').('display');
    for(var i = 0; i <data.length; i++){

    }


}





