const questionDataBase = [
  {
    question: "most used programming languages in 2021?",
    a1: "javaScript",
    a2: "java",
    a3: "python",
    a4: "c",
    correct: "a3",
  },
  {
    question: "When was Js made?",
    a1: "1998",
    a2: "2000",
    a3: "1994",
    a4: "1995",
    correct: "a4",
  },
  {
    question: "Who made C++?",
    a1: "James Gosling",
    a2: "Bjarne Stroustrup",
    a3: "Brendan Eich",
    a4: "Mark Zuckerberg",
    correct: "a2",
  },
];

let currentQuizNumber = 0;
let userScore = 0;

// get all needed elements
let quizTitle = document.getElementById("quiz-title");
let a1Lable = document.getElementById("a1-lable");
let a2Lable = document.getElementById("a2-lable");
let a3Lable = document.getElementById("a3-lable");
let a4Lable = document.getElementById("a4-lable");
let submit = document.getElementById("submit");
let answerInputs = document.querySelectorAll(".answer-input");

class QuizHandler {
    constructor() {
    }
    lableChanger() {
        quizTitle.innerHTML = questionDataBase[currentQuizNumber].question;
        a1Lable.innerHTML = questionDataBase[currentQuizNumber].a1;
        a2Lable.innerHTML = questionDataBase[currentQuizNumber].a2;
        a3Lable.innerHTML = questionDataBase[currentQuizNumber].a3;
        a4Lable.innerHTML = questionDataBase[currentQuizNumber].a4;
    }
    setValue() {
        answerInputs.forEach( (inputEl, key) => {
            switch (key) {
                case 0:
                    answerInputs[0].value = questionDataBase[currentQuizNumber].a1;
                    break;
                case 1:
                    answerInputs[1].value = questionDataBase[currentQuizNumber].a2;
                    break;
                case 2:
                    answerInputs[2].value = questionDataBase[currentQuizNumber].a3;
                    break;
                case 3:
                    answerInputs[3].value = questionDataBase[currentQuizNumber].a4;
                    break;
                default:
                    console.log('value not set!');
                    break;
            }
        });
    }
    currentQuizNumberPluser() {
        currentQuizNumber ++;
    }
    trueChecker() {
        answerInputs.forEach(inputEl => {
            console.log(inputEl.value);
            if(inputEl.checked) {
                console.log(inputEl.checked);
            }
        });
    }
    checkFinisher() {
        if(currentQuizNumber == questionDataBase.length) {
            console.log('finish');
            submit.style.display = 'none';
        } else {
            this.lableChanger();
        }
    }
}
quizeHandler = new QuizHandler();
quizeHandler.lableChanger();
quizeHandler.setValue();
quizeHandler.trueChecker();

submit.addEventListener('click', () => {
    quizeHandler.currentQuizNumberPluser();
    quizeHandler.checkFinisher();
    // lable changer called from checkFinisher() in class
    quizeHandler.setValue();
    quizeHandler.trueChecker();
} );