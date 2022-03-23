
const clearButton = document.getElementById('clear');
const periodButton = document.getElementById('answer');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const equalButton = document.getElementById('equal');
const allButtons = document.querySelectorAll('button');
const numberDisplay = document.getElementById('numberDisplay');
const answerDisplay = document.getElementById('answerDisplay');

//const variableStorage = {
 //   firstNumber: '',
 //   operator: '',
 //   secondNumber: ''
//};

//const operationSelector = (inputNumber) => {
//    inputNumber === '+' ? add(): hi;
//};

const solutionDisplay = (prevInput) => {
    answerDisplay.textContent = `${prevInput}`;
}

const inputDisplay = (inputButton) => {  
    inputButton === 10 ? console.log('filler') 
    :   inputButton === 11 ? console.log('filler')
    :   inputButton === 12 ? (numberDisplay.textContent = '+', display = '+')
    :   inputButton === 13 ? (numberDisplay.textContent = '-', display = '-')
    :   inputButton === 14 ? (numberDisplay.textContent = '*', display = '*')
    :   inputButton === 15 ? (numberDisplay.textContent = '/', display = '/')
    :   inputButton === 16 ? console.log('filler')
    :   (numberDisplay.textContent = `${inputButton}`, display = inputButton);
return(inputButton);
};

for (let input = 0; input < allButtons.length; input++){ 
    allButtons[input].addEventListener('click', () => setTimeout(() =>  {
        allButtons[input].style.backgroundColor = '#adb3b3';
        //input < 10 ? inputNumber = input : console.log('filler');
        let upperDisplay = inputDisplay(input);
        solutionDisplay(upperDisplay);
    }));    
    
    allButtons[input].addEventListener('click', () => setTimeout(() => {
        allButtons[input].style.backgroundColor = '#f0f5f5';
    }, 100));
};












const add = (addNumOne,addNumTwo) => {
    let sum = addNumOne + addNumTwo;
    return(sum);
};
const subtract = (subNumOne,subNumTwo) => {
    let remainder = subNumOne - subNumTwo;
    return(remainder);
};
const multiply = (multNumOne, multNumTwo) => {
    let product = multNumOne * multNumTwo;
    return(product);
};
const divide = (divNumOne, divNumTwo) => {
    let dividend = divNumOne / divNumTwo;
    return(dividend);
};



const operate = (operator, numOne, numTwo) => {
    operator === 12 ? add(numOne, numTwo)
    :   operator === 13 ? subtract(numOne, numTwo)
    :   operator === 14 ? multiply(numOne, numTwo)
    :   operator === 15 ? divide(numOne, numTwo)
    : undefined;
}

