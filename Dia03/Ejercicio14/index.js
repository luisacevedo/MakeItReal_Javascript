let ver = true;
let index = 1;

while(ver){
    let num = Number(prompt("Por favor ingrese un número"));
    if(!isNaN(num)){
        ver = false;
        for(let i = 1; i <= num; i++){
            console.log(i);
        }
        while(index <= num){
            console.log(index);
            index++;
        }
    }else{
        console.log("¡Solo se admiten números!");
    }
}