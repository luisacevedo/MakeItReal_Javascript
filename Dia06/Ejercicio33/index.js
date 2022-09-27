function capitalizar(frase){
    frase = frase.split(" ");
    for(word in frase){
        frase[word] = frase[word].charAt(0).toUpperCase() + frase[word].slice(1);
    }
    frase = frase.join(" ");
    return frase;
}

console.log(capitalizar("pedro perez")) // "Pedro Perez"
console.log(capitalizar("make it real")) // "Make it Real"