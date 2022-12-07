console.log('hello world')

const container = document.getElementById('container_div');

let newDiv;

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


