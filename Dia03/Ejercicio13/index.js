let ver = true;
let index = 0;

let frase = prompt("Por favor ingrese una frase");
while(ver){
    let repeticion = Number(prompt("Por favor ingrese el número de veces que desea que se repita la frase"));
    if(!isNaN(repeticion)){
        ver = false;
        while(index < repeticion){
            console.log(frase);
            index++;
        }
        for(let i = 0; i < repeticion; i++){
            console.log(frase);
        }
    }else{
        console.log("¡Solo se admiten números!");
    }
}
