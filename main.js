console.log('hello world')

const container = document.getElementById('container_div');
const gridButton = document.getElementById('choice');

let newDiv;
let userSelection;


function createGrid(number){
    let numSquare = number * number;
    console.log(number)
    console.log(numSquare)
    for(let i = 0; i < numSquare; i++){
        newDiv = document.createElement('div');
        newDiv.className = 'new-div'
        newDiv.id = 'newDiv'
        container.appendChild(newDiv)
    }
    container.style.setProperty('--grid-cols', number);
    container.style.setProperty('--grid-rows', number);
    
    const gridDiv = document.querySelectorAll('#newDiv');
    gridDiv.forEach(div =>{
    div.addEventListener('mouseover', e => {
    div.style.backgroundColor = 'black';
    })
})
}
let canceled;

function changeColorBlack(){
    const gridDiv = document.querySelectorAll('#newDiv');
    gridDiv.forEach(div =>{
    div.addEventListener('mouseover', e => {
    div.style.backgroundColor = 'black';
    })
})
}

function changeColorBlue(){
    const gridDiv = document.querySelectorAll('#newDiv');
    gridDiv.forEach(div =>{
    div.addEventListener('mouseover', e => {
    div.style.backgroundColor = 'blue';
    })
})
}
function changeColorRed(){
    const gridDiv = document.querySelectorAll('#newDiv');
    gridDiv.forEach(div =>{
    div.addEventListener('mouseover', e => {
    div.style.backgroundColor = 'red';
    })
})
}

function changeColorPurple(){
    const gridDiv = document.querySelectorAll('#newDiv');
    gridDiv.forEach(div =>{
    div.addEventListener('mouseover', e => {
    div.style.backgroundColor = 'purple';
    })
})
}

function changeColorYellow(){
    const gridDiv = document.querySelectorAll('#newDiv');
    gridDiv.forEach(div =>{
    div.addEventListener('mouseover', e => {
    div.style.backgroundColor = 'yellow';
    })
})
}

function changeColorOrange(){
    const gridDiv = document.querySelectorAll('#newDiv');
    gridDiv.forEach(div =>{
    div.addEventListener('mouseover', e => {
    div.style.backgroundColor = 'orange';
    })
})
}

function changeColorPink(){
    const gridDiv = document.querySelectorAll('#newDiv');
    gridDiv.forEach(div =>{
    div.addEventListener('mouseover', e => {
    div.style.backgroundColor = 'pink';
    })
})
}

function eraser(){
    const gridDiv = document.querySelectorAll('#newDiv');
    gridDiv.forEach(div =>{
    div.addEventListener('mouseover', e => {
    div.style.backgroundColor = 'white';
    })
})
}


function userChoice(){
    let validInput = false;
    while(validInput == false){
        userSelection = prompt('How wide would you like your canvas?');
        if(userSelection === null){
            return
        }
        else if(isNaN(userSelection)){
            alert(`'${userSelection}' is not a number. please select a number from 1-18`)
            console.log('not a number');
            continue
        }
        else if(userSelection < 1){
            console.log('too small');
            alert(`'${userSelection}' is too small. please select a number from 1-18`)
            continue
        }
        else if(userSelection > 18){
            console.log('too big')
            alert(`${userSelection} is too big. please select a number from 1-18`)
            continue
        }
        else {
            validInput == true;
            console.log(userSelection);
            gridButton.remove();
            createGrid(userSelection);
            return
        }
    }
}


