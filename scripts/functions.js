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
            
        });
        
    });
    
}

export  function actionSymbolButtons() {
    const operators = [
        selector.symbolPlus,
        selector.symbolMinus,
        selector.symbolMultiplication,
        selector.symbolDivision,
        selector.buttonProcent
    ];

     operators.forEach(operatorButton => {
        operatorButton.addEventListener('click', (e) => {
            const symbol = e.currentTarget.querySelector('span')?.textContent.trim() || '';
            if (symbol === '-') {
                const currentValue = selector.outputText.value.trim();
              
                if (currentValue === '' || shouldClearOnNumber) {
                    selector.outputText.value = '-';
                    shouldClearOnNumber = false;          
                    sessionStorage.setItem('symbol', ''); 
                    return;                               
                } 
            }

            if (selector.outputText.value !== '' && selector.outputText.value !== '-') {

                sessionStorage.setItem('secondNumber', selector.outputText.value);
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
        selector.buttonSin, 
        selector.buttonCos, 
        selector.buttonTan
    ]

    btnMathFunctions.forEach(btn =>{
        btn.addEventListener('click', (e) => {
            
            const mathSymbolFun = e.currentTarget.querySelector('span')?.textContent.trim() || '';
            

             if (selector.outputText.value !== '') {
                const previousNum = selector.outputText.value; 
                sessionStorage.setItem('secondNumber', previousNum);                 
            }
            
            selector.outputText.value = mathSymbolFun;        
            shouldClearOnNumber = true;  
            sessionStorage.setItem('symbol', mathSymbolFun);
        })
    })
}

export function result(number){
    selector.buttonArrowConfirmation.addEventListener('click', (e) => {
        let currentNum = Number(selector.outputText.value) || 0;
        let previousNum = Number(sessionStorage.getItem('secondNumber')) || 0;
        const operator = sessionStorage.getItem('symbol',1);
        let result = currentNum;
        switch (operator){
            case '-':    
               result =  previousNum - currentNum;  
            break;
            case '+':    
               result =  previousNum + currentNum;
            break;
            case '/':    
            if(currentNum === 0){
                selector.outputText.value = "Ошибка";
                return;
            }
               result =  previousNum / currentNum; 
            break;
            case '*':    
               result =  previousNum * currentNum; 
            break;

            case 'a2':
                result = Math.pow(previousNum, 2);
               
            break;
            case 'ab':
                console.log(`click -> ${number}`);
                result = Math.pow(previousNum, currentNum);
            break; 
             case '|a|':
                result = Math.abs(previousNum)
            break; 
            case '√':
                if (previousNum === 0) {
                    selector.outputText.value = "Ошибка: корень из 0";
                    return;
                }
                result = Math.sqrt(previousNum)
            break; 
            case 'n^√':
                if (previousNum === 0) {
                    selector.outputText.value = "Ошибка: корень из 0";
                    return;
                }
                if (currentNum < 0 && previousNum % 2 === 0) {
                    selector.outputText.value = "Ошибка: корень чётной степени из отрицательного";
                    return;
                }
                result = Math.pow(previousNum, 1/currentNum)
            break; 
            case '%':    
               result =  previousNum / 100 * currentNum;
            break;
            case 'cos':    
               result =  Math.cos(previousNum);
            break;
            case 'sin':    
               result =  Math.sin(previousNum);
            break;
            case 'tan':  
               result =  Math.tan(previousNum);
            break;
             case '𝞹':    
               result =  Math.PI * previousNum;
            break;
        }
        selector.outputText.value = result;
        localStorage.setItem('res', result);
    })
    
}

selector.symbolAns.addEventListener('click', (e) => {
    selector.outputText.value = localStorage.getItem('res', 1);
})

selector.buttonDeleteAll.addEventListener('click',() =>{
    selector.outputText.value = "";
    sessionStorage.removeItem('secondNumber', 1);
    sessionStorage.removeItem('symbol', 1);
})

selector.buttonSqrt.addEventListener('click', (e)=>{
    const previousNum = selector.outputText.value; 
    sessionStorage.setItem('secondNumber', previousNum);  
    selector.outputText.value = '√';
    sessionStorage.setItem('symbol', '√');
})

selector.buttonPiSymbol.addEventListener('click', (e)=>{
    const previousNum = selector.outputText.value; 
    sessionStorage.setItem('secondNumber', previousNum);  
    selector.outputText.value = '𝞹';
    sessionStorage.setItem('symbol', '𝞹');
})

selector.buttonSqrtN.addEventListener('click', (e)=>{
    const currentValue = selector.outputText.value.trim() || '';

   if (currentValue !== '' && !isNaN(Number(currentValue))) {
        sessionStorage.setItem('secondNumber', currentValue);  
    } else if (currentValue === '') {
        sessionStorage.setItem('secondNumber', '0');
    }

    selector.outputText.value = 'n^√';
    shouldClearOnNumber = true;
    sessionStorage.setItem('symbol', 'n^√');  
})

selector.buttonDeleteSymbol.addEventListener('click', (e) => {
    selector.outputText.value = selector.outputText.value.slice(0, -1) 
})

selector.buttonArrowLeft.addEventListener('click', (e)=>{
    const input = selector.outputText;
    let value = input.value;
    let pos = input.selectionStart || 0;

    if (pos <= 0) return;
    input.value = value;
   
    input.setSelectionRange(pos - 1, pos - 1);
    input.focus();
    
})

selector.buttonArrowRight.addEventListener('click', (e) =>{
    const input = selector.outputText;
    let value = input.value;
    let pos = input.selectionStart || 0;

    if (pos <= 0) return;
    input.value = value;
   
    input.setSelectionRange(pos + 1, pos + 1);
    input.focus();
})