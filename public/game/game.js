//jshint esversion:6

//ideas - add hints, removes two of the answers, add sound effects


let quotes;
let shuffledQuotes;


fetch('http://localhost:5000/allquotes')
  .then(response => response.json())
  .then(data => {
    quotes = data;
    console.log(quotes);
    shuffledQuotes = shuffle(quotes)
    loadQuestionAndAnswers();
    updateGameStates(); 
  });

  console.log(quotes);

// let shuffledQuotes = shuffle(quotes);

console.log(shuffledQuotes);

const names = [
        "Hubert J. Farnsworth",
        "Bender B. Rodriguez",
        "Philip J. Fry",
        "Turanga Leela",
        "Dr. John Zoidberg",
        "Hermes Conrad",
        "Amy Wong",
        "Zapp Brannigan",
        "That Guy",
        "Sales Clerk",
        "Morbo"
      ];

function loadQuestionAndAnswers() {
  //remove quote from randomized quotes - set variables for properties
  // currQuestion = shuffledQuotes.shift();
  // currQuote = currQuestion[0];
  // currAnswer = currQuestion[1];
  // currQuestionScore = currQuestion[2];

  currQuestion = shuffledQuotes.shift();
  currQuote = currQuestion.quote;
  currAnswer = currQuestion.name;
  currQuestionScore = currQuestion.score;

  document.getElementById("question").innerHTML = currQuote;

  currAnswerChoices = Array(4);
  currAnswerChoices[Math.floor(Math.random() * 4)] = currAnswer;

  //removes curr answer from potential answers
  let shuffledNames = shuffle(names);
  shuffledNames = shuffledNames.filter(function(value, index, arr){
    return value !== currAnswer;
  });

  //sets value of currAnswerChoices with random answers
  for (let i = 0; i < currAnswerChoices.length; i++) {
    if (currAnswerChoices[i] !== currAnswer) {
      currAnswerChoices[i] = shuffledNames[i];
    }
  }

  for (let i=0; i < currAnswerChoices.length; i++) {
    document.getElementById("answer" + i).innerHTML = currAnswerChoices[i];
  }
}


const gameStates = document.getElementById("gameStates");
let questionNum = 1;
let score = 0;
let tries = 3;
let currQuestion;
let currQuote;
let currAnswer;
let currQuestionScore;

//add click event listener with switch statements look for appropriate answers
//check if answers are correct
let answerDivs = document.getElementsByClassName("answer");

for (let i = 0; i < answerDivs.length; i++) {
  answerDivs[i].addEventListener("click", function(event) {
    const cElem = event.target.id;
    console.log(cElem);
    if (cElem === "answer0" || cElem === "answer1" || cElem === "answer2" || cElem === "answer3") {
      console.log("It's on of the answers");
      const cText = document.getElementById(cElem).innerHTML;
      if (cText === currAnswer) {
        correctAnswer();
        updateGameStates();
        displayMessage(true);
      } else {
        wrongAnswer();
        updateGameStates();
        displayMessage(false);
      }
    }
  });
}

function correctAnswer() {
  score += currQuestionScore;
  questionNum += 1;
  //playSound right x currQuestionScore
}

function wrongAnswer() {
  tries -= 1;
  questionNum += 1;
  //playSound wrong
}

function updateGameStates() {
  gameStates.innerHTML = "Tries: " + tries + " Question: " + questionNum + "   Score: " + score;
}

function displayMessage(corrAnswer) {
  //input: correctAnswer = bool, optional true = won, false = lost, absent = other
  let corrMessage = "Huzzahs are in order!<br>+ " + currQuestionScore + "<br>Click for the next question";
  let incMessage = "Oooh, so close...<br>-1" + "<br>Click for the next question";
  let endOfGameWin = "Oh snap, you made it through all the questions!<br>Final Score: " + score + " Click here to play again!";
  let endOfGameLoss = "Game Over Meatbag<br>Final Score: " + score + "<br>Click to play again!";

  hideQandA();
  let newP = document.createElement('div');
  newP.setAttribute("id", "message");
  newP.classList.add("message");
  if (corrAnswer === true) {
    if (shuffledQuotes.length < 1) {
      newP.innerHTML = endOfGameWin;
    } else {
      newP.innerHTML = corrMessage;
    }
  } else if (corrAnswer === false) {
    if (tries < 1) {
      newP.innerHTML = endOfGameLoss;
    } else {
      newP.innerHTML = incMessage;
    }
  }

  let reference = document.getElementById("titleBox");
  reference.parentNode.insertBefore(newP, reference.nextSibling); 

  newP.addEventListener("click", function() {
    newP.remove();
    revealQandA();
    //Skip to next question if in game
    if (tries === 0 || shuffledQuotes.length === 0) {
      //if game over by loss or win - reset game
      resetGame();
      loadQuestionAndAnswers();
    } else {
      loadQuestionAndAnswers();
    }
  });
}

function resetGame() {
  shuffledQuotes = shuffle(quotes);
  tries = 3;
  score = 0;
  questionNum = 1;
  updateGameStates();
}

function hideQandA() {
  let q = document.getElementById("question");
  q.classList.add("hide");
  q.classList.remove("question");
  q.innerHTML = "";

  let aB = document.getElementById("answerBox");
  aB.classList.remove("answerBox");

  for (let i=0; i < 4; i++) {
    let a = document.getElementById("answer" + i);
    a.classList.add("hide");
    // a.classList.remove("question");
    a.innerHTML = "";
  }
}

function revealQandA() {
  let q = document.getElementById("question");
  q.classList.remove("hide");
  q.classList.add("question");

  let aB = document.getElementById("answerBox");
  aB.classList.add("answerBox");

  for (let i=0; i < 4; i++) {
    let a = document.getElementById("answer" + i);
    a.classList.remove("hide");
    // a.classList.add("question");
  }
}

function shuffle(array) {
  let newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

