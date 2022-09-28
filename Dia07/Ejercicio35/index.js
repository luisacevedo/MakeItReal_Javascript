const pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"]
};
console.log(pedro.edad);
pedro.estatura = 1.8;
delete pedro.activo;
let pedroKeys = Object.keys(pedro);
for(let key of pedroKeys){
    console.log(`${key}: ${pedro[key]}`);
}