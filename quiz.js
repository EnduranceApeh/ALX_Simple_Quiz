function checkAnswer() {
  const correctAnswer = '4';

  const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
  const feedback = document.getElementById('feedback');

  if (userAnswer === correctAnswer) {
    feedback.textContent = 'Correct! Well done.'
    console.log('correct')
  } else if (userAnswer !== correctAnswer) {
    feedback.textContent = "That's incorrect. Try again!"
  }

}

const submitBtn = document.getElementById('submit-answer');

submitBtn.addEventListener('click', checkAnswer)

