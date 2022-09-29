function posPares(arr){
    return arr.filter((elemento, indice) => {
        if((indice%2) === 0){
            return elemento;
        }});
}

// código de prueba
console.log(posPares(["a", "b", "c"])) // ["a", "c"]
console.log(posPares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(posPares([])) // []