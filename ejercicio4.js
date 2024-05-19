// 4. Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// • si dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro"

// Definir una función filter que acepte un array y un callback
function filter(array, callback) {
    // Inicializar un array vacío para almacenar los elementos filtrados
    const filteredArray = [];
    // Iterar sobre cada elemento del array
    for (let i = 0; i < array.length; i++) {
        // Ejecutar el callback para cada elemento
        // Si el callback devuelve true, agregar el elemento al array filtrado
        if (callback(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    // Devolver el array filtrado
    return filteredArray;
}

// Definir un array de ejemplo
const numbers = [1, 3, 5, 8, 10, 12, 15, 20];

// Definir una función de callback que identifique los números pares
function esPar(num) {
    return num % 2 === 0;
}

// Usar la función filter para filtrar los números pares del array
const numerosPares = numbers.filter(esPar);

// Imprimir el array resultante
console.table(numerosPares); // Salida: [8, 10, 12, 20]


// En este bloque de código se define una función llamada filter que acepta dos argumentos: un array y un callback.

// Dentro de la función filter, se inicializa un array vacío llamado filteredArray, el cual se utilizará para almacenar
// los elementos que pasen la condición especificada en el callback.

// Luego, se itera sobre cada elemento del array utilizando un bucle for. En cada iteración, se ejecuta el callback 
// pasándole el elemento actual del array como argumento. Si el callback devuelve true para el elemento actual, 
// significa que dicho elemento cumple con la condición especificada en el callback, por lo que se agrega al array 
// filteredArray utilizando el método push().

// Al finalizar la iteración, la función filter devuelve el array filteredArray, el cual contiene únicamente los 
// elementos que pasaron el filtro definido por el callback.

// filter es un método de los arrays en JavaScript que se utiliza para crear un nuevo array con todos los elementos 
// que pasan cierto criterio especificado en una función de callback. Aquí hay una explicación paso a paso de lo que 
// hace el método `filter`:

// Iteración: Comienza iterando sobre cada elemento del array original.
// Callback: Para cada elemento del array, ejecuta una función de callback proporcionada como argumento.
// Condición: La función de callback devuelve `true` o `false` basada en una condición específica que se evalúa
// para cada elemento.
// Filtrado: Si la función de callback devuelve `true` para un elemento específico, ese elemento se agrega al nuevo
// array resultante.
// Nuevo array: Finalmente, `filter` devuelve un nuevo array que contiene solo los elementos para los cuales la 
// función de callback devolvió `true`.

// En resumen, `filter` permite filtrar elementos de un array según un criterio específico definido por una función de 
// callback y devuelve un nuevo array con los elementos que cumplen ese criterio.