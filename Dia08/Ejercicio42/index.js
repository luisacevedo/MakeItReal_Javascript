function pares(numeros){
    return numeros.filter((elemento) => {
            if((elemento%2)==0){
                return elemento;
            }
        })
}

// código de prueba
console.log(pares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(pares([120, 876, 934, 1298])) // [120, 876, 934, 1298]
console.log(pares([7, 921, 43, 9649])) // []