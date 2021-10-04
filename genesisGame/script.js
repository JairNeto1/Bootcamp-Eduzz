let order = []
let clickedOrder = []
let score = 0

//0 = verde
//1 = vermelho
//2 = amrelo
//3 = azul

const blue = documet.querySelector('.blue')
const red = documet.querySelector('.red')
const green = documet.querySelector('.green')
const yellow = documet.querySelector('.yellow')

let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4)
  order[order.length] = colorOrder
  clickedOrder = []
}
for (let i in order) {
  let elementColor = creatColorElement(order[i])
  lightColor(elementColor, number[i] + 1)
}

let lightcolor = (elementColor, number) => {
  number = number * 500
  setTimeout(() => {
    Element.classList.add('select')
  }, number - 250)
  setTimeout(() => {
    element.classList.remove('select')
  })
}

//Checar se os botões clicados são os mesmos da ordem gerada no jogo.
let checkedOrder = () => {
  for (let i in clickedOrder){
    if(clickedOrder.[i] != order[i]){
      gameOver()
      break
    }
  } if(clickedOrder.length == order.length){
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível:`)
    nextlevel()
  }
}


//função para o click do usuário
let click = color => {
  clieckedOrder[clieckedOrder.length] = color
  creatColorElement(color).classList.add('select')

  setTimeout(() => {
    creatColorElement(color).classList.remove('select')
    
    checkedOrder()
  },250)
}

//Função que retorna a cor
let creatColorElement = (color) => {
  if (color == 0){
    return green
  }else if (color == 1) {
    return red
  }else if (color == 2) {
    return yellow
  }else if (color == 3) {
    return blue
  }
}

//função Nextlevel
letnextLevel = () => {
  score ++
  shuffleOrder()
}

// função game ovver
let gameOver = () => {
  alert(`Pontiação: ${score}!\nVocê perdeu o jogo!\nClick OK para iniciar um novo jogo`)
  clickedOrder =[]

  playGame()
}

let playGame = () => {
  alert('Iniciando novo Jogo')
  score = 0

  nextlevel()
}

//evento de click para as cores
green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)


playGame()