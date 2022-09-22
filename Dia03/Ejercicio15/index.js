let ver = true;
let index = 1;

while(ver){
    let num = Number(prompt("Por favor ingrese un número"));
    if(!isNaN(num)){
        ver = false;
        let aux = 0;
        let str = "(";
        for(let i = 1; i <= num; i++){
            aux += i;
            if(!(i == num)){
                str = str + i + "+";
            }else{
                str = str + i + ")";
            }
        }
        console.log(aux + str);
        aux = 0;
        str = "(";
        while(index <= num){
            aux += index;
            if(!(index == num)){
                str = str + index + "+";
            }else{
                str = str + index + ")";
            }
            index++;
        }
        console.log(aux + str);
    }else{
        console.log("¡Solo se admiten números!");
    }
}