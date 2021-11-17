const colorList = ['green', 'blue', '#8B008B', 'gray', 'yellow', 'rgb(200,45,0)']

var button = document.getElementById('cor_botao')
var input = document.getElementById('input_color')
var span = document.getElementById('text_color')

function numeroRandomico(){
    return Math.floor(Math.random()*colorList.length)
}

function aoClicar(){
    
    var color

    if(input.value){
        color = input.value

    }else {
        var rand = numeroRandomico()
        color = colorList[rand]
    }

    document.body.style.backgroundColor = color
    span.textContent = color
}
button.addEventListener('click', aoClicar)