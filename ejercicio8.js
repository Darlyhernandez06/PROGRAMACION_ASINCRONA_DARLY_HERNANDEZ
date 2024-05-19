// 8. Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined

// Definir la función personalizada findIndex que acepta un array y un callback
function findIndex(array, callback) {
    // Iterar sobre cada elemento del array
    for (let i = 0; i < array.length; i++) {
        // Ejecutar el callback pasándole el elemento actual
        if (callback(array[i])) {
            // Si el callback devuelve true, devolver el índice del elemento actual
            return i;
        }
    }
    // Si el callback no devuelve true para ningún elemento, devolver undefined
    return undefined;
}

// Declarar un array de palabras
const palabras = ["manzana", "banana", "cereza", "durazno", "uva"];

// Definir una función de callback que verifica si una palabra tiene exactamente 6 letras
function tieneExactamenteSeisLetras(palabra) {
    return palabra.length === 6; // Verifica si la longitud de la palabra es igual a 6
}

// Definir una función de callback que verifica si una palabra es igual a "kiwi"
function esIgualAKiwi(palabra) {
    return palabra === "kiwi"; // Verifica si la palabra es igual a "kiwi"
}

// Usar la función findIndex para encontrar el índice de la primera palabra con exactamente 6 letras
const indice1 = palabras.findIndex(tieneExactamenteSeisLetras);
console.log(indice1); // Output: 1 (índice de la palabra "banana")

// Usar la función findIndex para encontrar el índice de la palabra "kiwi" en el array
const indice2 = palabras.findIndex(esIgualAKiwi);
console.log(indice2); // Output: -1 (no se encontró la palabra "kiwi")


// En este código se define una función findIndex que acepta un array y un callback y devuelve el índice del primer
// elemento del array para el cual el callback devuelve true. Si ningún elemento del array satisface la condición del 
// callback, la función devuelve undefined.

// La función findIndex itera sobre cada elemento del array usando un bucle for. Dentro del bucle, se ejecuta el 
// callback proporcionado en cada elemento del array. Si el callback devuelve true para algún elemento, se devuelve
// el índice de ese elemento. Si el callback no devuelve true para ningún elemento, se devuelve undefined.

// Luego se declara un array de palabras llamado palabras. Se definen dos funciones de callback: 
// tieneExactamenteSeisLetras, que verifica si una palabra tiene exactamente 6 letras, y esIgualAKiwi, 
// que verifica si una palabra es igual a "kiwi".

// Finalmente, se utiliza la función findIndex para encontrar el índice de la primera palabra en el array palabras que 
// tenga exactamente 6 letras (usando el callback tieneExactamenteSeisLetras) y para encontrar el índice de la palabra
// "kiwi" en el array (usando el callback esIgualAKiwi). Los resultados se imprimen en la cons

