function multiplicar(numeros,numero){
    return numeros.map((elemento) => {
        return elemento * numero;
    });
}

// código de prueba
console.log(multiplicar([1, 2, 3], 2)) // [2, 4, 6]
console.log(multiplicar([7, 4], 3)) // [21, 12]
console.log(multiplicar([], 10)) // []