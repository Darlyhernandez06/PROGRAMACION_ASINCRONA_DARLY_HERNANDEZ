// 5. Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// • devuelva true si todas las llamadas al callback devolvieron true


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


// El código define un array de números impares llamado numbers y una función de callback llamada noEsPar, que verifica 
// si un número no es par (es decir, si no es divisible por 2).

// Luego, utiliza el método every para aplicar esta función de callback a cada elemento del array numbers. El método 
// every ejecuta la función de callback para cada elemento del array y devuelve true si la función de callback devuelve 
// true para todos los elementos; de lo contrario, devuelve false.

// En este caso, todos los números del array son impares, por lo que numbers.every(noEsPar) devuelve true, y este 
// resultado se almacena en la variable todosNoSonPares.

// Finalmente, el resultado se imprime en la consola, mostrando true ya que todos los elementos del array cumplen la 
// condición de no ser pares.
