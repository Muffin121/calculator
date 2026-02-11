import * as selector from "./selectors.js";

let shouldClearOnNumber = false;
export function actionNumbersButtons(){
    const numberButtons = [
        selector.numberZero,
        selector.numberOne,
        selector.numberTwo,
        selector.numberThree,
        selector.numberFour,
        selector.numberFive,
        selector.numberSix,
        selector.numberSeven,
        selector.numberEight,
        selector.numberNine,

        selector.symbolDot,
        selector.buttonLeftBracket,
        selector.buttonRightBracket
    ];

    numberButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const digit = e.currentTarget.querySelector('span')?.textContent.trim() || '';

            if (shouldClearOnNumber) {
                selector.outputText.value = '';
                shouldClearOnNumber = false;
            }

            var num = selector.outputText.value + digit;
            selector.outputText.value = num;
            sessionStorage.setItem('firstNum', num);
            
        });
        
    });
    
}

export  function actionSymbolButtons() {
    const operators = [
        selector.symbolPlus,
        selector.symbolMinus,
        selector.symbolMultiplication,
        selector.symbolDivision
    ];

     operators.forEach(operatorButton => {
        operatorButton.addEventListener('click', (e) => {
            const symbol = e.currentTarget.querySelector('span')?.textContent.trim() || '';
             if (selector.outputText.value !== '') {
                const firstNum = selector.outputText.value; 
                sessionStorage.setItem('secondNumber', firstNum); 
                
            }
            selector.outputText.value = symbol;        
            shouldClearOnNumber = true;  
            sessionStorage.setItem('symbol', symbol);
            
        });
    });
    
}

export function mathFunctions(){
    const btnMathFunctions = [
        selector.buttonPow, 
        selector.buttonPowB, 
        selector.buttonModule, 
        selector.buttonSqrt, 
        selector.buttonSqrtN, 
        selector.buttonPiSymbol, 
        selector.buttonSin, 
        selector.buttonCos, 
        selector.buttonTan
    ]

    btnMathFunctions.forEach(btn =>{
        btn.addEventListener('click', (e) => {
            console.log('click')
            const mathSymbolFun = e.currentTarget.querySelector('span')?.textContent.trim() || '';
            
            //outputText.value = `функция выбрана ${mathSymbolFun}`;
             if (selector.outputText.value !== '') {
                const firstNum = selector.outputText.value; 
                sessionStorage.setItem('secondNumber', firstNum);                 
            }
            
            selector.outputText.value = mathSymbolFun;        
            shouldClearOnNumber = true;  
            sessionStorage.setItem('symbol', mathSymbolFun);
        })
    })
}

selector.symbolAns.addEventListener('click', (e) => {
    selector.outputText.value = localStorage.getItem('res', 1);
})

selector.buttonDeleteAll.addEventListener('click',() =>{
    selector.outputText.value = "";
    sessionStorage.removeItem('firstNum', 1);
    sessionStorage.removeItem('secondNumber', 1);
    sessionStorage.removeItem('symbol', 1);
})

export function result(number){
    selector.buttonArrowConfirmation.addEventListener('click', (e) => {
        const firstNum = Number(sessionStorage.getItem('firstNum', 1));
        const secondNum = Number(sessionStorage.getItem('secondNumber', 1));
        const operator = sessionStorage.getItem('symbol',1);
        let result = 0;
        switch (operator){
            case '-':    
               result =  secondNum - firstNum;
               localStorage.setItem('res', result)
            break;
            case '+':    
               result =  secondNum + firstNum;
               localStorage.setItem('res', result)
            break;
            case '/':    
               result =  secondNum / firstNum;
               localStorage.setItem('res', result)
            break;
            case '*':    
               result =  secondNum * firstNum;
               localStorage.setItem('res', result)
            break;

            case 'a2':
                result = Math.pow(firstNum, 2);
                localStorage.setItem('res', result)
            break;
            case 'ab':
                console.log(`click -> ${number}`);
                result = Math.pow(firstNum, secondNum);
                localStorage.setItem('res', result)
            break; 

            case 'cos':    
               result =  Math.cos(number);
               localStorage.setItem('res', result)
            break;
            case 'sin':    
               result =  Math.sin(number);
               localStorage.setItem('res', result)
            break;
            case 'tan':  
            console.log(`click -> ${number}`)  
               result =  Math.tan(number);
               localStorage.setItem('res', result)
            break;
        }
        selector.outputText.value = result;
        
    })
    
}