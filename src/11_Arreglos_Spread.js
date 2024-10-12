// Arreglo spread

const carros = ['Ferrari','Nissan','Porsche','Mc Laren','Mercedes'];

const carros2 = carros.concat('Mustang GT500','Challenger','Camaro');

const motos = ['Italika','Chopper','Ninja','Supersport'];

const tienda = [...motos, ...carros,'rin 18'];
const tienda2 = motos.concat(carros2).concat('rin 18');

console.log(carros2)
console.log(tienda2)
console.log(tienda)
