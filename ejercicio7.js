// 7. Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined

// Declaración del array
const numbers = [1, 2, 3, 4, 5];

// Definición de la función de callback esMayorQueTres
// Esta función verifica si un número es mayor que 4
function esMayorQueCuatro(numero) {
    return numero > 4;
}

// Definición de la función de callback esIgualASeis
// Esta función verifica si un número es igual a 6
function esIgualASeis(numero) {
    return numero === 6;
}

// Uso de la función find para encontrar el primer número mayor que 4
const resultado1 = numbers.find(esMayorQueCuatro);
console.log(resultado1); // Output: 5

// Uso de la función find para encontrar el primer número igual a 6
const resultado2 = numbers.find(esIgualASeis);
console.log(resultado2); // Output: undefined


// Se declara un array llamado numbers que contiene números del 1 al 5.

// Se definen dos funciones de callback: esMayorQueCuatro y esIgualASeis. La primera verifica si un número es mayor que 
// 4, mientras que la segunda verifica si un número es igual a 6.

// Se utiliza la función find para buscar el primer número mayor que 4 en el array numbers. La función find ejecuta la
// función de callback proporcionada para cada elemento del array, pasándole el elemento como argumento. Devuelve el 
// primer elemento para el cual el callback devuelve true. En este caso, resultado1 contendrá el valor 5, ya que es el 
// primer número mayor que 4 en el array.

// Se utiliza nuevamente la función find para buscar el primer número igual a 6 en el array numbers. Dado que no hay
//  ningún número igual a 6 en el array, la función find devuelve undefined. Por lo tanto, resultado2 será undefined.

// Se imprimen los resultados en la consola para verificar qué elementos cumplen las condiciones especificadas.