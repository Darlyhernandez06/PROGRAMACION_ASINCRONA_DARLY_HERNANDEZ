// 5. Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// • devuelva true si todas las llamadas al callback devolvieron true

// Declarar la función every que acepta un array y un callback
function every(array, callback) {
    // Iterar sobre cada elemento del array
    for (let i = 0; i < array.length; i++) {
        // Ejecutar el callback pasándole el elemento actual
        // Si el callback devuelve false, devolver false
        if (!callback(array[i])) {
            return false;
        }
    }
    // Si el callback devuelve true para todos los elementos, devolver true
    return true;
}

// Definir un array de ejemplo con números impares
const numbers = [1, 3, 5, 7, 9];

// Definir una función de callback que verifica si un número no es par
function noEsPar(numero) {
    // Verifica si el número no es divisible por 2 (número impar)
    return numero % 2 !== 0;
}

// Utilizar el método every para verificar si todos los números del array no son pares
// El método every ejecuta la función de callback para cada elemento del array
// Si la función de callback devuelve true para todos los elementos, every devuelve true
// Si la función de callback devuelve false para algún elemento, every devuelve false
const todosNoSonPares = numbers.every(noEsPar);

// Imprimir el resultado en la consola
console.log(todosNoSonPares); // Output: true


// En esta parte del código se define una función llamada every que acepta dos argumentos: un array y un callback.

// Dentro de la función every, se itera sobre cada elemento del array utilizando un bucle for. En cada iteración, 
// se ejecuta el callback pasándole el elemento actual del array como argumento. Si el callback devuelve false para 
// algún elemento del array, la función every devuelve false, indicando que al menos un elemento del array no satisface
// la condición especificada en el callback.

// Si el callback devuelve true para todos los elementos del array, la función every devuelve true, indicando que todos
// los elementos del array satisfacen la condición especificada en el callback.

// El código define un array de números impares llamado numbers y una función de callback llamada noEsPar, que verifica 
// si un número no es par (es decir, si no es divisible por 2).

// Luego, utiliza el método every para aplicar esta función de callback a cada elemento del array numbers. El método 
// every ejecuta la función de callback para cada elemento del array y devuelve true si la función de callback devuelve 
// true para todos los elementos; de lo contrario, devuelve false.

// En este caso, todos los números del array son impares, por lo que numbers.every(noEsPar) devuelve true, y este 
// resultado se almacena en la variable todosNoSonPares.

// Finalmente, el resultado se imprime en la consola, mostrando true ya que todos los elementos del array cumplen la 
// condición de no ser pares.
