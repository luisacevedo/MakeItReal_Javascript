let ver = true;

while(ver){
    let inf = Number(prompt("Por favor ingrese un número como límite inferior"));
    let sup = Number(prompt("Por favor ingrese otro número como límite superior"))
    if(!isNaN(inf) && !isNaN(sup)){
        ver = false;
        for(let i = inf; i <= sup; i++){
            console.log(i);
        }
        while(inf <= sup){
            console.log(inf);
            inf++;
        }
    }else{
        console.log("¡Solo se admiten números!");
    }
}