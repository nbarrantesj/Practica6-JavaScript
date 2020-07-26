let num1 = parseInt(prompt('Ingrese un número:'));
let num2 = parseInt(prompt('Ingrese otro número:'));

function max(num1, num2) {
    let maximo = 0;
    if (num1 > num2) {
        maximo = num1;
    } else {
        maximo = num2;

    } return maximo;
}

console.log(max(num1, num2));