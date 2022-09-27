let frase = prompt("Por favor ingrese una frase.");
frase = frase.split(" ");
for(word in frase){
    frase[word] = frase[word].charAt(0).toUpperCase() + frase[word].slice(1);
}
frase = frase.join(" ");
console.log(frase);