var timerEl = document.querySelector('#timer');
var startEl = document.querySelector('#start');
var startBtn = document.querySelector('#start-btn');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');

var timeLeft = 60;

var startTimer = function () {
    var interval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            timeLeft = 0;
            clearInterval(interval);
        }
    }, 1000);
}



startBtn.addEventListener('click', function () {
    startTimer();
    showQuiz();
})