const containerContainers = document.getElementById('container-containers')
const containerSquares = document.querySelectorAll('#container-squares')
const squares = document.querySelectorAll('#square')
const clearBtn = document.getElementById('clear-btn')

for (let square of squares){
    let click = false;
    if(click == false){
        square.addEventListener('click', () =>{
            square.classList.toggle('black')
        })
    }else if(click == true){
        square.addEventListener('click', () =>{
            square.classList.toggle('white')
        })
    }

    function borrar(){
        square.classList.remove('black');
    }

    clearBtn.addEventListener('click', ()=>{
        borrar();
    })
}

