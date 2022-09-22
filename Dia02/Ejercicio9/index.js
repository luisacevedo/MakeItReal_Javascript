let ver = true;
let text = " igual a 10";

while(ver){
    let num = Number(prompt("Por favor digite un número"));
    if(!isNaN(num)){
        ver = false;
        if(num > 10){
            text = " mayor a 10";
        }
        if(num < 10){
            text = " menor a 10";
        }
    }
    else{
        console.log("¡Solo se admiten números!");
    }
}
console.log("El número es" + text);