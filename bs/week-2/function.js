function calculateSum() {

    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;

    number1 = Number(number1);
    number2 = Number(number2);

    let sum = number1 + number2;

    document.getElementById("result").innerHTML = "Result: " + sum;
}