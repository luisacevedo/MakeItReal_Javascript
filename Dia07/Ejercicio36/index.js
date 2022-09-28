function saludar(arg){
    if(arg.edad){
        return `Hola ${arg.nombre}, tienes ${arg.edad} años`;
    } else {
        return `Hola ${arg.nombre}`;
    }
}

// código de prueba
const pedro = { nombre: "Pedro", edad: 23 };
console.log(saludar(pedro)); // "Hola Pedro, tienes 23 años"

const maria = { nombre: "Maria", edad: 35 };
console.log(saludar(maria)); // "Hola Maria, tienes 35 años"

const juan = { nombre: "Juan" };
console.log(saludar(juan)); // "Hola Juan"