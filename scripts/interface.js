
document.addEventListener('DOMContentLoaded',()=>{
    let button = document.getElementById("restart")

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        
        square.addEventListener('click', handleClick)
    })

    button.addEventListener('click', restartGame)
})

function restartGame(){

    restart()
    
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        
        square.innerHTML = ``
    })
}


function handleClick(event) {
    console.log(event.target)

    let square = event.target
    let position = square.id

    if(handleMove(position)){
        setTimeout(()=> {
            alert("O Vencedor foi o jogador "+ (playerTime+1))
        }, 10)
        
    }
    updateSquare(position)
}

function updateSquare(position){
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`
}



