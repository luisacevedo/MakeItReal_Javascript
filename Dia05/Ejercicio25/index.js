const chng = [
    [' ', ''],
    ['a', '4'],
    ['e', '3'],
    ['i', '1'],
    ['o', '0']
];

let frase = prompt("Por favor ingrese una frase.");
frase = frase.toLowerCase;

for(chr in frase){
    for(chr2 in chng){
        let arrChr = chng[chr2];
        if(frase[chr] === arrChr[0]){
            frase = frase.replace(arrChr[0],arrChr[1]);
        }
    }
}

console.log(frase);