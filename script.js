var timerEl = document.querySelector('#timer');
var startEl = document.querySelector('#start');
var startBtn = document.querySelector('#start-btn');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');

var timeLeft = 60;

var currentIndex = 0;
var interval;

var question = [
    {
        text: "What is 2+1",
        items: ['1', '2', '3', '4'],
        answer: 2
    },
    {
        text: "question",
        items: ['a','b','c','d'],
        answer: 3
    }
];

var startTimer = function () {
    interval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            timeLeft = 0;
            clearInterval(interval);
            quizComplete();
        }
    }, 1000);
}

var renderQuestion = function () {
    var currentQuestion = question[currentIndex];
    quizEl.innerHTML = "";
    var titleEl = document.createElement('h1');
    titleEl.textContent = currentQuestion.text;

    for (var index of currentQuestion.items) {
        var item = currentQuestion.items[index];
        console.log(item);
        var buttonEl = document.createElement('button');
        buttonEl.textContent = item;
        buttonEl.dataset.index = index;
        quizEl.appendChild(buttonEl);
    }

    quizEl.appendChild(titleEl);
}

var showQuiz = function () {
    startEl.style.display = "none";
    quizEl.style.display = "block";
    endEl.style.display = "none";
    renderQuestion();
}

var quizComplete = function () {
    startEl.style.display = "none";
    quizEl.style.display = "block";
    endEl.style.display = "none";
    clearInterval(interval);
    console.log('score', timeLeft);
}

quizEl.addEventListener('click', function (event) {
    if (event.target.matches('h1')) {
        var buttonId = parse.Int(event.target.dataset.index);
        var questionAnswer = question[currentIndex].answer;

        if (buttonId === questionAnswer) {
            console.log("correct");
        } else {
            console.log("wrong");
        }
        if (currentIndex < question.length) {
            renderQuestion();
        } else {
            quizComplete();
        }
    }
})

startBtn.addEventListener('click', function () {
    startTimer();
    showQuiz();
})