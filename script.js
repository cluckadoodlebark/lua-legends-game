/* script.js */

// Diagnostic Test Answers
const correctAnswers = {
  q1: 'b',
  q2: 'c',
  q3: 'a',
};

function submitDiagnostic() {
  const form = document.getElementById('diagnostic-form');
  let score = 0;
  let totalQuestions = Object.keys(correctAnswers).length;

  Object.keys(correctAnswers).forEach((key) => {
    const answer = form.elements[key].value;
    if (answer === correctAnswers[key]) {
      score++;
    }
  });

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `<h2>Your Score: ${score}/${totalQuestions}</h2>`;

  if (score <= 1) {
    resultDiv.innerHTML += '<p>You are a beginner. Let\'s start with the basics!</p>';
  } else if (score === 2) {
    resultDiv.innerHTML += '<p>You have some knowledge. We\'ll build on what you know!</p>';
  } else {
    resultDiv.innerHTML += '<p>Great job! You\'re ready for advanced challenges!</p>';
  }

  resultDiv.innerHTML += '<button onclick="startGame()">Proceed to Game</button>';
}

function startGame() {
  window.location.href = 'game.html';
}

function runCode() {
  const code = document.getElementById('code-editor').value;
  const outputDiv = document.getElementById('output');

  // Since executing Lua code in JS isn't straightforward, we'll simulate output
  if (code.toLowerCase().includes('print')) {
    outputDiv.innerText = 'Hello, World!';
  } else {
    outputDiv.innerText = 'Code executed successfully!';
  }
}
