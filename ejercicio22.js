// 22. Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
// lista de elementos uno por uno.

// Función asincrónica que realiza una operación para cada elemento de la lista
async function procesarLista(lista) {
    try {
        // Iterar sobre cada elemento de la lista
        for (let elemento of lista) {
            // Realizar una llamada asincrónica para procesar el elemento
            await procesarElemento(elemento);
        }
        // Imprimir un mensaje cuando se completa el procesamiento de la lista
        console.log('Procesamiento de la lista completado.');
    } catch (error) {
        // Manejar errores durante el procesamiento de la lista
        console.error('Error durante el procesamiento de la lista:', error);
    }
}

// Función asincrónica que simula una operación de procesamiento para un elemento
function procesarElemento(elemento) {
    return new Promise((resolve, reject) => {
        // Simular un retraso de tiempo aleatorio para el procesamiento
        const tiempoAleatorio = Math.random() * 3000 + 1000;
        // Simular una operación asincrónica de procesamiento
        setTimeout(() => {
            // Imprimir el mensaje de procesamiento del elemento
            console.log(`Procesando elemento: ${elemento}`);
            // Resolver la promesa para indicar que la operación se ha completado
            resolve();
        }, tiempoAleatorio);
    });
}

// Lista de elementos a procesar
const lista = ['elemento1', 'elemento2', 'elemento3', 'elemento4', 'elemento5'];

// Iniciar el procesamiento de la lista llamando a la función apropiada
procesarLista(lista);


// solicita crear un bucle que utilice async/await para realizar llamadas asincrónicas y procesar una lista de elementos
// uno por uno. Esto significa que cada elemento de la lista debe procesarse de forma secuencial, esperando a que la
// operación asincrónica de un elemento se complete antes de pasar al siguiente.

// async function procesarLista(lista) {: Se define una función asincrónica llamada procesarLista que toma un parámetro 
// lista.

// try {: Comienza un bloque try-catch para manejar errores dentro de la función.
    
// for (let elemento of lista) {: Se inicia un bucle for-of que itera sobre cada elemento de la lista.
    
// await procesarElemento(elemento);: Se utiliza await para esperar a que la función procesarElemento se complete 
// para cada elemento de la lista.
    
// console.log('Procesamiento de la lista completado.');: Después de procesar todos los elementos, se imprime un 
// mensaje indicando que se ha completado el procesamiento de la lista.
    
// } catch (error) {: Captura cualquier error que pueda ocurrir durante el procesamiento de la lista.
    
// console.error('Error durante el procesamiento de la lista:', error);: Si se produce un error, se imprime un 
// mensaje de error junto con los detalles del error.
    
// function procesarElemento(elemento) {: Se define una función llamada procesarElemento que simula una operación de
// procesamiento asincrónica para un elemento.
    
// return new Promise((resolve, reject) => {: Se crea una nueva promesa dentro de la función procesarElemento.
    
// const tiempoAleatorio = Math.random() * 3000 + 1000;: Se genera un tiempo de espera aleatorio entre 1000 y 4000 
// milisegundos para simular el procesamiento asincrónico.
    
// setTimeout(() => {: Se utiliza setTimeout para simular una operación asincrónica que se completará después de un
// tiempo determinado.
    
// console.log(Procesando elemento: ${elemento});: Se imprime un mensaje para indicar que se está procesando el elemento.
    
// resolve();: Se resuelve la promesa para indicar que la operación de procesamiento se ha completado con éxito.
    
// const lista = ['elemento1', 'elemento2', 'elemento3', 'elemento4', 'elemento5'];: Se define una lista de elementos 
// que se procesarán uno por uno.
    
// procesarLista(lista);: Se llama a la función procesarLista para iniciar el procesamiento de la lista.