var quizContainer = document.getElementById('#quiz');
var resultsContainer = document.getElementById('#results');
var submitButton = document.getElementById('#submit');




generateQuiz(quizQuestion, quizContainer, resultsContainer, submitButton);




var quizQuestion = [
    {
        question: "1+2=x",
        answers: {
            a: '1',
            b: '2',
            c: '3'
        },
        correctAnswer: 'c'
    },
    {
        question: " x+2=4 ?"
        answers: {
            a:'2',
            b:'4',
            c:'5'
        }
        correctAnswer: 'a'
    }
];