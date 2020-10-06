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

