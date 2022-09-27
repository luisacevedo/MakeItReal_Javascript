let frase = prompt("Por favor ingrese una frase para contar el numero de caracteres 'a' que tiene.");
let cant = 0;
const car = 'a';
for(char in frase){
    if(frase[char] === car){
        cant++;
    }
}
console.log(`La frase tiene ${cant} caracteres "a"`);