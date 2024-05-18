// 6. Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true

// Definir un array de ejemplo
const numbers = [1, 3, 5, 8, 9];

// Definir una función de callback que verifica si un número es par
function esPar(numero) {
    return numero % 2 === 0;
}

// Crear una función some que acepte un array y un callback
function some(array, callback) {
    // Iterar sobre cada elemento del array
    for (let i = 0; i < array.length; i++) {
        // Ejecutar el callback para cada elemento
        if (callback(array[i])) {
            // Si el callback devuelve true, devolver true
            return true;
        }
    }
    // Si el callback no devuelve true para ningún elemento, devolver false
    return false;
}

// Usar la función some para verificar si al menos un número en el array es par
const algunEsPar = some(numbers, esPar);

// Imprimir el resultado en la consola
console.log(algunEsPar); // Output: true (porque 8 es par)


// Definición del Array de Ejemplo: Se crea un array llamado numbers que contiene una serie de números.

// Definición de la Función de Callback para Verificar si un Número es Par: Se define una función llamada esPar que 
// toma un número como argumento y devuelve true si el número es par, es decir, si su residuo al dividirlo por 2 es 
// igual a 0.

// Creación de la Función some: Se define una función llamada some que toma dos argumentos: un array y un callback.
// Esta función tiene la tarea de iterar sobre cada elemento del array y ejecutar el callback en cada uno de ellos. 
// Si el callback devuelve true para al menos uno de los elementos, la función some devuelve true; de lo contrario, 
// devuelve false.

// Implementación del Bucle: Dentro de la función some, se utiliza un bucle for para iterar sobre cada elemento del 
// array. En cada iteración, se ejecuta el callback en el elemento actual del array.

// Verificación del Callback: Se verifica si el resultado del callback para el elemento actual es true. Si es así, 
// la función some devuelve true inmediatamente, indicando que al menos un elemento del array cumple con la condición 
// especificada por el callback.

// Retorno de Resultado: Si el bucle termina de iterar sobre todos los elementos del array y el callback no devuelve 
// true para ninguno de ellos, la función some devuelve false.

// Uso de la Función some: Se utiliza la función some pasando el array numbers y la función de callback esPar como 
// argumentos. Esto verificará si al menos un número en el array es par.

// Impresión del Resultado: Finalmente, se imprime el resultado en la consola, indicando si al menos un número en el 
// array es par o no.

// En resumen, el código verifica si al menos uno de los números en el array es par utilizando la función some y una 
// función de callback para verificar si un número es par.

// Inicialización del Bucle: Se inicializa una variable i en 0 para comenzar a iterar sobre el array desde el primer 
// elemento.

// Condición de Continuación del Bucle: El bucle continuará mientras i sea menor que la longitud del array. 
// Esto garantiza que el bucle itere sobre cada elemento del array.

// Ejecución del Callback: En cada iteración del bucle, se ejecuta el callback pasando como argumento el elemento
// actual del array (array[i]).

// Verificación del Resultado del Callback: Se verifica si el resultado del callback para el elemento actual es true. 
// Si lo es, significa que al menos un elemento del array cumple con la condición especificada por el callback.

// Devolver true si el Callback Devuelve true: Si el callback devuelve true para el elemento actual, la función some 
// devuelve true inmediatamente, indicando que al menos un elemento del array cumple con la condición.

// Finalización del Bucle: Si el bucle termina de iterar sobre todos los elementos del array y el callback no devuelve
// true para ninguno de ellos, la función some llega a esta parte del código.

// Devolver false si el Callback no Devuelve true: Si el callback no devuelve true para ningún elemento del array, 
// la función some devuelve false, indicando que ninguno de los elementos del array cumple con la condición especificada
// por el callback.