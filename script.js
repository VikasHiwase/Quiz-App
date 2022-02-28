const quizData = [
  {
    question:
      "Which one of the given option is NOT the possible ways to create objects in JavaScript?",
    a: "Object's create method",
    b: "Function constructor",
    c: "ES6 Class syntax",
    d: "Object constructor",
    e: "Non of the above",
    correct: "e",
  },
  {
    question: "Which one of the given option is INCORRECT?",
    a: "The call() method invokes a function with a given this value and arguments provided one by one",
    b: "The bind() method invokes a function allowing you to pass any number of arguments",
    c: "The apply() method Invokes the function with a given this value and allows you to pass in arguments as an array",
    d: "Splice method modifies the original array and returns the deleted array",
    e: "Non of the above",
    correct: "b",
  },
  {
    question: "Which one of the following option return FALSE?",
    a: "+0 === -0",
    b: `false == " "`,
    c: "{} == {}",
    d: "[1,2] == '1,2'",
    e: "Non of the above",
    correct: "c",
  },
  {
    question: "Which one of the given option is FALSE?",
    a: "First-class functions means when functions in that language are treated like any other variable.",
    b: "First-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.",
    c: "Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.",
    d: "Pure function is a function where the return value is only determined by its arguments without any side effects.",
    e: "Non of the above",
    correct: "e",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a__text = document.getElementById("a__text");
const b__text = document.getElementById("b__text");
const c__text = document.getElementById("c__text");
const d__text = document.getElementById("d__text");
const e__text = document.getElementById("e__text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;
  a__text.innerHTML = currentQuizData.a;
  b__text.innerHTML = currentQuizData.b;
  c__text.innerHTML = currentQuizData.c;
  d__text.innerHTML = currentQuizData.d;
  e__text.innerHTML = currentQuizData.e;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You scored ${score} out of ${quizData.length} </h2>`;
    }
  }
});
