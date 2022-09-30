let obtenerImpares = (numbers) => {return numbers.filter((number) => {return number%2})}

// código de prueba
console.log(obtenerImpares([1, 2, 3, 4, 5])) // [1, 3, 5]
console.log(obtenerImpares([64, 35, 27])) // [35, 27]
console.log(obtenerImpares([])) // []