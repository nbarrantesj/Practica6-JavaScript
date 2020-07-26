function alinearDerecha(numero, espacio) {
    let letraNum = numero.toString().length;
    let cantEspacio = espacio - letraNum;
    let final = '';

    for (let i = 0; i < cantEspacio; i++) {
        final += ' ';
    }
    return final + numero;
}

let numeros = [15, 7, 220, 3500, 900056, 12345, 10, 4, 86];

for (let puntero = 0; puntero < numeros.length; puntero++) {
    console.log(alinearDerecha(numeros[puntero], 9));
}