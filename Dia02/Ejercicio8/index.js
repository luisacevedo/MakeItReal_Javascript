let ver = true;

while(ver){
    let num = Number(prompt("Por favor digite un número"));
    if(!isNaN(num)){
        if((num % 5) == 0){
            ver = false;
            console.log("Si, el número " + num + " es multiplo de 5");
        }
        else{
            console.log("No, el número " + num + " no es multiplo de 5");
        }
    }
    else{
        console.log("¡Solo se admiten números!");
    }
}