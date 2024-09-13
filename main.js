const titleElement = document.querySelector('#title');
const questionElement = document.querySelector('#question');
const alternativesElement = document.querySelector('#alternatives');
const initButton = document.querySelector('#initButton');
const box = document.querySelector('#box');
const resultsBox = document.querySelector('#results');
const content = document.querySelector('#content');

initButton.addEventListener('click', () => {
  initButton.classList.add('hidden');
  box.classList.add('visible');  // Show the first card
});

function loadQuestion(question, callback) {
  questionElement.textContent = question.text;
  alternativesElement.innerHTML = '';  // Clear previous alternatives

  question.alternatives.forEach((alternative) => {
    const alternativeElement = document.createElement('li');
    alternativeElement.textContent = alternative.text;
    alternativeElement.addEventListener('click', () => callback(alternative));

    alternativesElement.appendChild(alternativeElement);
  });
}

function fetchQuestions() {
  return new Promise((resolve, reject) => {
    fetch('./questions.json')
      .then((response) => {
        if (!response.ok) throw new Error('Error fetching questions');
        return response.json();
      })
      .then((questions) => resolve(questions))
      .catch((error) => reject(error));
  });
}

function showResults(answers) {
  box.classList.remove('visible');  // Hide the question card
  resultsBox.classList.add('visible');  // Show results card
  content.textContent = JSON.stringify(answers, null, 2);  // Display answers
}

async function main() {
  let questions = [];
  await fetchQuestions()
    .then((fetchedQuestions) => {
      questions = fetchedQuestions;
    })
    .catch((error) => console.log(error));

  if (!questions) return;

  let index = 0;
  let answers = [];

  function nextQuestion(alternative = undefined) {
    if (alternative) answers.push(alternative);
    if (index === questions.length) return showResults(answers);

    titleElement.textContent = `Pergunta Nº ${index + 1}`;
    loadQuestion(questions[index], nextQuestion);

    index++;
  }

  nextQuestion();  // Load first question
}

main();
