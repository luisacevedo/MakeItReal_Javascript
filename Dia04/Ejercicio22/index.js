const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1];
let cant = 0;
nums.forEach(element => {element === 1? cant++ : null;});
console.log(cant);