let frase0 = prompt("Por favor ingrese una frase");
let frase1 = prompt("Por favor ingrese otra frase");
let caracteresComunes = [];

for(chr in frase0){
    for(chr2 in frase1){
        if(frase0[chr] === frase1[chr2]){
            for(chr3 in caracteresComunes){
                if(frase0[chr] != caracteresComunes[chr3]){
                    caracteresComunes.push(frase0[chr]);
                }
            }
        }
    }
}

console.log(caracteresComunes);