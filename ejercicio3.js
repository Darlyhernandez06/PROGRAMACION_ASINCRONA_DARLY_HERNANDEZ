// 3. Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// • obtenga el resultado
// • lo pushee a un nuevo array
// • devuelva el array final con el resultado de cada una de las llamadas al callback.

// Crear un array de ejemplo
const numbers = [1, 2, 3, 4, 5];

// Definir un callback que duplique el valor recibido
function double(number) {
    return number * 2;
}

// Usar la función map para aplicar la función de duplicación a cada elemento del array "numbers"
// y almacenar los resultados en un nuevo array llamado "doubledNumbers"
const doubledNumbers = numbers.map(double);

// Imprimir el array resultante usando console.table
console.table(doubledNumbers); // [2, 4, 6, 8, 10]


// Se crea un array de ejemplo llamado numbers que contiene los números del 1 al 5.
// Se define una función llamada double que acepta un número como argumento y devuelve el doble de ese número.
// Se utiliza la función map para aplicar la función double a cada elemento del array numbers. Esto significa que cada 
// número en el array original será pasado como argumento a la función double, y el resultado de cada llamada se
// almacenará en un nuevo array llamado doubledNumbers.
// Se imprime el array resultante usando console.table, que mostrará los números duplicados en forma de tabla en la 
// consola del navegador.
// Entonces, el resultado final que se imprimirá en la consola será [2, 4, 6, 8, 10], que son los números originales del
// 1 al 5, pero cada uno duplicado.