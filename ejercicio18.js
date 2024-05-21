// 18. Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
// mostrar solo los nombres que comiencen con "A").

// Realizar la llamada al archivo JSON
fetch('datos18.json')
  // Parsear la respuesta como JSON
  .then(response => response.json())
  .then(data => {
    // Una vez que los datos JSON están disponibles, se ejecuta este bloque de código
    console.log('Nombres que comienzan con "D":');
    // Muestra un mensaje en la consola indicando los nombres que comienzan con "D"
    
    // Filtrar los datos para mostrar solo los nombres que comienzan con "D"
    const nombresFiltrados = data.filter(item => item.nombre.startsWith('D'));
    
    nombresFiltrados.forEach(item => {
      // Itera sobre cada elemento del array de nombres filtrados
      console.log(item.nombre);
      // Muestra el nombre de cada elemento en la consola
    });
  })
  // Manejar cualquier error que pueda ocurrir durante el proceso de carga del archivo JSON
.catch(error => console.error('Error al cargar el archivo JSON:', error));


// Realizar una llamada a un archivo local en formato JSON.
// Utilizar el método .then() para manejar los datos obtenidos después de la llamada.
// Filtrar los datos para mostrar solo los elementos que cumplan ciertos criterios específicos.
// Como ejemplo de criterio, se menciona mostrar solo los nombres que comiencen con la letra "A".

// Realizar la llamada al archivo JSON (fetch('datos18.json')): Este es el punto de inicio del proceso. Utilizamos 
//la función fetch() para realizar una solicitud HTTP y obtener el contenido del archivo JSON llamado "datos18.json".
// Esta función devuelve una promesa que representa la respuesta a esta solicitud.

// Parsear la respuesta como JSON (.then(response => response.json())): Después de que la respuesta del servidor esté
// disponible, encadenamos el método .then() para procesar la respuesta. Utilizamos el método .json() para convertir 
// la respuesta en formato JSON. Este método devuelve una promesa que se resuelve con el cuerpo de la respuesta como 
// un objeto JavaScript.

// Filtrar los datos (.then(data => { ... })): Una vez que los datos JSON están disponibles, encadenamos otro método 
// .then() para realizar acciones con los datos obtenidos. En este bloque, filtramos los datos para mostrar solo
// los elementos cuyo nombre comienza con la letra "D". Utilizamos el método .filter() para esto, que crea un nuevo
// array con todos los elementos que cumplen con el criterio especificado en la función de filtrado.

// Mostrar los nombres filtrados en la consola (console.log('Nombres que comienzan con "D":'); ... 
// console.log(item.nombre);): Dentro del bloque .then(), mostramos un mensaje en la consola indicando que vamos a 
// mostrar los nombres que comienzan con "D". Luego, utilizamos un bucle forEach() para iterar sobre el array filtrado 
// y mostrar cada nombre que cumpla con el criterio en la consola.

// Manejar cualquier error (.catch(error => console.error('Error al cargar el archivo JSON:', error))): Finalmente, 
// encadenamos el método .catch() para manejar cualquier error que pueda ocurrir durante el proceso de carga del archivo
// JSON. Si hay un error, se muestra un mensaje de error en la consola utilizando console.error().

// En resumen, este código realiza una solicitud para obtener un archivo JSON, lo analiza, filtra los datos según 
// ciertos criterios, muestra los resultados filtrados en la consola y maneja cualquier error que pueda ocurrir durante
// el proceso de carga del archivo JSON.

// En resumen, forEach se utiliza para iterar sobre los elementos de un array y ejecutar una función para cada uno de
// ellos, mientras que startsWith se utiliza para determinar si una cadena comienza con los caracteres de otra cadena. 
// En el ejemplo dado, forEach se utiliza para iterar sobre un array de objetos y mostrar los nombres de las personas 
// en la consola, mientras que startsWith se utiliza para filtrar los nombres que comienzan con una letra específica.

// [
//    {"nombre": "Darly", "edad": 18, "ciudad": "Bucaramanga"},
//    {"nombre": "Angel", "edad": 30, "ciudad": "Medellín"},
//   {"nombre": "Dayana", "edad": 22, "ciudad": "Bogotá"},
//    {"nombre": "Miguel", "edad": 20, "ciudad": "Cali"}
// ]
// Lo que tenemos aquí es un array de objetos JSON. Cada objeto representa información sobre una persona con tres 
// propiedades: "nombre", "edad" y "ciudad". 

// [ {"nombre": "Darly", "edad": 18, "ciudad": "Bucaramanga"}, {"nombre": "Angel", "edad": 30, "ciudad": "Medellín"}, 
// {"nombre": "Dayana", "edad": 22, "ciudad": "Bogotá"}, {"nombre": "Miguel", "edad": 20, "ciudad": "Cali"} ]

// El [ al inicio y ] al final indican que este es un array de objetos JSON.
// Cada conjunto de {} representa un objeto JSON individual dentro del array.
// Dentro de cada objeto, "nombre", "edad" y "ciudad" son las claves y sus respectivos valores son los datos asociados
// a esas claves.
// Por ejemplo, el primer objeto representa a una persona llamada "Darly" de 18 años de edad que vive en "Bucaramanga".