// 7. Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined

// Declarar la función find que acepta un array y un callback
function find(array, callback) {
    // Iterar sobre cada elemento del array
    for (let i = 0; i < array.length; i++) {
        // Ejecutar el callback pasándole el elemento actual
        if (callback(array[i])) {
            // Si el callback devuelve true, devolver el elemento actual
            return array[i];
        }
    }
    // Si el callback no devuelve true para ningún elemento, devolver undefined
    return undefined;
}

// Declaración del array
const numbers = [1, 2, 3, 4, 5];

// Definición de la función de callback esMayorQueCuatro
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


// Esta parte del código define una función llamada find, que acepta dos argumentos: un array y un callback.

// Dentro de la función find, se itera sobre cada elemento del array utilizando un bucle for. En cada iteración, 
// se ejecuta el callback pasándole el elemento actual del array como argumento. Si el callback devuelve true para 
// ese elemento, la función find devuelve ese elemento.

// Si el callback no devuelve true para ningún elemento del array, la función find devuelve undefined, indicando 
// que no se encontró ningún elemento que satisfaga la condición especificada en el callback.

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