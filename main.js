const imgClick = document.querySelector('.imgClick')
const btnReset = document.querySelector('.btnReset')
const msgRandom = document.querySelector('.msgRandom')

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

imgClick.addEventListener('click', toggleScreen)
btnReset.addEventListener('click', toggleScreen)
document.addEventListener('keydown', catchEnter)

const phrases = [
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.'
]

function changePhrases(){
    let allPhrases = phrases.length
    let randomNumber = Math.round(Math.random() * allPhrases)
    for (let i in phrases) {
        if (randomNumber == i) {
            msgRandom.innerText = phrases[i]
            //screen2.querySelector("h2").innerText = `${fortune[randomNumber]}`
            //como a rockeseat fez
        }
    }
}

function toggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
    changePhrases()
  }

function catchEnter(event){
    if(event.key == 'Enter'){
        toggleScreen()
    }
}
