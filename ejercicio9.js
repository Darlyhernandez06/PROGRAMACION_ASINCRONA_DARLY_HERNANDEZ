// 9.Crear una función dropWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// • devuelva un array con los elementos a partir del primer callback que devolvió false
// • (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el
// callback de true, no los agrega, cuando el callback da false por primera vez agrega
// todos los elementos restantes a partir de dicho elemento inclusive)


function dropWhile(array, callback) {
    // Inicializamos el índice en 0
    let index = 0;

    // Recorremos el array mientras el índice sea menor que la longitud del array
    // y el callback devuelva true para el elemento en la posición actual
    while (index < array.length && callback(array[index])) {
        index++; // Incrementamos el índice para pasar al siguiente elemento
    }

    // Usamos el método slice para devolver una nueva parte del array desde el índice
    // encontrado hasta el final del array
    return array.slice(index);
}

// Ejemplo de uso:
const numbers = [1, 2, 3, 4, 5];

// Definimos un callback que verifica si un número es menor que 3
const numero= num => num < 3;

// Llamamos a dropWhile con el array y el callback
const resultado = dropWhile(numbers, numero);

// Imprimimos el resultado: [3, 4, 5]
console.log(resultado);


// El enunciado solicita crear una función llamada dropWhile que toma dos argumentos: un array y un callback. Esta 
// función debe:
// Ejecutar el callback para cada elemento del array, pasándole dicho elemento como argumento.
// Devolver un nuevo array que contenga todos los elementos a partir del primer elemento para el cual el callback 
// devuelva false.
// En otras palabras, la función debe ir recorriendo el array y excluyendo elementos mientras el callback devuelva true. 
// Cuando el callback devuelva false por primera vez, todos los elementos a partir de ese punto (inclusive el que devolvió
// false) deben ser incluidos en el nuevo array.

// while: Palabra clave para un bucle que se ejecuta mientras la condición es verdadera.
// index < array.length: Verifica que el índice esté dentro de los límites del array.
// callback(array[index]): Ejecuta el callback con el elemento actual del array.
// index++: Incrementa el índice para pasar al siguiente elemento.

// return: Devuelve el resultado de la función.
// array.slice(index): Método que crea una copia superficial de una porción del array desde el índice especificado hasta
// el final.

// const: Palabra clave para declarar una constante.
// numbers: Nombre del array que contiene los números de ejemplo.
// [1, 2, 3, 4, 5]: Valores del array

// const: Palabra clave para declarar una constante.
// numero: Nombre de la función callback.
// num => num < 3: Función flecha que toma un número y devuelve true si es menor que 3.

// const: Palabra clave para declarar una constante.
// resultado: Nombre de la variable que almacenará el resultado de la función.
// dropWhile(numbers, numero): Llamada a la función dropWhile con los argumentos numbers y numero.

// El código debe imprimir [3, 4, 5] porque los números 1 y 2 son menores que 3 y cumplen con la condición del callback 
// (num < 3), 
// por lo que se omiten. El primer número que no cumple la condición es 3, y a partir de ahí se incluyen todos los
// elementos restantes del array.