//Desestructurar arreglo
const alumnos = ['monse','mau','gustavo','jose','barbara','juan']

const [nom1, b, nom3, ...nombres] = alumnos

console.log(nom1,b,nom3,...nombres);