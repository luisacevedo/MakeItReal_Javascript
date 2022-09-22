let ver = true;
let index = 0;

let frase = prompt("Por favor ingrese una frase");
while(ver){
    let repeticion = prompt("Por favor ingrese el número de veces que desea que se repita la frase");
    if(!isNaN(repeticion)){
        while(index < repeticion){
            console.log(frase);
            index++;
        }
        for(let i = 0; i < repeticion; i++){
            console.log(frase);
        }
    }
}
