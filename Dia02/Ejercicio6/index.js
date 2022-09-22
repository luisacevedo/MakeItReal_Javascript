let ver = true;

while(ver){
    let num = Number(prompt("Por favor digite un número"));
    if(!isNaN(num)){
        ver = false;
        if(num > 10){
            console.log("El número es mayor a 10");
        }
        else{
            console.log("El número es menor o igual a 10");
        }
    }
    else{
        console.log("¡Solo se admiten números!");
    }
}