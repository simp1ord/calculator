const add = (addNumOne, addNumTwo) => {
    let sum = addNumOne + addNumTwo;
    alert(sum);
};



const subtract = (subNumOne, subNumTwo) => {
    let remainder = subNumOne - subNumTwo;
    alert(remainder);
}



const multiply = (multNumOne, multNumTwo) => {
    let product = multNumOne * multNumTwo;
    alert(product);
}



const divide = (divNumOne, divNumTwo) => {
    let dividend = divNumOne / divNumTwo;
    alert(dividend);
}



const operate = () => {
    let firstNum = parseInt(prompt("Number 1?", ""));
    let calculate = prompt("operator?", "");
    let secondNum = parseInt(prompt("Number 2?", ""));
        firstNum === NaN || secondNum === NaN ? alert('number please!')
            :   calculate === '+' ? add(firstNum, secondNum) 
            :   calculate === '-' ? subtract(firstNum, secondNum) 
            :   calculate === '*' ? multiply(firstNum, secondNum) 
            :   calculate === '/' ? divide(firstNum, secondNum) 
            :   alert('operator please!');
}

//operate();