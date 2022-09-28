function descifrar(cadena, objeto){
  for(chr in cadena){
    for(chr2 in objeto){
          cadena = cadena.replace(chr2,objeto[chr2]);
    }
  }
  return cadena;
}

// código de prueba
console.log(descifrar("h0l4", { 0: "o", 4: "a" })); // "hola"
console.log(descifrar("pyrmizo", { y: "e", z: "s" })); // "permiso"
console.log(descifrar("igual", { h: "n" })); // "igual"