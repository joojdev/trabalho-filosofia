const titleElement = document.querySelector('#title')
const questionElement = document.querySelector('#question')
const alternativesElement = document.querySelector('#alternatives')

const questions = [
  {
    question: 'Você acabou de ser promovido no trabalho, mas descobre que um colega de equipe foi injustamente prejudicado para que você recebesse a promoção. O que você faz?',
    alternatives: [
      'Aceito a promoção e sigo em frente, afinal, eu mereci.',
      'Confronto a injustiça, ainda que isso possa custar minha promoção.',
      'Ignoro a situação e aproveito meu novo status.'
    ]
  },
  {
    question: 'Você tem a chance de investir em um negócio lucrativo, mas que explora mão de obra de maneira antiética. Se você não investir, perderá uma oportunidade financeira importante. Qual será sua escolha?',
    alternatives: [
      'Invisto, pois preciso garantir meu futuro financeiro.',
      'Rejeito o investimento, pois não concordo com a exploração de trabalhadores.',
      'Invisto, mas tentarei fazer mudanças no futuro.'
    ]
  },
  {
    question: 'Você é responsável por decidir o futuro de um projeto comunitário. Sua decisão pode beneficiar uma grande parte da população, mas trará consequências negativas para uma minoria vulnerável. O que você faz?',
    alternatives: [
      'Priorizo o benefício da maioria, mesmo com as consequências negativas.',
      'Busco uma solução que minimize os danos para todos, mesmo que seja mais difícil.',
      'Deixo a decisão para os outros, pois não quero assumir responsabilidade.'
    ]
  }
]

function loadQuestion(index) {
  titleElement.textContent = `Pergunta Nº ${index + 1}`

  questionElement.textContent = questions[index].question
  questions[index].alternatives.forEach((alternative) => {
    const alternativeElement = document.createElement('li')
    alternativeElement.textContent = alternative
    alternativesElement.appendChild(alternativeElement)
  })
}

function main() {
  let currentQuestionIndex = 0
  loadQuestion(currentQuestionIndex)
}

main()