function suma(a, b){
    a = Number(a);
    b = Number(b);
    if(!isNaN(a) && !isNaN(b)){
        return `${a + b}`;
    } else {
        return "error";
    }
}

console.log(suma(1, 2)) // 3
console.log(suma(0, 0)) // 0
console.log(suma(245, 923)) // 1168