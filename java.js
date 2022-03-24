let operation = '';
let numberOption = '';
let operationNumber = [];
let operationNumberTwo = [];
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

const clearCalc = () => {
    numberDisplay.innerHTML = '';
    answerDisplay.innerHTML = '';
    operation = '';
    operationNumber = [];
    operationNumberTwo = [];
    console.log(operationNumber);
}

const periodAdder = () => {
    if (operationNumber.find(numb => numb === '.')) {
        console.log(operationNumber);
    }else {
        operationNumber.push('.');
        const miniNumber = document.createElement('div');
        miniNumber.textContent = '.';
        numberDisplay.appendChild(miniNumber);  
        console.log(operationNumber); 
    }
}

clearButton.addEventListener('click', () => {
    clearCalc();
});

periodButton.addEventListener('click', () => {
    periodAdder();
});

addButton.addEventListener('click', () => {
    let operation = '+';
    let arrayToString = operationNumber.toString().replace(/[,]/g,'');
    let NumOne = parseFloat(arrayToString);
    operationNumber = [];
    operationNumberTwo.push(NumOne);
    numberControl(operation, operationNumberTwo);
});
subtractButton.addEventListener('click', () => {
    let operation = '-';
    let arrayToString = operationNumber.toString().replace(/[,]/g,'');
    let NumOne = parseFloat(arrayToString);
    operationNumber = [];
    operationNumberTwo.push(NumOne);
    numberControl(operation, operationNumberTwo);
});
multiplyButton.addEventListener('click', () => {
    let operation = '*';
    let arrayToString = operationNumber.toString().replace(/[,]/g,'');
    let NumOne = parseFloat(arrayToString);
    operationNumber = [];
    operationNumberTwo.push(NumOne);
    numberControl(operation, operationNumberTwo);
});
divideButton.addEventListener('click', () => {
    let operation = '/';
    let arrayToString = operationNumber.toString().replace(/[,]/g,'');
    let NumOne = parseFloat(arrayToString);
    operationNumber = [];
    operationNumberTwo.push(NumOne);
    numberControl(operation, operationNumberTwo);
});
equalButton.addEventListener('click', () => {
    numberControl(operation, operationNumberTwo);
    numberDisplay.innerHTML = '';
});

const numberControl = (operationInput, numberArray) => {
    if (numberArray.length === 2){
        if(operationInput === '+') {
            let wholeNum = numberArray.reduce((a,b) => a+b, 0)
            answerDisplay.innerText = `${wholeNum}`;
            operationNumberTwo = [];
            numberDisplay.innerHTML = '';
        }else if (operationInput === '-'){
            let wholeNum = numberArray.reduce((a,b) => a-b, 0)
            answerDisplay.innerText = `${wholeNum}`;
            operationNumberTwo = [];
            numberDisplay.innerHTML = '';
        }else if (operationInput === '*'){
            let wholeNum = numberArray.reduce((a,b) => a*b, 1)
            answerDisplay.innerText = `${wholeNum}`;
           operationNumberTwo = [];
           numberDisplay.innerHTML = '';
        }else if(operationInput === '/') {
            let wholeNum = numberArray.reduce((a,b) => a/b, 0)
            answerDisplay.innerText = `${wholeNum}`;
            operationNumberTwo = [];
            numberDisplay.innerHTML = '';
        }
    }
};

const add = (arrayNumber) => {
    let sum = addNumOne + addNumTwo;
    answerDisplay.textContent = `${sum}`;
    return(sum);
};
const subtract = (subNumOne,subNumTwo) => {
    let remainder = subNumOne - subNumTwo;
    answerDisplay.textContent = `${remainder}`;
    return(remainder);
};
const multiply = (multNumOne, multNumTwo) => {
    let product = multNumOne * multNumTwo;
    answerDisplay.textContent = `${product}`;
    return(product);
};
const divide = (divNumOne, divNumTwo) => {
    let dividend = divNumOne / divNumTwo;
    answerDisplay.textContent = `${dividend}`;
    return(dividend);
};



const operate = (operator, numOne, prevInput) => {
    operator === '+' ? add(numOne, prevInput)
    :   operator === '-' ? subtract(numOne, prevInput)
    :   operator === '*' ? multiply(numOne, prevInput)
    :   operator === '/' ? divide(numOne, prevInput)
    :   numberDisplay.textContent = 'ERROR';
}

const inputDisplay = (inputButton) => {  
    inputButton === 10 ? console.log('filler') 
    :   inputButton === 11 ? console.log('filler')
    :   inputButton === 12 ? (miniNumber = document.createElement('div'), miniNumber.textContent = '+', 
                                numberDisplay.appendChild(miniNumber))
    :   inputButton === 13 ? (miniNumber = document.createElement('div'), miniNumber.textContent = '-', 
                                numberDisplay.appendChild(miniNumber)) 
    :   inputButton === 14 ? (miniNumber = document.createElement('div'), miniNumber.textContent = '*', 
                                numberDisplay.appendChild(miniNumber)) 
    :   inputButton === 15 ? (miniNumber = document.createElement('div'), miniNumber.textContent = '/', 
                                numberDisplay.appendChild(miniNumber))
    :   inputButton === 16 ? console.log('filler')
    :   (miniNumber = document.createElement('div'), miniNumber.textContent = `${inputButton}`, 
             numberDisplay.appendChild(miniNumber));
};

for (let input = 0; input < allButtons.length; input++){ 
    allButtons[input].addEventListener('click', () => setTimeout(() =>  {
        allButtons[input].style.backgroundColor = '#adb3b3';
        inputDisplay(input);
        input <= 9 ? operationNumber.push(input) : console.log('nothing');
        console.log(operationNumber);
    }));    
    
    allButtons[input].addEventListener('click', () => setTimeout(() => {
        allButtons[input].style.backgroundColor = '#f0f5f5';
    }, 100));
};