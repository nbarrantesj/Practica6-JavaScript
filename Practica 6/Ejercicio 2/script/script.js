function divisible(num1, num2){

    if (num1 % num2 == 0) {
        return true;
    } else {
        return false;
    }
}

let numero = prompt("Ingrese un número entero positivo");
if(numero > 0){
if (divisible(numero, 3) && !divisible(numero, 5)){
    console.log (numero, "🚀");
} 
if (divisible(numero, 5) && !divisible(numero, 3)){
    console.log (numero, "🍔");
}
if (divisible(numero, 3) && divisible(numero, 5)){
    console.log (numero, "🍻");
}
}else {
    console.log('Error');
}