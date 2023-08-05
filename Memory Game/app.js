const cardarray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardarray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let Cardschosen = []
let CardschosenIDs = []
const Cardswon = []

function Createboard() {
    for (let i = 0; i < cardarray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', Flipcard)
        gridDisplay.append(card)
    }
}
Createboard()


function checkmatch() {
    const Cards = document.querySelectorAll('#grid img')

    if (Cardschosen[0] == Cardschosen[1]) {
        alert('You found a Match!')
        Cards[CardschosenIDs[0]].setAttribute('src', 'images/white.png')
        Cards[CardschosenIDs[1]].setAttribute('src', 'images/white.png')
        Cards[CardschosenIDs[0]].removeEventListener('click', Flipcard)
        Cards[CardschosenIDs[1]].removeEventListener('click', Flipcard)
        Cardswon.push(Cardschosen)
    }

    else{
        alert('Oops!')
        Cards[CardschosenIDs[0]].setAttribute('src', 'images/blank.png')
        Cards[CardschosenIDs[1]].setAttribute('src', 'images/blank.png')
    }

    resultDisplay.innerHTML = Cardswon.length

    Cardschosen = []
    CardschosenIDs = []

    if (Cardswon.length = (cardarray.length / 2)) {
        resultDisplay.innerHTML = 'You Win!'
    }
}

function Flipcard() {
    const cardId = this.getAttribute('data-id')
    Cardschosen.push( cardarray[cardId].name)
    CardschosenIDs.push(cardId)
    this.setAttribute('src', cardarray[cardId].img)
    if (Cardschosen.length === 2) {
        setTimeout(checkmatch, 500)
    }
}