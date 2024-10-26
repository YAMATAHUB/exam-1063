let currentAnswer = 0;
let score = 0;
let questionCount = 0;
const totalQuestions = 10; 

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 20) + 1; 
    const num2 = Math.floor(Math.random() * 20) + 1; 
    const operations = ['+', '-', '*', ];
    const operation = operations[Math.floor(Math.random() * operations.length)];


    switch (operation) {
        case '+':
            currentAnswer = num1 + num2;
            break;
        case '-':
            currentAnswer = num1 - num2;
            break;
        case '*':
            currentAnswer = num1 * num2;
            break;
        case '/':

            currentAnswer = num2 !== 0 ? (num1 / num2).toFixed(2) : num1;
            break;
    }

    const questionText = `Nechi ${num1} ${operation} ${num2}?`;
    document.getElementById('question').innerText = questionText;
}

function resetGame() {
    score = 0;
    questionCount = 0; 
    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('result').innerText = '';
    document.getElementById('answerInput').value = '';
    document.getElementById('gameSection').classList.remove('hidden'); 
    generateQuestion();
}

function endGame() {
    document.getElementById('result').innerText = `10/ ${score} ta savolga javob berdingiz`;
    document.getElementById('question').innerText = '';
    document.getElementById('answerInput').value = '';
}

document.getElementById('Start').addEventListener('click', resetGame);

document.getElementById('Next').addEventListener('click', () => {
    const userAnswer = parseFloat(document.getElementById('answerInput').value);

    if (!isNaN(userAnswer)) {
        questionCount++;
        if (userAnswer === parseFloat(currentAnswer)) {
            document.getElementById('result').innerText = ' Togri javob!';
            score++;
        } else {
            document.getElementById('result').innerText = `Notogri javob, to'g'ri javob: ${currentAnswer}`;
        }

        document.getElementById('score').innerText = `Score: ${score}`;

        
        if (questionCount >= totalQuestions) {
            endGame();
        } else {
            document.getElementById('answerInput').value = '';
            generateQuestion();
        }
    } else {
        alert('Iltimos raqam yozing');
    }
});

document.getElementById('Restart').addEventListener('click', resetGame);

