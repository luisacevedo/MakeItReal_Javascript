let ver = true;
const maxRandNum = 10;
let randNum = Math.floor(Math.random() * maxRandNum);
console.log(randNum);
let num;
setTimeout(() => {
while(ver){
    num = Number(prompt("Por favor digite un número del 0 al 10"));

    if(!isNaN(num)){
            if(num === randNum){
                ver = false;
                console.log("Felicitaciones, ese era!");
            }
            else{
                console.log("Lo siento, intenta nuevamente!");
            }
        }
        else{
            console.log("¡Solo se admiten números!");
        }
    }
}, 1);