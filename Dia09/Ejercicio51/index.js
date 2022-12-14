const max = (...numbers) => {
    let aux = Number.NEGATIVE_INFINITY;
    numbers.forEach(number => {
        if(number > aux){
            aux = number;
        }
    });
    return aux;
}

// código de prueba
console.log(max(1, 2, 3, 4)) // 4
console.log(max(63, 85, 39, 24, 3)) // 85