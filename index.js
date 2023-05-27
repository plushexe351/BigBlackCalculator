const light_theme = document.getElementById('toggle')
const calcScreen = document.querySelector('.calculator-screen');
const equalsBtn = document.querySelector('.equals');
const sum = document.querySelector('.add');
const buttons = document.querySelectorAll('button');
const clearAllBtn = document.querySelector('.clearAll');
let operand = '0';
let result = '';
let array = [0, 0];
let i = 0;
let currentMode;
let clickCount = 0;
let clickPermission = true;

light_theme.onclick = function () {
    document.body.classList.toggle("light_theme");
}

buttons.forEach(button => {
    button.addEventListener('click', () => {

        if (!(button.classList.contains('operator'))) {
            calcScreen.textContent == '0' ? calcScreen.textContent = '' : null;
            calcScreen.textContent += button.innerText;
            operand += button.textContent;
            clickPermission = true;
        }

        else if (button.classList.contains('operator') && button.textContent != "=" && clickPermission == true) {
            if (i % 2 != 0) {
                equalsBtn.click();
                clickPermission = false;
            }
            calcScreen.textContent += button.textContent;

            array[i++] = parseFloat(operand);

            operand = '0';
            currentMode = button.getAttribute('class').split(' ')[1];
            console.log(currentMode);
        }

    })
});

clearAllBtn.addEventListener('click', () => {
    calcScreen.textContent = '0';
    array = [0, 0];
    i = 0;
    operand = '0';
})

equalsBtn.addEventListener('click', () => {
    if (i != 0)
        array[i++] = parseFloat(operand);

    if (currentMode == 'add')
        result = array.reduce((a, b) => {
            return a + b;
        })

    else if (currentMode == 'substraction')
        result = array.reduce((a, b) => {
            return a - b;
        })

    else if (currentMode == 'multiplication') {
        result = array.reduce((a, b) => {
            return a * b;

        })
    }

    else if (currentMode == 'division')
        result = array.reduce((a, b) => {
            return a / b;
        })

    else if (currentMode == 'modulus')
        result = array.reduce((a, b) => {
            return a % b;
        })

    if (i != 0) {
        calcScreen.textContent = result;
        console.log(result);
        operand = result;
        array = [0, 0];
        i = 0;
        clickPermission = true;
    }
    else calcScreen.textContent = operand;

})