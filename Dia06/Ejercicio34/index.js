function promedio(numeros){
    return sumarArr(numeros)/numeros.length;
}

function sumarArr(numeros){
    let res = 0;
    numeros.forEach(element => {
        if(!isNaN(element)){
            res += element;
        } else {
            return "error";
        }      
    });
    return res;
}

console.log(promedio([1, 2, 3, 4])) // 2.5
console.log(promedio([7, 8, 9])) // 8
console.log(promedio([300, 100])) // 200