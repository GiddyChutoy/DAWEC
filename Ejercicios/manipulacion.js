let arrayPalabras = ["abedul","casa","coche","rio","alameda","alegría","portón"];
let empiezanPorA = arrayPalabras.filter(function(palabra) {
 if (palabra[0] == "a") {
 return true;
 } else {
 return false;
}
});

//arrow

let empiezanPorA = arrayPalabras.filter(palabra => palabra[0] == "a");

//Ejercicio 6

var notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3.5, 4.5, 7.5, 5.6, 9.5];
console.log(notas.find(numero => numero == 5.5));
//devuelve undefined porque no existe el numero indicado en el array

console.log(notas.every(numero => numero >= 5)); //Devuelve false porque comprueba si todos son aprobados
console.log(notas.some(numero => numero >= 5));//Devuelve true porque si hay al menos un aprobado.

var palabras = ["palra1", "pra2", "palabra3", "palabra4", "pa5", "palabra6", "palabra7", "palabra8", "labra9", "pal10", "pabra11", "palabra12"];
var palabras6 = palabras.filter(palabra => palabra.length == 6);
console.log(palabras6);
//devuelve las palabras que tengan una longitud de 6

var telefonos = [628457812, 852417963, 789456123, 159753864, 842963852, 715894613, 56894231, 462486139];
console.log(telefonos.some(numero => {
    numerostelf = numero.toString();
    return numerostelf[numerostelf.length - 1] == "3";
}));
//devuelve los numeros de telefono que terminen en 3

//Ejercicio 7
//map
let arrayPalabras = ["casa","abedul","coche","rio","alameda","alegría","portón"];
let arrayMayus = arrayPalabras.map(palabra => palabra[0].toLocaleUpperCase() +
palabra.slice(1));

//reduce
let cadenaUnica = arrayPalabras.reduce((valorAnt,valorAct) => valorAnt + valorAct);
let cadenaUnica2 = arrayPalabras.reduce((valorAnt,valorAct) => valorAnt + valorAct,"Concatenados: "); 
let arrayPalabras = ["casa","abedul","coche","rio","alameda","alegría","portón"];