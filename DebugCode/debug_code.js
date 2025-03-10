function performOperation(){
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    if (!isNaN(num1) && !isNaN(num2)){
        let result = multiply(num1, num2);
        let result2 = add(num1, num2);
        let result3 = sub(num1, num2);
        let result4 = div(num1,num1);
        displayResult(result);
        displayResult(result2);
        displayResult(result3);
        displayResult(result4);
    }else{
        displayResult('Please enter valid numbers');
    }
}

function multiply(a,b){
    debugger;
    return a*b;
}
function sub(a,b){
    debugger;
    return a-b;
}
function add(a,b){
    debugger;
    return a+b;
}
function div(a,b){
    debugger;
    return a/b;
}
function displayResult(result){
    
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result of is ${result}`;
}