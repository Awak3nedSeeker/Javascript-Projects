const Computerchoice = document.getElementById('computerchoice')
const Userchoice = document.getElementById('userchoice')
const Result = document.getElementById('result')
const possiblechoices = document.querySelectorAll('button')
let userchoice
let computerchoice
let result

possiblechoices.forEach(possiblechoices => possiblechoices.addEventListener('click', (e) => {
    userchoice = e.target.id 
    Userchoice.innerHTML = userchoice
    Generatecomputerchoice()
    Getresults()
}))

function Generatecomputerchoice(){
    const randomnumber = Math.floor(Math.random() * 3) + 1
    
    switch (randomnumber) {
        case 1:
            computerchoice = 'Rock'
            break;
        case 2:
            computerchoice = 'Paper'
            break;
        case 3:
            computerchoice = 'Scissors'
            break;
        default:
            break;
    }
    Computerchoice.innerHTML = computerchoice
}

function Getresults() 
{
    if (computerchoice === userchoice) {
        result = 'Its a Draw!'
    }
    if (computerchoice === 'Rock' && userchoice === 'Paper') {
        result = 'You Win!'
    }
    if (computerchoice === 'Rock' && userchoice === 'Scissors') {
        result = 'You Lose!'
    }
    if (computerchoice === 'Paper' && userchoice === 'Rock') {
        result = 'You Lose!'
    }
    if (computerchoice === 'Paper' && userchoice === 'Scissors') {
        result = 'You Win!'
    }
    if (computerchoice === 'Scissors' && userchoice === 'Paper') {
        result = 'You Lose!'
    }
    if (computerchoice === 'Scissors' && userchoice === 'Rock') {
        result = 'You Win!'
    }

    Result.innerHTML = result
}