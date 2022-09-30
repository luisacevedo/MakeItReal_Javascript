const auto = {
    velocidad: 0,
     acelerar: function(){this.velocidad++;},
     frenar: function(){this.velocidad--;}
}

// código de prueba
console.log(auto.velocidad) // 0
auto.acelerar()
console.log(auto.velocidad) // 1
auto.frenar()
console.log(auto.velocidad) // 0