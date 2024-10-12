//Desestructurar objetos

const carro = {
    marca: 'Seat',
    modelo: 'Fr',
    anio: 2010,
    nombre: 'Leon'
}

//const marca = carro.marca;

const { marca, modelo, nombre } = carro;
console.log(marca);
console.log(nombre);
console.log(modelo)