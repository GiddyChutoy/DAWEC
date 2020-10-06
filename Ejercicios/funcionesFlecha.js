let numero = Number(prompt("Introduce un número "));
const cuadrado = function(base) {
 return base * base;
};
alert("El cuadrado de " + base + " es " + cuadrado(numero));

//arrow

let numero = Number(prompt("Introduce un número "));
const cuadrado = (base) => {
 return base * base;
};
alert("El cuadrado de " + base + " es " + cuadrado(numero));