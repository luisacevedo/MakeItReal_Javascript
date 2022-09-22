let ver = true;
let index = 1;

while(ver){
    let num = Number(prompt("Por favor ingrese un número"));
    if(!isNaN(num)){
        ver = false;
        let aux = 0;
        for(let i = 1; i <= num; i++){
            aux += i;
        }
        console.log(aux);
        aux = 0;
        while(index <= num){
            aux += i;
            index++;
        }
        console.log(aux);
    }else{
        console.log("¡Solo se admiten números!");
    }
}