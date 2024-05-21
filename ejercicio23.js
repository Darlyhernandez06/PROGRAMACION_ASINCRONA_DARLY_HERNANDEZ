// 23.Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
// try/catch para mostrar un mensaje de error en caso de fallo.

// Definimos una función asíncrona llamada leerArchivoJson que toma un parámetro rutaArchivo
async function leerArchivoJson(rutaArchivo) {
    try {
        // Intentamos realizar la solicitud para obtener el archivo JSON usando fetch
        const respuesta = await fetch(rutaArchivo);

        // Verificamos si la respuesta es correcta (status en el rango 200-299)
        if (!respuesta.ok) {
            // Si la respuesta no es correcta, lanzamos un error con el estado de la respuesta
            throw new Error(`Error al obtener el archivo: ${respuesta.statusText}`);
        }

        // Intentamos convertir la respuesta a JSON
        const datos = await respuesta.json();
        // Retornamos los datos obtenidos
        return datos;
    } catch (error) {
        // Si ocurre cualquier error, lo capturamos y mostramos un mensaje de error en la consola
        console.error("Se produjo un error:", error.message);
    }
}

// Definimos la ruta del archivo JSON
const rutaArchivo = 'datos23.json';

// Llamamos a la función para leer el archivo JSON
leerArchivoJson(rutaArchivo)
    .then(datos => {
        // Si se leyeron los datos correctamente, los imprimimos en la consola
        if (datos) {
            console.table(datos); // Utiliza la función console.table para imprimir los datos en la consola en forma de tabla
        }
    });

// El ejercicio está pidiendo que realices una llamada a un archivo local en formato JSON y que manejes posibles 
// errores utilizando try y catch para mostrar un mensaje de error en caso de que ocurra un fallo.

// Para hacer esto en un entorno web con JavaScript, usar fetch para leer el archivo JSON. fetch es una API que permite
// hacer solicitudes de red y puede ser utilizada para leer archivos JSON. Sin embargo, al trabajar con archivos 
// locales, puede haber restricciones de seguridad en el navegador, por lo que es recomendable probarlo en un servidor
// local.

// async function leerArchivoJson(rutaArchivo): Definimos una función asincrónica llamada leerArchivoJson que toma un 
// parámetro rutaArchivo. La palabra clave async indica que la función contiene operaciones asincrónicas y permite el 
// uso de await dentro de ella.

// try {: Inicia un bloque try, que se utiliza para envolver el código que puede lanzar una excepción. Si se lanza una
// excepción, el control pasa al bloque catch.

// const respuesta = await fetch(rutaArchivo);: Utiliza fetch para realizar una solicitud HTTP GET al archivo 
// especificado por rutaArchivo. La palabra clave await se usa para esperar la resolución de la promesa devuelta 
// por fetch

// if (!respuesta.ok) {: Verifica si la respuesta de la solicitud HTTP fue exitosa. La propiedad ok es true si el 
// estado de la respuesta es un código de éxito (200-299).

// throw new Error(...): Si la respuesta no fue exitosa, lanza un nuevo error con un mensaje que incluye el texto 
// de estado de la respuesta (statusText). Esto transfiere el control al bloque catch.

// En el código proporcionado, statusText se utiliza para incluir una descripción del error cuando la respuesta no es 
// correcta. Esto proporciona información adicional sobre el error, haciendo que los mensajes de error sean más 
// informativos y fáciles de entender.

// const datos = await respuesta.json();: Utiliza el método .json() de la respuesta para convertir el cuerpo de la 
// respuesta a un objeto JSON. La palabra clave await se usa para esperar a que la conversión se complete.

// return datos;: Devuelve el objeto JSON obtenido de la respuesta.

// catch (error) {: Inicia un bloque catch que captura cualquier error que se haya lanzado dentro del bloque try.
// console.error(...): Muestra un mensaje de error en la consola con el mensaje del error capturado.
    
// const rutaArchivo = 'datos.json';: Define una constante rutaArchivo que contiene la ruta del archivo JSON que 
// queremos leer.
    
// leerArchivoJson(rutaArchivo): Llama a la función leerArchivoJson con rutaArchivo como argumento.
// .then(datos => { ... }): Adjunta un manejador de promesas que se ejecutará cuando la promesa devuelta por
// leerArchivoJson se resuelva. Este manejador recibe los datos devueltos por la función.
// if (datos) { console.log(datos); }: Si los datos se leyeron correctamente (es decir, datos no es null o undefined),
// console.table(datos);: Utiliza la función console.table para imprimir los datos en la consola en forma de tabla. 
// Esta función es especialmente útil para visualizar arrays de objetos y objetos con múltiples propiedades

// Objetos JSON ({}): Se utilizan para representar colecciones de pares clave-valor.
// Arrays JSON ([]): Se utilizan para representar listas ordenadas de valores.
// Estructuras combinadas: Puedes combinar objetos y arrays para representar estructuras de datos complejas.
// El uso de {} o [] depende de cómo necesitas estructurar los datos para tu aplicación.

// Propiedad: "nombre" – Valor: "Darly Hernandez"
// Propiedad: "edad" – Valor: 18
// Propiedad: "correo" – Valor: "darlyhernadez0624@gmail.com"
// Propiedad: "telefono" – Valor: "315-213-2954"
// Propiedad: "direccion" – Valor: Un objeto con las siguientes propiedades:
// Propiedad: "calle" – Valor: "Calle 42 A #16-97 Rincon de Giron parte alta"
// Propiedad: "numero" – Valor: 123
// Propiedad: "ciudad" – Valor: "Bucaramanga"
// Propiedad: "pais" – Valor: "Colombia"
// Propiedad: "hobbies" – Valor: Un array con los valores ["manualidades", "viajar", "diseñar"]
// Este objeto JSON representa información detallada sobre una persona, incluyendo datos personales, dirección y hobbies.

// En un contexto de programación, este objeto JSON podría ser utilizado para varias finalidades, tales como:
// Intercambio de datos: Enviar o recibir datos entre un cliente y un servidor en una aplicación web.
// Almacenamiento de datos: Guardar información en una base de datos o en un archivo local.
// Visualización de datos: Mostrar la información de la persona en una interfaz de usuario.