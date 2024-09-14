const titleElement = document.querySelector('#title')
const questionElement = document.querySelector('#question')
const alternativesElement = document.querySelector('#alternatives')
const initButton = document.querySelector('#initButton')
const box = document.querySelector('#box')
const resultsBox = document.querySelector('#results')
const imagem = document.querySelector('img')
const analisecritica = document.querySelector('#analisecritica')
const parasepensar = document.querySelector('#parasepensar')
const etica = document.querySelector('#etica')

results = [
  {
    "name": "Ética aristotelica",
    "type": 0,
    "text": [
      "Para Immanuel Kant, a felicidade é um conceito desejável, mas não pode ser o critério central da moralidade. Ele defende que a moralidade deve se basear no dever e na razão, e não nos desejos pessoais ou na busca pela felicidade. Para Kant, o único bem incondicionalmente bom é a boa vontade, ou seja, a capacidade de agir de acordo com princípios morais, independentemente das consequências.",
        
      "Kant argumenta que a felicidade é variável e subjetiva, mudando de acordo com os desejos e circunstâncias de cada pessoa. Por isso, ela não pode ser usada como um padrão universal para julgar a moralidade de uma ação. Agir com o objetivo de ser feliz seria agir com base em desejos pessoais, e não em princípios morais aplicáveis a todos.",
        
      "O filósofo propõe o imperativo categórico, que exige que nossas ações possam ser universalizadas, ou seja, adotadas por qualquer pessoa como princípios morais. A busca pela felicidade individual pode levar a ações que satisfaçam interesses próprios, mas que não seriam moralmente corretas do ponto de vista universal. Para Kant, a moralidade deve estar acima do interesse pessoal.",
        
      "Em contraste, o utilitarismo de Jeremy Bentham e John Stuart Mill defende que a felicidade ou o bem-estar deve ser o critério central para julgar a moralidade. A ação moralmente correta, segundo os utilitaristas, é aquela que maximiza a felicidade e minimiza o sofrimento para o maior número de pessoas. Aqui, as consequências são o que determina se uma ação é moralmente boa.",
        
      "Os consequencialistas defendem que a moralidade está ligada à felicidade coletiva, e não apenas à individual. As ações devem ser avaliadas de forma imparcial, considerando o impacto em todos os envolvidos. No entanto, essa visão enfrenta desafios, como medir a felicidade e conciliar interesses individuais e coletivos.",
        
      "Finalmente, na ética aristotélica, a felicidade (eudaimonia) é o objetivo da vida, alcançada através da virtude e do uso da razão. No entanto, fatores externos, como riqueza e saúde, também influenciam essa capacidade de viver de forma virtuosa, levantando a questão sobre o quanto uma pessoa pode controlar sua própria felicidade diante dessas circunstâncias."
      ],
    "question" : "Se a verdadeira felicidade é alcançada por meio da prática constante da virtude, como Aristóteles argumenta, até que ponto uma pessoa pode realmente controlar ou garantir essa felicidade, dado que fatores externos, como riqueza, saúde e circunstâncias sociais, também podem influenciar sua capacidade de viver de forma virtuosa?",
    "image" : "etica_aristotelica.jpg"
  },
  {
    "name": "Ética consequencialista",
    "type": 1,
    "text": [
      "A ética consequencialista nos diz que o valor moral de uma ação deve ser determinado por suas consequências. Apesar dessa abordagem ter a intenção de promover o bem-estar geral, ela enfrenta críticas substanciais que merecem uma reflexão mais aprofundada.",
      
      "Podemos acabar por passar por cima de limites e direitos, como por exemplo: Temos um hospital com várias pessoas que precisam de uma doação de órgãos, cada um no hospital precisa de um órgão diferente. Então, seguindo a ética consequencialista se julga o seguinte: Devemos tirar os órgãos de um paciente saudável e colocar nos que precisam de transplantes, assim perderemos uma vida e salvaremos várias outras. Porém, isso passa por cima do direito de uma pessoa de viver.",
      
      "O indivíduo sempre vai colocar os outros acima dele mesmo, e muitas vezes isso acaba por prejudicar ele. A imparcialidade é sempre possível? Essa é uma ótima questão, será que podemos mesmo ser imparciais sempre? Acredito que não, sempre vamos tomar decisões baseadas no nosso conhecimento e experiências, mesmo que tentando é muito difícil fugir disso, então mesmo buscando a imparcialidade tendemos a escolher parcialmente.",
      
      "No mundo real temos muitas variáveis para se analisar, e muitas nós desconhecemos, é muito complexo calcular qual beneficiará o maior número de pessoas com essa complexidade de variáveis.",
      
      "Nem sempre o que beneficia a maior quantidade de pessoas é o melhor, teremos situações que os benefícios podem ser diferentes, em que escolher um grupo menor fará com que ele seja muito melhor beneficiado do que um grupo maior."
    ],
    "question" : "Se uma ação é considerada moralmente correta apenas com base em seus resultados, como podemos lidar com situações em que as consequências são imprevisíveis ou incertas? Isso não colocaria em risco a consistência ética, dado que o julgamento moral estaria sujeito a fatores fora do controle do agente?",
    "image": "etica_consequencialista.jpg"
  },
  {
    "name": "Ética kantiana",
    "type": 2,
    "text": [
      "Para Kant, a moralidade é regida pelo imperativo categórico, que pede que nossas ações possam ser universalizadas, ou seja, aplicáveis a todos. Isso pode parecer muito rígido. Por exemplo, Kant diria que mentir, mesmo para salvar uma vida, é sempre errado. Essa inflexibilidade não leva em conta a complexidade das situações reais e pode resultar em decisões que parecem desumanas.",
      
      "Além disso, Kant foca mais na intenção do que nas consequências. Para ele, o valor moral de uma ação depende de seguir a lei moral, não dos resultados que ela pode gerar. Isso pode ser um problema, porque muitas vezes o impacto real da ação é crucial. Se uma ação causa sofrimento, mas segue um princípio moral, Kant ainda a consideraria certa. Essa separação entre intenção e resultado pode parecer desconectada da realidade prática.",
      
      "Kant também dá pouca atenção às emoções. Ele acha que a moralidade deve ser baseada só na razão, ignorando sentimentos como compaixão e empatia. No entanto, muitas vezes somos motivados por nossas emoções. Ignorar isso pode tornar a ética kantiana distante da nossa experiência cotidiana. A ideia de tratar todos como fins em si mesmos é ótima, mas na prática, usamos pessoas como meios para alcançar objetivos, o que pode ser moralmente aceitável em muitos casos.",
      
      "A necessidade de Kant de que nossas ações sejam universalizáveis pode ser difícil de aplicar, pois as culturas e situações variam muito. O que é moral em um lugar pode não ser em outro. Além disso, Kant separa a moralidade da felicidade, dizendo que o dever é o único critério moral. No entanto, muitos acham que a moralidade deve estar ligada ao bem-estar e à felicidade.",
      
      "Finalmente, Kant exige imparcialidade total ao julgar ações morais, sem favoritismo. Embora a imparcialidade seja importante, há momentos em que a parcialidade pode ser moralmente justificada, como ajudar familiares ou amigos. A ética de Kant não reconhece essas sutilezas e o papel especial das pessoas próximas.",
      
      "Em suma, apesar de a ética de Kant fornecer uma estrutura clara, suas limitações – como rigidez, falta de atenção aos resultados e desconsideração das emoções – podem torná-la um pouco desconectada da vida real. Às vezes, uma abordagem mais flexível, que leve em conta intenções e consequências, pode ser mais prática e realista."
    ],
    "question" : "Se a ética kantiana se baseia na ideia de que devemos agir conforme princípios universais e sem exceções, como ela lida com situações em que seguir uma regra moral pode causar dano significativo a outros? Será que essa rigidez pode, em alguns casos, resultar em um distanciamento da realidade prática e dos dilemas morais complexos?",
    "image" : "etica_kantiana.jpg"
  }
]

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

