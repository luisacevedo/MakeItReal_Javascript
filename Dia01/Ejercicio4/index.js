let ver = true;
let anioActual = new Date().getFullYear();
anioActual = Number(anioActual);
let anioNacimiento = 0
let res = 0;
while(ver){
    let aux = Number(prompt("Por favor ingrese su año de nacimiento"));
    if(!isNaN(aux) && aux <= anioActual){
        ver = false;
        anioNacimiento = aux;
    }
    else {
        alert("¡Solo se admiten números y que sean menores al año actual!");
    }
}
res = anioActual - anioNacimiento;

console.log("Tienes " + res + " años");