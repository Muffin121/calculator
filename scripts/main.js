selectorsContainers = {
    mainContainer: '[data-js-container]',
    resetButtons: '[data-js-reset-buttons]',
    buttonsContainer: '[data-js-conrainer-buttons-action]',
    specialCharacters: '[data-js-special-characters]',
    gridContainer: '[data-js-grid-container]',
    gridContainerNumbers: '[data-js-grid-container-numbers]',
    gridContainerAdditionally: '[data-js-grid-container-additionally]',
}

selectorsGridContainer = {
    buttonPow: '[data-js-button-pow]',
    buttonPowB: '[data-js-button-pow-b]',
    buttonModule: '[data-js-button-module]',
    buttonSqrt: '[data-js-button-sqrt]',
    buttonSqrtN: '[data-js-button-sqrt-n]',
    buttonPiSymbol: '[data-js-button-pi-symbol]',
    buttonSin: '[data-js-button-sin]',
    buttonCos: '[data-js-button-cos]',
    buttonTan: '[data-js-button-tan]',
    buttonLeftBlacket: '[data-js-button-left-blacket]',
    buttonRightBlacket: '[data-js-button-right-blacket]',
    buttonComma: '[data-js-button-comma]'
}

selectorsGridContainerNumbers = {
    numberZero: '[data-js-number-zero]',
    numberOne: '[data-js-number-one]',
    numberTwo: '[data-js-number-two]',
    numberThree: '[data-js-number-three]',
    numberFour: '[data-js-number-four]',
    numberFive: '[data-js-number-five]',
    numberSix: '[data-js-number-six]',
    numberSeven: '[data-js-number-seven]',
    numberEight: '[data-js-number-eight]',
    numberNine: '[data-js-number-nine]',

    symbolDivision: '[data-js-symbol-division]',
    symbolMultiplication: '[data-js-symbol-multiplication]',
    symbolMinus: '[data-js-symbol-minus]',
    symbolDot: '[data-js-symbol-dot]',
    symbolAns: '[data-js-symbol-ans]',
    symbolPlus: '[data-js-symbol-plus]',
}

selectorsGridContainerAdditionally = {
    buttonProccent: '[data-js-button-proccent]',
    buttonFraction: '[data-js-button-fraction]',
    buttonArrowLeft: '[data-js-button-arrow-left]',
    buttonArrowRight: '[data-js-button-arrow-right]',
    buttonDeleteSymbol: '[data-js-button-delete-symbol]',
    buttonArrowConfirmation: '[data-js-button-arrow-confirmation]',
}

//поле для ввода и вывода символов
let outputText = document.querySelector('[data-js-output-text]');
let buttonDeleteAll = document?.querySelector('[data-js-button-delete]');

//все контейнеры
const mainContainer = document?.querySelector(selectorsContainers.mainContainer);
const resetButtons = document?.querySelector(selectorsContainers.resetButtons);
const buttonsContainer = document?.querySelector(selectorsContainers.buttonsContainer);
const specialCharacters = document?.querySelector(selectorsContainers.specialCharacters);
const gridContainer = document?.querySelector(selectorsContainers.gridContainer);
const gridContainerNumbers = document?.querySelector(selectorsContainers.gridContainerNumbers);
const gridContainerAdditionally = document?.querySelector(selectorsContainers.gridContainerAdditionally);

//все кнопки gridContainer`a
const buttonPow = gridContainer?.querySelector(selectorsGridContainer.buttonPow);
const buttonPowB = gridContainer?.querySelector(selectorsGridContainer.buttonPowB);
const buttonModule = gridContainer?.querySelector(selectorsGridContainer.buttonModule);
const buttonSqrt = gridContainer?.querySelector(selectorsGridContainer.buttonSqrt);
const buttonSqrtN = gridContainer?.querySelector(selectorsGridContainer.buttonSqrtN);
const buttonPiSymbol = gridContainer?.querySelector(selectorsGridContainer.buttonPiSymbol);
const buttonSin = gridContainer?.querySelector(selectorsGridContainer.buttonSin);
const buttonCos = gridContainer?.querySelector(selectorsGridContainer.buttonCos);
const buttonTan = gridContainer?.querySelector(selectorsGridContainer.buttonTan);
const buttonLeftBlacket = gridContainer?.querySelector(selectorsGridContainer.buttonLeftBlacket);
const buttonRightBlacket = gridContainer?.querySelector(selectorsGridContainer.buttonRightBlacket);
const buttonComma = gridContainer?.querySelector(selectorsGridContainer.buttonComma);

