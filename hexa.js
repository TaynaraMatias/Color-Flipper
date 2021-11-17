const colorListHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

var button = document.getElementById('cor_botao')

var span = document.getElementById('text_color')

function numeroRandomico(){
    return Math.floor(Math.random()*colorListHex.length)
}

function aoClicar(){
    
    var colorHex = '#'
    for (var i = 0; i<6; i++){
        colorHex += colorListHex[numeroRandomico()]
    }
    
    document.body.style.backgroundColor = colorHex
    span.textContent = colorHex
}
button.addEventListener('click', aoClicar)

