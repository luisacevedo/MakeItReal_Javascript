let numeros = [];
let ver = true;
let num;

while(ver){
    num = Number(prompt("Por favor ingrese un número"));
    if(!isNaN(num)){
        ver = false;
    } else{
        console.log("¡Solo se admiten numeros!");
    }
}

for(let i = 1; i <= num; i++){
    numeros.push(i);
}

numeros.splice(1,1);

for(i in numeros){
    console.log(numeros[i]);
}