//все кнопки GridContainerNumbers
const numberZero = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.numberZero);
const numberOne = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.numberOne);
const numberTwo = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.numberTwo);
const numberThree = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.numberThree);
const numberFour = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.numberFour);
const numberFive = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.numberFive);
const numberSix = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.numberSix);
const numberSeven = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.numberSeven);
const numberEight = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.numberEight);
const numberNine = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.numberNine);
const symbolDivision = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.symbolDivision);
const symbolMultiplication = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.symbolMultiplication);
const symbolMinus = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.symbolMinus);
const symbolDot = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.symbolDot);
const symbolAns = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.symbolAns);
const symbolPlus = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.symbolPlus);

//все кнопки дополнительных функций
const buttonProcent = gridContainerAdditionally?.querySelector(selectorsGridContainerAdditionally.buttonProccent);
const buttonFraction = gridContainerAdditionally?.querySelector(selectorsGridContainerAdditionally.buttonFraction);
const buttonArrowLeft = gridContainerAdditionally?.querySelector(selectorsGridContainerAdditionally.buttonArrowLeft);
const buttonDeleteSymbol = gridContainerAdditionally?.querySelector(selectorsGridContainerAdditionally.buttonDeleteSymbol);
const buttonArrowConfirmation = gridContainerAdditionally?.querySelector(selectorsGridContainerAdditionally.buttonArrowConfirmation);

let shouldClearOnNumber = false;
function actionNumbersButtons(){
    const numberButtons = [
        numberZero,
        numberOne,
        numberTwo,
        numberThree,
        numberFour,
        numberFive,
        numberSix,
        numberSeven,
        numberEight,
        numberNine
    ];

    numberButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const digit = e.currentTarget.querySelector('span')?.textContent.trim() || '';

            if (shouldClearOnNumber) {
                outputText.value = '';
                shouldClearOnNumber = false;
            }

            var num = outputText.value + digit;
            outputText.value = num;
            sessionStorage.setItem('firstNum', num);
            
        });
        
    });
    
}

 function actionSymbolButtons() {
    const operators = [
        symbolPlus,
        symbolMinus,
        symbolMultiplication,
        symbolDivision
    ];

     operators.forEach(operatorButton => {
        operatorButton.addEventListener('click', (e) => {
            const symbol = e.currentTarget.querySelector('span')?.textContent.trim() || '';
             if (outputText.value !== '') {
                const firstNum = outputText.value; 
                sessionStorage.setItem('secondNumber', firstNum); 
                console.log('Сохранено первое число:', firstNum);
            }
            outputText.value = symbol;        
            shouldClearOnNumber = true;  
            sessionStorage.setItem('symbol', symbol);
            
        });
    });
    
}

function mathFunctions(){
    const btnMathFunctions = [
        buttonPow, 
        buttonPowB, 
        buttonModule, 
        buttonSqrt, 
        buttonSqrtN, 
        buttonPiSymbol, 
        buttonSin, 
        buttonCos, 
        buttonTan
    ]

    btnMathFunctions.forEach(btn =>{
        btn.addEventListener('click', (e) => {
            console.log('click')
            const mathSymbolFun = e.currentTarget.querySelector('span')?.textContent.trim() || '';
            //outputText.value = `функция выбрана ${mathSymbolFun}`;
            sessionStorage.setItem('symbol', mathSymbolFun);
        })
    })
}

symbolAns.addEventListener('click', (e) => {
    outputText.value = localStorage.getItem('res', 1);
})

buttonDeleteAll.addEventListener('click',() =>{
    outputText.value = "";
})

function result(number){
    buttonArrowConfirmation.addEventListener('click', (e) => {
        const firstNum = Number(sessionStorage.getItem('firstNum', 1));
        const secondNum = Number(sessionStorage.getItem('secondNumber', 1));
        const operator = sessionStorage.getItem('symbol',1);
        let result = 0;
        switch (operator){
            case '-':    
               result =  secondNum - firstNum;
               localStorage.setItem('res', outputText.value)
            break;
            case '+':    
               result =  secondNum + firstNum;
               localStorage.setItem('res', outputText.value)
            break;
            case '/':    
               result =  secondNum / firstNum;
               localStorage.setItem('res', outputText.value)
            break;
            case '*':    
               result =  secondNum * firstNum;
               localStorage.setItem('res', outputText.value)
            break;
            case 'a2':
                result = Math.pow(firstNum, 2);
                localStorage.setItem('res', outputText.value)
            case 'cos':    
               result =  Math.cos(number);
               localStorage.setItem('res', outputText.value)
            break;
            case 'sin':    
               result =  Math.sin(number);
               localStorage.setItem('res', outputText.value)
            break;
        }
        outputText.value = result;
        
    })
    
}

actionNumbersButtons();
actionSymbolButtons();
mathFunctions();
result(sessionStorage.getItem('firstNum', 1));