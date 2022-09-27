let frase = prompt("Por favor ingrese una frase.");
frase = frase.split(" ");
for(word in frase){
    console.log(frase[word]);
}