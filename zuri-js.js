let num1 = parseInt(window.prompt('Enter first number'));
let num2 = parseInt(window.prompt('Enter second number'));
let calc = window.prompt('Which operation will you be performing (+, -, *, /)' );

if (calc == '*'){
    alert(num1 * num2)} 

else if (calc == '/'){
    alert(num1 / num2)}

else if (calc == '-'){
    alert(num1 - num2)
}

else if (calc == '+'){
    alert(num1 + num2)
}

else{
    alert('Invalid input, refresh and try again')
}

