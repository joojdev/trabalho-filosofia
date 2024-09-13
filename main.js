const titleElement = document.querySelector('#title')
const questionElement = document.querySelector('#question')
const alternativesElement = document.querySelector('#alternatives')
const initButton = document.querySelector('#initButton')
const box = document.querySelector('#box')
const resultsBox = document.querySelector('#results')
const content = document.querySelector('#content')

initButton.addEventListener('click', () => {
  initButton.classList.add('hidden')
  box.classList.remove('hidden')
})

function loadQuestion(question, callback) {

  questionElement.textContent = question.text
  alternativesElement.innerHTML = ''
  question.alternatives.forEach((alternative) => {
    const alternativeElement = document.createElement('li')
    alternativeElement.textContent = alternative.text
    alternativeElement.addEventListener('click', () => callback(alternative))

    alternativesElement.appendChild(alternativeElement)
  })
}

function fetchQuestions() {
  return new Promise((resolve, reject) => {
    fetch('./questions.json')
      .then((response) => {
        if (!response.ok) throw new Error('Houve um problema ao buscar as questões no banco de dados.')
        return response.json()
      })
      .then((questions) => resolve(questions))
      .catch((error) => reject(error))
  })
}

function showResults(answers) {
  // É aqui onde você para quando termina o Quiz.
  box.classList.add('hidden')
  resultsBox.classList.remove('hidden')
  content.textContent = JSON.stringify(answers, null, 2)
}

async function main() {
  let questions = []

  await fetchQuestions()
    .then((fetchedQuestions) => {
      questions = fetchedQuestions
    })
    .catch((error) => {
      console.log(error)
    })

  if (!questions) return

  let index = 0
  let answers = []

  function nextQuestion(alternative = undefined) {
    if (alternative) answers.push(alternative)
    if (index == questions.length) return showResults(answers)

    titleElement.textContent = `Pergunta Nº ${index + 1}`
    loadQuestion(questions[index], nextQuestion)

    index += 1
  }

  nextQuestion()
}

main()