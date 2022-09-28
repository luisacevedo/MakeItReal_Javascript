function buscarProducto(arg, num){
    num = Number(num);
    let res = null;
    if(!isNaN(num)){
        for(producto in arg){
            console.log(arg[producto]);
            if(arg[producto].id === num){
                res = arg;
                break;
            }
        }
    } else {
        return "¡Solo se admiten números!";
    }
    return res;
}

let productos = [
    { id: 1, nombre: "A" },
    { id: 2, nombre: "B" },
  ];
  console.log(buscarProducto(productos, 1)); // { id: 1, nombre: "A" }
  console.log(buscarProducto(productos, 566)); // null