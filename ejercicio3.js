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