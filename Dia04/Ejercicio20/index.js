const mat = [
    ["Pablo", "Maria", "Pedro"],
    ["Diana", "Juan", "Federico"],
    ["Roberto", "Daniel", "Sandra"]
];

for(let i = 0; i < mat.length; i++){
    console.log("Grupo " + (i + 1) + ":");
    const nombres = mat[i];
    for(let j = 0; j < nombres.length; j++){
        console.log(" " + nombres[j]);
    }
}