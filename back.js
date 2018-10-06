var css = document.querySelector('h3');
var col1 = document.querySelector('.color1');
var col2 = document.querySelector('.color2');
var back = document.querySelector('body');

function setGrad(){
    back.style.background = "linear-gradient(to right, " 
                        + col1.value +  ", " 
                        + col2.value + ")";

    css.textContent = back.style.background + ";";
}

col1.addEventListener('input', setGrad);
col2.addEventListener('input',setGrad);