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

const numberStorage = {
    inputNumbers : [],
    operator : '',
    finalNumbers : [],
    answerNumber : [],
};
    
const clearCalc = () => {
    numberStorage.inputNumbers = [];
    numberStorage.operator = '';
    numberStorage.finalNumbers = [];
    numberStorage.answerNumber = [];
    answerDisplay.innerText = '';
    numberDisplay.innerText = '';
};

const periodAdder = () => {
    if(numberStorage.inputNumbers.find(characters => characters === '.')) {
    console.log('do nothing')
    } else{
        const miniNumberDisplay = document.createElement('div')
        miniNumberDisplay.innerText = `.`;
        numberDisplay.appendChild(miniNumberDisplay);
        numberStorage.inputNumbers.push('.');
    }
}


clearButton.addEventListener('click', () => {
    clearCalc()
});
periodButton.addEventListener('click', () => {
   periodAdder();
});
addButton.addEventListener('click', () => {
    if(numberStorage.answerNumber[0] != undefined){
        let bigNum = numberStorage.inputNumbers.toString().replace(/[,]/g, '');
        numberStorage.finalNumbers.push(bigNum);
        numberStorage.inputNumbers = [];
        let finalNumber = parseFloat(numberStorage.finalNumbers.toString());
        numberDisplay.innerText = '';
        add(finalNumber, numberStorage.answerNumber[0]);
    }else{
        numberStorage.operator = '+';
        let bigNum = numberStorage.inputNumbers.toString().replace(/[,]/g, '');
        numberStorage.finalNumbers.push(bigNum);
        numberStorage.inputNumbers = [];
        numberDisplay.innerText = '';
    }
});
subtractButton.addEventListener('click', () => {
    if(numberStorage.answerNumber[0] != undefined){
        let bigNum = numberStorage.inputNumbers.toString().replace(/[,]/g, '');
        numberStorage.finalNumbers.push(bigNum);
        numberStorage.inputNumbers = [];
        let finalNumber = parseFloat(numberStorage.finalNumbers.toString());
        numberDisplay.innerText = '';
        subtract(finalNumber, numberStorage.answerNumber[0]);
    } else{
    numberStorage.operator = '-';
    let bigNum = numberStorage.inputNumbers.toString().replace(/[,]/g, '');
    numberStorage.finalNumbers.push(bigNum);
    numberStorage.inputNumbers = [];
    numberDisplay.innerText = '';
    }
});
multiplyButton.addEventListener('click', () => {
    if(numberStorage.answerNumber[0] != undefined){
        let bigNum = numberStorage.inputNumbers.toString().replace(/[,]/g, '');
        numberStorage.finalNumbers.push(bigNum);
        numberStorage.inputNumbers = [];
        let finalNumber = parseFloat(numberStorage.finalNumbers.toString());
        numberDisplay.innerText = '';
        multiply(finalNumber, numberStorage.answerNumber[0]);
    } else{
    numberStorage.operator = '*';
    let bigNum = numberStorage.inputNumbers.toString().replace(/[,]/g, '');
    numberStorage.finalNumbers.push(bigNum);
    numberStorage.inputNumbers = [];
    numberDisplay.innerText = '';
    }
});
divideButton.addEventListener('click', () => {
    if(numberStorage.answerNumber[0] != undefined){
        let bigNum = numberStorage.inputNumbers.toString().replace(/[,]/g, '');
        numberStorage.finalNumbers.push(bigNum);
        numberStorage.inputNumbers = [];
        let finalNumber = parseFloat(numberStorage.finalNumbers.toString());
        numberDisplay.innerText = '';
        divide(finalNumber, numberStorage.answerNumber[0]);
    } else{
    numberStorage.operator = '/';
    let bigNum = numberStorage.inputNumbers.toString().replace(/[,]/g, '');
    numberStorage.finalNumbers.push(bigNum);
    numberStorage.inputNumbers = [];
    numberDisplay.innerText = '';
    }
});
equalButton.addEventListener('click', () => {
    if(numberStorage.answerNumber[0] != undefined){
        let finalNumOne = numberStorage.answerNumber[0]
        let finalNumTwo = parseFloat(numberStorage.inputNumbers.toString().replace(/[,]/g, ''));
        operate(numberStorage.operator, finalNumOne, finalNumTwo);
        numberStorage.inputNumbers = [];
        numberDisplay.innerText = '';
    } else{
    let finalNumOne = parseFloat(numberStorage.inputNumbers.toString().replace(/[,]/g, ''));
    let finalNumTwo = parseFloat(numberStorage.finalNumbers.toString());
    operate(numberStorage.operator, finalNumOne, finalNumTwo);
    numberStorage.inputNumbers = [];
    numberDisplay.innerText = '';
    }
}); 



const add = (numOne, numTwo) => {
    numberStorage.answerNumber = [];
    let sum = numTwo + numOne;
    answerDisplay.textContent = `${sum}`;
    numberStorage.finalNumbers = [];
    numberStorage.answerNumber.push(sum);
};
const subtract = (numOne, numTwo) => {
    numberStorage.answerNumber = [];
    let remainder = numTwo - numOne;
    answerDisplay.textContent = `${remainder}`;
    numberStorage.finalNumbers = [];
    numberStorage.answerNumber.push(remainder);
};
const multiply = (numOne, numTwo) => {
    numberStorage.answerNumber = [];
    let product = numTwo * numOne;
    answerDisplay.textContent = `${product}`;
    numberStorage.finalNumbers = [];
    numberStorage.answerNumber.push(product);
};
const divide = (numOne, numTwo) => {
    numberStorage.answerNumber = [];
    if(numOne === 0){
        alert('What Do you think you are doing? No dividing by 0!');
        document.location.reload(true);
    } else{
        let dividend = numTwo / numOne;
        answerDisplay.textContent = `${dividend}`;
        numberStorage.finalNumbers = [];
        numberStorage.answerNumber.push(dividend);
    }
    
};

const operate = (operator, numOne, numTwo) => {
    operator === '+' ? add(numOne, numTwo)
    :   operator === '-' ? subtract(numOne, numTwo)
    :   operator === '*' ? multiply(numOne, numTwo)
    :   operator === '/' ? divide(numOne, numTwo)
    :   numberDisplay.textContent = 'ERROR';
};

const inputDisplay = (input) => {
    const miniNumberDisplay = document.createElement('div')
    miniNumberDisplay.innerText = `${input}`;
    numberDisplay.appendChild(miniNumberDisplay);
    numberStorage.inputNumbers.push(input);
};


for (let input = 0; input < allButtons.length; input++){ 
    allButtons[input].addEventListener('click', () => setTimeout(() =>  {
        allButtons[input].style.backgroundColor = '#adb3b3';
        input < 10 ? inputDisplay(input) 
        : console.log('filer');
    }));    
    
    allButtons[input].addEventListener('click', () => setTimeout(() => {
        allButtons[input].style.backgroundColor = '#f0f5f5';
    }, 100));
};


//heheheha