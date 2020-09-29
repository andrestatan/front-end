document.getElementById('color').addEventListener('input', getColor)

function getColor(){
let col = document.getElementById('color').value;

document.getElementById('visualizar').style.background = col;
document.getElementById('visualizar').innerHTML= col;
}