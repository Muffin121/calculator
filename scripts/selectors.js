 export const selectorsContainers = {
    mainContainer: '[data-js-container]',
    resetButtons: '[data-js-reset-buttons]',
    buttonsContainer: '[data-js-conrainer-buttons-action]',
    specialCharacters: '[data-js-special-characters]',
    gridContainer: '[data-js-grid-container]',
    gridContainerNumbers: '[data-js-grid-container-numbers]',
    gridContainerAdditionally: '[data-js-grid-container-additionally]',
}

export const selectorsGridContainer = {
    buttonPow: '[data-js-button-pow]',
    buttonPowB: '[data-js-button-pow-b]',
    buttonModule: '[data-js-button-module]',
    buttonSqrt: '[data-js-button-sqrt]',
    buttonSqrtN: '[data-js-button-sqrt-n]',
    buttonPiSymbol: '[data-js-button-pi-symbol]',
    buttonSin: '[data-js-button-sin]',
    buttonCos: '[data-js-button-cos]',
    buttonTan: '[data-js-button-tan]',
    buttonLeftBracket: '[data-js-button-left-bracket]',
    buttonRightBracket: '[data-js-button-right-bracket]',
    buttonComma: '[data-js-button-comma]'
}

export const selectorsGridContainerNumbers = {
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

export const selectorsGridContainerAdditionally = {
    buttonProccent: '[data-js-button-proccent]',
    buttonFraction: '[data-js-button-fraction]',
    buttonArrowLeft: '[data-js-button-arrow-left]',
    buttonArrowRight: '[data-js-button-arrow-right]',
    buttonDeleteSymbol: '[data-js-button-delete-symbol]',
    buttonArrowConfirmation: '[data-js-button-arrow-confirmation]',
}

//поле для ввода и вывода символов
export let outputText = document.querySelector('[data-js-output-text]');
export let buttonDeleteAll = document?.querySelector('[data-js-button-delete]');

//все контейнеры
export const mainContainer = document?.querySelector(selectorsContainers.mainContainer);
export const resetButtons = document?.querySelector(selectorsContainers.resetButtons);
export const buttonsContainer = document?.querySelector(selectorsContainers.buttonsContainer);
export const specialCharacters = document?.querySelector(selectorsContainers.specialCharacters);
export const gridContainer = document?.querySelector(selectorsContainers.gridContainer);
export const gridContainerNumbers = document?.querySelector(selectorsContainers.gridContainerNumbers);
export const gridContainerAdditionally = document?.querySelector(selectorsContainers.gridContainerAdditionally);

//все кнопки gridContainer`a
export const buttonPow = gridContainer?.querySelector(selectorsGridContainer.buttonPow);
export const buttonPowB = gridContainer?.querySelector(selectorsGridContainer.buttonPowB);
export const buttonModule = gridContainer?.querySelector(selectorsGridContainer.buttonModule);
export const buttonSqrt = gridContainer?.querySelector(selectorsGridContainer.buttonSqrt);
export const buttonSqrtN = gridContainer?.querySelector(selectorsGridContainer.buttonSqrtN);
export const buttonPiSymbol = gridContainer?.querySelector(selectorsGridContainer.buttonPiSymbol);
export const buttonSin = gridContainer?.querySelector(selectorsGridContainer.buttonSin);
export const buttonCos = gridContainer?.querySelector(selectorsGridContainer.buttonCos);
export const buttonTan = gridContainer?.querySelector(selectorsGridContainer.buttonTan);
export const buttonLeftBracket = gridContainer?.querySelector(selectorsGridContainer.buttonLeftBracket);
export const buttonRightBracket = gridContainer?.querySelector(selectorsGridContainer.buttonRightBracket);
export const buttonComma = gridContainer?.querySelector(selectorsGridContainer.buttonComma);

//все кнопки GridContainerNumbers
export const numberZero = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.numberZero);
export const numberOne = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.numberOne);
export const numberTwo = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.numberTwo);
export const numberThree = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.numberThree);
export const numberFour = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.numberFour);
export const numberFive = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.numberFive);
export const numberSix = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.numberSix);
export const numberSeven = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.numberSeven);
export const numberEight = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.numberEight);
export const numberNine = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.numberNine);
export const symbolDivision = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.symbolDivision);
export const symbolMultiplication = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.symbolMultiplication);
export const symbolMinus = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.symbolMinus);
export const symbolDot = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.symbolDot);
export const symbolAns = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.symbolAns);
export const symbolPlus = gridContainerNumbers?.querySelector(selectorsGridContainerNumbers.symbolPlus);

//все кнопки дополнительных функций
export const buttonProcent = gridContainerAdditionally?.querySelector(selectorsGridContainerAdditionally.buttonProccent);
export const buttonFraction = gridContainerAdditionally?.querySelector(selectorsGridContainerAdditionally.buttonFraction);
export const buttonArrowLeft = gridContainerAdditionally?.querySelector(selectorsGridContainerAdditionally.buttonArrowLeft);
export const buttonDeleteSymbol = gridContainerAdditionally?.querySelector(selectorsGridContainerAdditionally.buttonDeleteSymbol);
export const buttonArrowConfirmation = gridContainerAdditionally?.querySelector(selectorsGridContainerAdditionally.buttonArrowConfirmation);
