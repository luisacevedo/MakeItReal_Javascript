let count = 0;
let num = [0,0];
let res = 0;
while(count < 2){
    let aux = Number(prompt("Por favor ingrese un número"));
    if(!isNaN(aux)){
        num[count] = aux;
        count += 1;
    }
    else {
        alert("¡Solo se admiten números!");
    }
}
res = num[0] + num[1];

console.log("La suma de los dos números ingresados " + num[0] + " y " + num[1] + " es " + res);