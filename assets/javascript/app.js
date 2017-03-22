 // Question set
 var questions = [
   {
     question: "What was Norman Bate's hobby in Psycho?",
     answers: ["bird watching", "stuffing birds", "photography", "horse back riding"],
     correctAnswer: "stuffing birds"
   },
   {
     question: "Who was the first female monster to appear in a movie?",
     answers: ["Medusa", "Gorgon", "Bride of Frankenstein", "Countess Marya Zaleska"],
     correctAnswer: "Bride of Frankensteins"
   },
   {
     question: "In Hitchcock's Film, The Trouble with Harry, what was the trouble?",
     answers: ["He was lazy", "He was depressed", "He lost his leg", "He was dead"],
     correctAnswer: "he was dead"
   },
 
 ];// Variable that will hold the setInterval

var timer;
var correct = 0;
var incorrect = 0;
var counter = 120;

// purpose of this function:
//   called once for each passing second of time to display, and track
//   a countdown for the user.
function countdown() {

	timer = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(timer);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}
  // todo: decrement the counter variable

  // todo: set the counter-number element in the dom to be the counter number

  // todo: when counter is 0, call done().

// purpose of this function:
//   called to begin the game (which begins when they click the 'start' button)
function start() {
  // todo: start the timer (setInterval) using the countdown function as a callback

  // todo: prepend html to the sub-wrapper element in the dom to show an initial countdown time
  //   html content that looks like this:
  //   <h2>Time Remaining: <span id='counter-number'>" + counter + "</span> Seconds</h2>

  // todo: remove the #start button element from the dom (since the game is now starting)

  // loop thru the questions array
  for (var i = 0; i < questions.length; i++) {
    
    // todo: append html to the dom's #quiz-area that displays the question

    // loop thru the answers in the question
    for (var j = 0; j < questions[i].answers.length; j++) {

      // append html to the dom's #quiz-area that displays the answers
      $("#quiz-area").append("<input type='radio' name='question-" + i +
      "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);

    }
  }

  // todo: append html to the dom's #quiz-area that displays a done button with an id='done'
  $("#quiz-area").append("<h2>Time's Up!</h2>");
}

// purpose of this function:
//   called to end the game (which ends when they click the 'done' button)
function done() {

  // tally the correct and incorrect answers for the first question
  $.each($("input[name='question-0']:checked"), function() {
    if ($(this).val() === questions[0].correctAnswer) {
      correct++;
    }
    else {
      incorrect++;
    }
  });

  $.each($("input[name='question-1']:checked"), function() {
    if ($(this).val() === questions[1].correctAnswer) {
      correct++;
    }
    else {
      incorrect++;
    }
  });

  $.each($("input[name='question-2']:checked"), function() {
    if ($(this).val() === questions[2].correctAnswer) {
      correct++;
    }
    else {
      incorrect++;
    }
  });

  // todo: call function to display the user's quiz results

}

// purpose of this function:
//   displays the user's quiz results
function result() {

  // todo: stop the timer using clearInterval

  // todo: remove the dom element targeted by $("#sub-wrapper h2")
  //       (this is what we created in the start() function above)

  // todo: replace the contents of the dom element #quiz-area with the results
  //       of the quiz.
  //       hint: the results are held in the variables: 'correct', 'incorrect', and
  //             the unanswered questions can be derived by:
  //             (questions.length - (incorrect + correct))

}

// CLICK EVENTS

$(document).on("click", "#start", function() {

  // call function to start the game
  start();

});


$(document).on("click", "#done", function() {

  // call function to end the game
  done();

});





// //create array with the questions//
// 	var quoteArray = ["What was Norman Bate's hobby in Psycho?", 
// 					  "Who was the first female monster to appear in a movie?",
// 					  "In Hitchcock's Film, The Trouble with Harry, what was the trouble?"
// 					  ];
// 					  console.log(quoteArray)
// //create array with answer choices//
// 	var choiceArray = [["bird watching", "stuffing birds", "photography", "horse back riding"], 
// 					  ["Medusa", "Gorgon", "Bride of Frankenstein", "Countess Marya Zaleska"],
// 					  ["He was lazy", "He was depressed", "He lost his leg", "He was dead"]];
// 					  console.log(choiceArray)
// //create array with the correct answers//
// 	var answerArray = ["stuffing birds", 
// 					   "Bride of Frankenstein",
// 					   "he was dead"
// 					   ];
// 					   console.log(answerArray)

// //create a start button for the game//
// 	var startGame;

// //once the start button has been pressed, show the questionTimer for 10 seconds//
// 	var questionTimer = 10;


// //once questionTimer finishes, show choiceArray and set answerTimer for 30 seconds//
// 	var answerTimer = 30;

// //user chooses answer//
// 	var userAnswer;

// //once answerTimer finishes display the correct answer from answerArray//
// 	var correctAnswer;

// //log answer as correct, incorrect or unanswered.//
// //counter for the answers correct//
// 	var correct = 0;

// //counter for the answers incorrect//

// 	var incorrect = 0;

// //counter for unanswered questions//
// 	var unanswered = 0;

// //ALSO, need an area for the game to be played in!//
// 	var startArea;








// //EVERYTHING FOR GAME PLAY//
// $(document).ready(function() {
// //Function to allow a button that starts the game//
// 	function gameStartArea() {
// 		startArea = "<p class='main-button-style'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
// 		$("#gameArea").html(startArea);
// 		console.log(startArea)
// 	};

// // gameStartArea();

// // $("#button").click( function() {
// // 	var r= $('<input type="button" value="new button"/>');
// //         $("body").append(r);
// // });








// function lossOfTime() {
// 	unanswered++;
// 	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + answerArray[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
// 	$(".gameArea").html(gameHTML);
// 	setTimeout(wait, 3000); 
// }

// function generateWin() {
// 	correct++;
// 	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
// 	$(".gameArea").html(gameHTML);
// 	setTimeout(wait, 3000);  
// }

// function generateLoss() {
// 	incorrect++;
// 	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
// 	$(".gameArea").html(gameHTML);
// 	setTimeout(wait, 3000); 
// }

// function generateHTML() {
// 	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + choiceArray[questionCounter] + "</p><p class='first-answer answer'>A. " + choiceArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+choiceArray[questionCounter][2]+"</p><p class='answer'>D. "+choiceArray[questionCounter][3]+"</p>";
// 	$(".gameArea").html(gameHTML);
// }

// function wait() {
// 	if (questionCounter < 7) {
// 	questionCounter++;
// 	generateHTML();
// 	counter = 30;
// 	finalCountDown();
// 	}
// 	else {
// 		finalScreen();
// 	}
// }

// function finalCountDown() {
// 	thetimer = setInterval(thirtySeconds, 1000);
// 	function thirtySeconds() {
// 		if (counter === 0) {
// 			clearInterval(theTimer);
// 			lossOfTime();
// 		}
// 		if (counter > 0) {
// 			counter--;
// 		}
// 		$(".timer").html(counter);
// 	}
// }

// function finalScreen() {
// 	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + answerTimer + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correct + "</p>" + "<p>Wrong Answers: " + incorrect + "</p>" + "<p>Unanswered: " + unanswered + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
// 	$(".gameArea").html(gameHTML);
// }

// function gameReset() {
// 	questionTimer = 0;
// 	correct = 0;
// 	incorrect = 0;
// 	unanswered = 0;
// 	counter = 30;
// 	generateHTML();
// 	finalCountDown();
// }

// //EVERYTHING FOR GAME PLAY//
// triviaWindow();

// (".gameArea").on(".start-button", function(event){
// 	generateHTML();
// 	finalCountDown();

// });

// $(".gameArea").on(".answer", function(event){
// 	userAnswer = $(this).text();
// 	if(userAnswer === correct[questionCounter]) {

// 		clearInterval(theTimer);
// 		generateWin();
// 	}
// 	else {
// 		clearInterval(theTimer);
// 		generateLoss();
// 	}

// });

// $(".gameArea").on(".reset-game-button", function(event){
// 	gameReset();
// });
// });




