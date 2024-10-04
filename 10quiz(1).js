document.addEventListener('DOMContentLoaded', () => {
const quizForm = document.getElementById('quiz-form');
const addQuestionBtn = document.getElementById('add-question');
const quizzesList = document.getElementById('quizzes');
const takeQuizSection = document.getElementById('take-quiz');
const questionsDisplay = document.getElementById('questions-display');
const quizTitleDisplay = document.getElementById('quiz-title-display');
const submitQuizBtn = document.getElementById('submit-quiz');
const quizResultSection = document.getElementById('quiz-result');
const scoreDisplay = document.getElementById('score-display');
const retryQuizBtn = document.getElementById('retry-quiz');
const backToListBtn = document.getElementById('back-to-list');

    let quizzes = [];
    let currentQuizIndex = null;

    addQuestionBtn.addEventListener('click', () => {
        const questionTemplate = document.querySelector('.question').cloneNode(true);
        questionTemplate.querySelectorAll('input').forEach(input => input.value = '');
        document.getElementById('questions-container').appendChild(questionTemplate);
    });

    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const quizTitle = document.getElementById('quiz-title').value;
        const questions = Array.from(document.querySelectorAll('.question')).map(questionElement => {
            return {
                questionText: questionElement.querySelector('.question-text').value,
                options: Array.from(questionElement.querySelectorAll('.option')).map(option => option.value).filter(option => option),
                correctOption: parseInt(questionElement.querySelector('.correct-option').value)
            };
        });

        const quiz = {
            title: quizTitle,
            questions: questions
        };

        quizzes.push(quiz);
        updateQuizList();
        quizForm.reset();
        document.getElementById('questions-container').innerHTML = '';
        document.getElementById('questions-container').appendChild(document.querySelector('.question').cloneNode(true));
    });

    function updateQuizList() {
        quizzesList.innerHTML = '';
        quizzes.forEach((quiz, index) => {
            const quizItem = document.createElement('li');
            quizItem.textContent = quiz.title;
            quizItem.addEventListener('click', () => {
                currentQuizIndex = index;
                startQuiz(quiz);
            });
            quizzesList.appendChild(quizItem);
        });
    }

    function startQuiz(quiz) {
        quizTitleDisplay.textContent = quiz.title;
        questionsDisplay.innerHTML = '';
        quiz.questions.forEach((question, questionIndex) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('quiz-question');
            questionElement.innerHTML = `
                <p>${question.questionText}</p>
                ${question.options.map((option, index) => `
                    <label>
                        <input type="radio" name="question-${questionIndex}" value="${index + 1}">
                        ${option}
                    </label>
                `).join('')}
            `;
            questionsDisplay.appendChild(questionElement);
        });
        takeQuizSection.style.display = 'block';
    }

    submitQuizBtn.addEventListener('click', () => {
        const quiz = quizzes[currentQuizIndex];
        let score = 0;
        quiz.questions.forEach((question, questionIndex) => {
            const selectedOption = parseInt(document.querySelector(`input[name="question-${questionIndex}"]:checked`)?.value);
            if (selectedOption === question.correctOption) {
                score++;
            }
        });
        scoreDisplay.textContent = `Your score is ${score} out of ${quiz.questions.length}`;
        takeQuizSection.style.display = 'none';
        quizResultSection.style.display = 'block';
    });

    retryQuizBtn.addEventListener('click', () => {
        startQuiz(quizzes[currentQuizIndex]);
        quizResultSection.style.display = 'none';
    });

    backToListBtn.addEventListener('click', () => {
        quizResultSection.style.display = 'none';
        document.getElementById('create-quiz').style.display = 'block';
        document.getElementById('quiz-list').style.display = 'block';
    });
});
