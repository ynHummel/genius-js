let order = [];
let clikedOrder = [];
let score = 0;

const green = document.querySelector('.green');  // 0 -verde
const red = document.querySelector('.red');      // 1 - vermelho
const yellow = document.querySelector('.yellow');// 2 - amarelo
const blue = document.querySelector('.blue');    // 3 - azul

let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}

let shuffleOrder = () => {
    order[order.length] =  Math.floor(Math.random()*4);
    console.log(order);
    clikedOrder = [];
}

let sequence = () =>{
    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        console.log(elementColor);
        blink(elementColor, Number(i)+1);
    }
}

let blink = (elementColor,number) => {
    number = number*300;
    setTimeout(() => {
        elementColor.classList.add('selected');
    }, number);

    setTimeout(() => {
        elementColor.classList.remove('selected');
    }, number + 150);
}

let click = (color) => {
    clikedOrder[clikedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 100);
}

let checkOrder = () => {
    for(let i in clikedOrder) {
        if(clikedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clikedOrder.length == order.length) {
        alert(`Pontuação ${score}\n Você acertou! para o próximo nível`);
        nextLevel();
    }
}

let gameOver = () => {
    alert(`Game Over! pontuação: ${score}.`);
    order = [];
    clikedOrder = [];
    playGame();
}

let nextLevel = () => {
    score++;
    shuffleOrder();
    sequence();
}

let playGame = () => {
    alert('Bem vindo ao Genius!');
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();


