// 17.Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos obtenidos en la consola.

// JSON significa "JavaScript Object Notation" (Notación de Objetos de JavaScript). Es un formato de intercambio de 
// datos que es fácil de leer y escribir para los humanos, así como fácil de interpretar y generar para las máquinas. 
// Es un formato de texto que es independiente del lenguaje de programación, pero se utiliza comúnmente en JavaScript 
// debido a su relación con JavaScript.

// Realiza una llamada para obtener el contenido del archivo JSON "datos17.json"
fetch('datos17.json')
  // Cuando la respuesta llega, la convierte en formato JSON
  .then(response => response.json())
  // Después de que los datos JSON estén disponibles, realiza estas acciones
  .then(data => {
    // Muestra un mensaje en la consola
    console.log('Datos obtenidos:');
    // Muestra los datos JSON en la consola
    console.log(data);
})
  // Maneja cualquier error que pueda ocurrir durante el proceso de carga del archivo JSON
.catch(error => console.error('Error al cargar el archivo JSON:', error));


// El ejercicio está pidiendo que realices una llamada a un archivo JSON local, luego muestres los datos obtenidos en 
// formato JSON en la consola.

// fetch('datos17.json'): Este es el punto de inicio. Utilizamos la función fetch() para realizar una solicitud HTTP 
// para obtener el contenido del archivo JSON llamado "datos17.json". Esta función devuelve una promesa que representa 
// la respuesta a esta solicitud.

// En resumen, fetch es una función de JavaScript que se utiliza para realizar solicitudes HTTP desde el navegador web,
// mientras que HTTP es el protocolo subyacente que define cómo se comunican el cliente y el servidor en la web. Usamos
// fetch para hacer solicitudes HTTP y trabajar con los datos recibidos en el navegador.

// .then(response => response.json()): Después de que la respuesta del servidor esté disponible, utilizamos el método
// .then() para encadenar una función que convierte la respuesta en formato JSON. El método response.json() analiza la 
// respuesta HTTP como JSON y devuelve una promesa que resuelve con el cuerpo de la respuesta como un objeto JavaScript.

// .then(data => { ... }): Una vez que los datos JSON están disponibles, encadenamos otro método .then() para realizar 
// acciones con los datos obtenidos. En este caso, mostramos un mensaje en la consola indicando que los datos fueron 
// obtenidos y luego mostramos los datos en sí mismos utilizando console.log().

// .catch(error => console.error('Error al cargar el archivo JSON:', error)): Finalmente, encadenamos el método 
// .catch() para manejar cualquier error que pueda ocurrir durante el proceso de carga del archivo JSON. Si hay un error,
// mostramos un mensaje de error en la consola utilizando console.error().

// En resumen, este código realiza una solicitud para obtener un archivo JSON, analiza la respuesta para convertirla en
// un objeto JavaScript, y luego muestra los datos obtenidos en la consola. Además, maneja cualquier error que pueda 
// ocurrir durante este proceso.

// En resumen, .then se utiliza para manejar el resultado de una promesa una vez que se resuelve, permitiendo que 
// ejecutes código específico dependiendo de si la promesa se resuelve correctamente o si ocurre un error.

// {
//    "nombre": "Darly",
//    "edad": 18,
//    "ciudad": "Bucaramanga"
//}

// "nombre": "Darly": Este es un par clave-valor dentro del objeto JSON. La clave es "nombre" y el valor es "Darly". 
// Este par clave-valor asigna el nombre "Darly" a la propiedad "nombre" del objeto.

// "edad": 18: Otro par clave-valor dentro del objeto JSON. La clave es "edad" y el valor es 18. Aquí, la propiedad "edad"
// se establece en 18.

// "ciudad": "Bucaramanga": Este es otro par clave-valor. La clave es "ciudad" y el valor es "Bucaramanga". Así, la 
// propiedad "ciudad" se establece en "Bucaramanga".

// En conjunto, este objeto JSON representa información sobre una persona. Tiene tres propiedades: "nombre", "edad" y 
// "ciudad", cada una con su respectivo valor asociado. 












