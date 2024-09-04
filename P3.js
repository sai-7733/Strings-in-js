// Function to perform arithmetic operations
function performArithmeticOperation(num1, num2, operator) {
    let result=0;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return 'Error: Division by zero is not allowed.';
            }
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            return 'Error: Invalid operator. Please use +, -, *, /, or %.';
    }

    return `The result of ${num1} ${operator} ${num2} is ${result}.`;
}
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const operator = prompt("Enter the operator (+, -, *, /, %):");
if (isNaN(num1) || isNaN(num2)) {
    alert('Error: Please enter valid numbers.');
} else {
    const result = performArithmeticOperation(num1, num2, operator);
    alert(result);
}
