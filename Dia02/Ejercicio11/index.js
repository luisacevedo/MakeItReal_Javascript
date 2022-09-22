let ver = true;

while(ver){
    let num = Number(prompt("Por favor digite un número"));
    if(!isNaN(num)){
        if((num % 5) == 0 && (num % 3) == 0){
            console.log("bingbong");
        }
        if((num % 5) == 0){
            console.log("bing");
        }
        if((num % 3) == 0){
            console.log("bong");
        }
        if(!((num % 5) == 0) && !((num % 3) == 0)){
            console.log(num);
        }
        ver = false;
    }
    else{
        console.log("¡Solo se admiten números!");
    }
}