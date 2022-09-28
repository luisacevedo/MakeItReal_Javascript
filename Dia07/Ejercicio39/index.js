function frecuencias(cadena){
      let objeto = {};
      cadena = cadena.replaceAll(" ","");
      for(chr in cadena){
            let item = String(cadena[chr]);
            if(!objeto[item]){
                  objeto[item] = 1;
            } else {
                  objeto[item]++;
            }
      }
      return objeto;
}

// código de prueba
console.log(frecuencias("hola mundo"));
// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

console.log(frecuencias("anita lava la tina"));
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }