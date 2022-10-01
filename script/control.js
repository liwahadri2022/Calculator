//input number
const number = document.getElementById('number');
//button interact for 'Caluclate'
const btnDo = document.getElementById('C');
//button interact for 'Remove'
const btnReset = document.getElementById('R');
//getX value
const x = document.getElementById('X');
//getY value
const y = document.getElementById('Y');
//radio interact for 'div'
const div = document.getElementById('div');
//radio interact for 'div'
const somme = document.getElementById('somme');
//radio interact for 'somme'
const mod = document.getElementById('mod');
//radio interact for 'mod'
const multip = document.getElementById('multip');
//radio interact for 'multip'


btnDo.addEventListener("click",func_do);
btnReset.addEventListener("click",func_reset);



function func_do() {
    if(somme.checked || div.checked || mod.checked || multip.checked) {
        if (x.value !== '' && y.value !== '') {
            number.classList.remove('null')
            number.classList.add('noanimation')
        
            calculate(x.value,y.value);
        }
    }
}

function func_reset() {
    number.classList.remove('noanimation')
    number.classList.add('null')
    number.textContent = '?'
    x.value = ''
    y.value = ''
}

function calculate(a,b) {
    somme.checked==true? number.textContent = parseInt(a) + parseInt(b) : false
    div.checked==true? number.textContent = parseInt(a) / parseInt(b) : false
    multip.checked==true? number.textContent = parseInt(a) * parseInt(b) : false
    mod.checked==true? number.textContent = parseInt(a) % parseInt(b) : false


}