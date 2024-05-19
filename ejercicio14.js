// 14. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
// diga "Operación completada". Utiliza async/await.

// Definición de la función asincrónica operacionAsincronica
async function operacionAsincronica() {
    // Esperar 1 segundo utilizando setTimeout dentro de una promesa
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Después de esperar, devolver la cadena "¡Operación completada después de 1 segundos!"
    return "¡Operación completada después de 1 segundo!";
}

// Uso de la función asincrónica
operacionAsincronica().then(resultado => {
    console.log(resultado); // Imprimir el resultado en la consola
});


// El ejercicio pide que se defina una función asincrónica que espere 1 segundo y luego devuelva una cadena que diga 
// "Operación completada", utilizando async/await. Esto implica que la función debe esperar un cierto tiempo sin bloquear
// la ejecución de otras tareas, y una vez transcurrido ese tiempo, debe devolver el mensaje especificado.

// Una función asincrónica, o función asíncrona, es una función en JavaScript que permite realizar operaciones 
// asíncronas de manera más sencilla y legible. Al marcar una función como async, se indica que esta función 
// devuelve una promesa y puede contener expresiones await que pausan la ejecución de la función hasta que la promesa se 
// resuelva. Esto facilita la escritura de código que involucra operaciones asíncronas, como solicitudes de red, 
// temporizadores y operaciones de E/S.

// Definición de la función asincrónica operacionAsincronica: Se define una función llamada operacionAsincronica 
// utilizando la palabra clave async, lo que indica que es una función asincrónica. Esto permite que la función contenga
// expresiones await para pausar la ejecución y esperar a que se resuelvan promesas.

// async function: Esto define una función asincrónica. Una función asincrónica retorna una Promise y permite el uso de 
// la palabra clave await dentro de su cuerpo para esperar la resolución de otras promesas.

// await new Promise: Esta línea crea una nueva Promise que se resuelve después de 1000 milisegundos (1 segundo) usando 
// setTimeout. La función resolve se pasa como argumento a setTimeout, lo que garantiza que la Promise se resuelva 
// después del tiempo especificado.

// return "Operación completada": Después de esperar 1 segundo, la función retorna la cadena "Operación completada".

// operacionAsincronica().then: Se llama a la función operacionAsincronica(), que es asincrónica, y se encadena un 
// método then() a la Promise que devuelve. Cuando la Promise se resuelve (en este caso, después de esperar 1 segundo), 
// la función de retorno del then se ejecuta. En este caso, la función de retorno simplemente imprime el resultado en la
// consola.
// En resumen, este código define una función asincrónica operacionAsincronica() que espera 1 segundo y luego devuelve 
// la cadena "Operación completada". Luego, utiliza then() para manejar el resultado y lo imprime en la consola.