let count = 0;
let datos = [0,0]; //datos[0] : peso, datos[1] : altura
let res = 0;
let text = "peso en Kg";
while(count < 2){
    let aux = Number(prompt("Por favor ingrese su " + text));
    if(!isNaN(aux)){
        datos[count] = aux;
        text = "altura en Mt";
        count += 1;
    }
    else {
        alert("¡Solo se admiten números!");
    }
}
res = datos[0] / Math.pow(datos[1],2);

console.log("Tu BMI es " + res);