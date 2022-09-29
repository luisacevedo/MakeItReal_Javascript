function productosBaratos(productos){
    let res = [];
    let filter = productos.filter((elemento) => {
        if(elemento.precio >= 5 && elemento.precio <= 10){
            let aux = elemento;
            return aux;
        }
    });
    for(product of filter){
        res.push(product.nombre);
    }
    return res;
}

// código de prueba
let prods = [
    { nombre: "Arroz", precio: 5 },
    { nombre: "Pan", precio: 3 },
    { nombre: "Tomate", precio: 8 },
    { nombre: "Leche", precio: 15 }
  ];
  console.log(productosBaratos(prods)); // ["Arroz", "Tomate"]