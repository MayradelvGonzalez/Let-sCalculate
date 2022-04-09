window.addEventListener('load' , ()=> { 
    const display = document.querySelector('.calculator-display');
    const KeypadButtons = document.getElementsByClassName('keypad-button');
   
    const keypadbuttonArray = Array.from(KeypadButtons);

    keypadbuttonArray.forEach( (button) => {
        button.addEventListener('click', () => {
        console.log(button.innerHTML);
        calculadora(button, display);
        
    })
})

});


function calculadora(button , display) {
    switch(button.innerHTML) {
        case 'C':
            borrar(display);
            break;

        case '=':
            calcular(display);
            break;
        default:
            actualizar(display, button);
            break;
    }
}

function calcular (display) {
   display.innerHTML = eval(display.innerHTML) /*caalcula las operacionioes*/

}

function actualizar(display, button) {
    if (display.innerHTML == 0) {
        display.innerHTML ='';
    }

    display.innerHTML += button.innerHTML;  /*cuuando escribba ppondraa unun nnumm  al  laado del otro*/
}

function borrar  (display) {
    display.innerHTML = 0;
}