console.log('hello world')

const container = document.getElementById('container_div');

let newDiv;
let userSelection;


function createGrid(div){
    for(let i = 0; i < div; i++){
        newDiv = document.createElement('div');
        newDiv.className = 'new-div'
        newDiv.id = 'newDiv'
        container.appendChild(newDiv)
    }
}
createGrid(256);

const gridDiv = document.querySelectorAll('#newDiv');
gridDiv.forEach(div =>{
    div.addEventListener('mouseover', e => {
    div.style.backgroundColor = 'blue'
    })
})

function userChoice(){
    let validInput = false;
    while(validInput == false){
        userSelection = prompt('How wide would you like your canvas?');
        if(isNaN(userSelection)){
            console.log('not a number');
            continue
        }
        else if(userSelection > 100){
            console.log('too big')
            continue
        }
        else {
            console.log(userSelection)
            changeGrid(userSelection)
        }
    }
}

function changeGrid(){
    
}


