// reference question element by grabbing it by it's ID//
// reference choices element by className//
//covert choices html collection into an array//
//use data set attribute to collect 

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");


//create variable for current questions as object//
//create variable for acceptingAnswers to delay the between questions//
//create score variable and set to 0//
//create empty array of available questions//


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

//pass through array of questions in questions array// 
//create a check to see if the choice is true against answer//

let questions = [
  {
    question: "Who is the main character of JoJo's Bizarre Adventure?",
    choice1: "Johnathan Joestar",
    choice2: "JoJo",
    choice3: "DIO",
    choice4: "General Stroheim",
    answer: 1
  },
  {
    question:
      "how did Joseph sneak into the secret base hiding the Pillar Man?",
    choice1: "Sweet Talk",
    choice2: "Heels",
    choice3: "Drag",
    choice4: "a bomb",
    answer: 3
  },
  {
    question: " what's Jonathan's mom's name?",
    choice1: "Heather",
    choice2: "Kiki",
    choice3: "Miss Joestar",
    choice4: "Mary",
    answer: 4
  }, {
    question:
      "what is a stand?",
    choice1: "stance against something political",
    choice2: "a bug",
    choice3: "a rug",
    choice4: "an entity psychicly linked with it's owner ",
    answer: 4
  },
   {
    question:
      "what is the character Dio's stand called?",
    choice1: "the world",
    choice2: "the sun",
    choice3: "the moon",
    choice4: "the stars",
    answer: 1
  },
   {
    question:
      "what popular video game references JoJo's Bizarre Adventure?",
    choice1: "super mario",
    choice2: "flappy bird",
    choice3: "street fighter",
    choice4: "celeste",
    answer: 3
  },
   {
    question:
      "which street fighter character is based on Lisa Lisa?",
    choice1: "rose",
    choice2: "fern",
    choice3: "penelope",
    choice4: "lily",
    answer: 1
  },
   {
    question:
      "what is the energy ability that Lisa Lisa is a master of?",
    choice1: "lighting",
    choice2: "ripple",
    choice3: "teleportation",
    choice4: "cloning",
    answer: 2
  },
];

//CONSTANTS

//reference to tally game score points points//
//number of questions the user can answser//
const CORRECT_BONUS = 100;
const MAX_QUESTIONS = 8;


//create start the game function with fat arrow syntax //
//create reset for question counter to zero.//
//copy in all questions with spread operator//
//create function to get new questions =>//
//use question counter to increment question on by 1//
//use math floor ( random function) * available questions array dot length//
//assign to var questionIndex//
//reference current question from available questions array.
//reference question inner text to equal current question
//use for each function =. to interate through choices.//
//grab choice property and get choice out of current questions//
//assign variable to ref number from dataset//
//grab available questions array and use splice to removed finished questions
//use question index and set splice to 1.
//set acceptingAnswers to true/

//use for each function to grab each choice//

//add event listener to click to reference each choice clicked/
//set accepting answers to false and return if not accepting answers/
 
// reference selected choice and selected answer//

//call get new question function//

//create if statement for available question array length = 0 or question counter is at max questions. end game//

//pull string out create var class to apply. make if statement that if selected answers to incorrect and if incorrect is false. 

//apply class to apply to selected choice parent element apple classlist class to apply.//

//use set time out function set callback function to delay 1000ms//

//use increment function to increase score by 100 points for correct answser//



//return to end game html window.


 
//call start game function//
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //game over
    return window.location.assign("/end.html");
  }
  questionCounter++;
  questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();