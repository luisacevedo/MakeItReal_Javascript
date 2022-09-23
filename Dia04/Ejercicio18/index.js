const nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"];
let nombre = prompt("Por favor ingrese un nombre");
nombres.push(nombre);
nombre = prompt("Por favor ingrese otro nombre");
nombres[2] = nombre;
for(i in nombres){
    console.log(nombres[i])
}