function showResults(pontuation) {
  // É aqui onde você para quando termina o Quiz.
  box.classList.add('hidden')
  resultsBox.classList.remove('hidden')
  resultsBox.style.overflow = 'auto'

  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Aristotelica', 'Consequencialista', 'Kantiana'],
        datasets: [{
          label: 'Pontuação',
          data: pontuation,
          backgroundColor:[
            'rgba(56, 130, 58, 1)',
            'rgba(109, 56, 79, 1)',
            'rgba(194, 107, 35, 1)'
            ],
          hoverOffset: 4
        }]
    }
  }
  );
  
  let autor = pontuation.findIndex(p => p === Math.max(...pontuation));
  etica.innerText = "A sua ética é: " + results[autor].name
  imagem.src = results[autor].image
  results[autor].text.forEach((element) => {
      let p = document.createElement('p')
      p.innerText = element
      p.className = 'paragrafo'
      analisecritica.append(p)
    }
  )
  parasepensar.innerText = results[autor].question

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
  let pontuation = [0, 0, 0] //[Aristotelica, Consequencialista, Kantiana]


  function nextQuestion(alternative = undefined) {
    if (alternative){
      answers.push(alternative)
      pontuation[alternative.type] += 1
    }
    if (index == questions.length) return showResults(pontuation)

    titleElement.textContent = `Pergunta Nº ${index + 1}`
    loadQuestion(questions[index], nextQuestion)

    index += 1
  }

  nextQuestion()
}

main()