// 4. Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// • si dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro"

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