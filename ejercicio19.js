// 19. Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica.

// Define una función asincrónica llamada obtenerEmpleadosYMostrarInformacion
async function obtenerEmpleadosYMostrarInformacion() {
    // Inicia un bloque de código que puede generar errores
    try {
      // Realiza una llamada al archivo JSON 'datos19.json' y espera la respuesta
      const response = await fetch('datos19.json');
      
      // Verifica si la respuesta es exitosa (código de estado 200)
      if (!response.ok) {
        // Si la respuesta no es exitosa, lanza un error con el mensaje especificado
        throw new Error('No se pudo obtener el archivo JSON');
      }
  
      // Parsea la respuesta como JSON y espera la conversión
      const empleados = await response.json();
  
      // Muestra información específica de los empleados en la consola
      console.log('Información de los empleados:');
      // Itera sobre cada empleado en la lista de empleados
      empleados.forEach(empleado => {
        // Muestra el nombre y departamento de cada empleado en la consola
        console.log(`Nombre: ${empleado.nombre}, Departamento: ${empleado.departamento}`);
      });
    } catch (error) {
      // Captura cualquier error que ocurra dentro del bloque try y muestra el mensaje de error
      console.error('Error:', error.message);
    }
  }
  
  // Llama a la función obtenerEmpleadosYMostrarInformacion para ejecutarla
obtenerEmpleadosYMostrarInformacion();


// crear una función asincrónica que realice una solicitud a un archivo local en formato JSON y,
// después de recibir los datos, manipule esa información para mostrar cierta información específica. Esencialmente,
// la tarea consiste en cargar un archivo JSON, procesar los datos y mostrar solo la información relevante.

// Esta línea define una función asincrónica llamada obtenerEmpleadosYMostrarInformacion, que realizará una serie de 
// tareas relacionadas con la obtención y visualización de información de empleados.

// Esta línea inicia un bloque try, que nos permite manejar cualquier error que pueda ocurrir durante la ejecución del 
// código contenido dentro del bloque.

// Aquí se realiza una llamada a un archivo JSON llamado datos19.json utilizando la función fetch(). La palabra clave
// await espera a que la promesa devuelta por fetch() se resuelva antes de continuar con la ejecución del código.

// Esta línea verifica si la respuesta obtenida del servidor es exitosa (código de estado 200). Si no es exitosa, 
// significa que hubo un problema al obtener el archivo JSON.

// Si la respuesta no es exitosa, se lanza un error utilizando la palabra clave throw y se proporciona un mensaje de 
// error. Este bloque if termina aquí.

// Si la respuesta es exitosa, se utiliza el método .json() para parsear la respuesta como JSON y se almacena en la 
// variable empleados. La palabra clave await se utiliza nuevamente para esperar a que la conversión se complete 
// antes de continuar.

// Se imprime un mensaje en la consola para indicar que se mostrará la información de los empleados.

// Se inicia un bucle forEach para iterar sobre cada elemento en el array de empleados.

// Dentro del bucle forEach, se imprime en la consola el nombre y el departamento de cada empleado. El bucle forEach 
// termina aquí

// Este bloque catch maneja cualquier error que ocurra dentro del bloque try.

// Si se produce un error, se imprime un mensaje de error en la consola que indica la naturaleza del error. 
// El bloque catch termina aquí.

// Finalmente, se llama a la función obtenerEmpleadosYMostrarInformacion() para ejecutarla y comenzar el proceso de 
// obtención y visualización de información de los empleados.

// fetch(): Es una función global de JavaScript que se utiliza para realizar solicitudes HTTP. Puede solicitar recursos
// a través de la red, como archivos JSON, y devolverá una promesa que eventualmente se resolverá con la respuesta a
// la solicitud. Se puede utilizar con métodos como then() para manejar la respuesta de la solicitud. En el contexto
// de este código, fetch() se utiliza para obtener el archivo JSON datos19.json del servidor.

// forEach(): Es un método de los arrays en JavaScript que se utiliza para iterar sobre cada elemento de un array.
// Toma una función de devolución de llamada como argumento y ejecuta esa función una vez por cada elemento en el array. 
// En este código, forEach() se utiliza para iterar sobre cada empleado en el array de empleados obtenidos del archivo
// JSON y mostrar su nombre y departamento en la consola.

// [
//    {"nombre": "Miguel", "edad": 35, "departamento": "Ventas"},
//   {"nombre": "María", "edad": 28, "departamento": "Recursos Humanos"},
//    {"nombre": "Angel", "edad": 40, "departamento": "Producción"},
//   {"nombre": "Laura", "edad": 32, "departamento": "Marketing"}
// ]

// Lo que se muestra aquí es un array de objetos en formato JSON. Cada objeto representa un empleado y contiene tres 
// propiedades: nombre, edad y departamento. Aquí tienes una explicación de cada objeto en el array:

// Miguel: Es un empleado con nombre "Miguel", de 35 años de edad, y trabaja en el departamento de Ventas.
// María: Es un empleado con nombre "María", de 28 años de edad, y trabaja en el departamento de Recursos Humanos.
// Angel: Es un empleado con nombre "Angel", de 40 años de edad, y trabaja en el departamento de Producción.
// Laura: Es un empleado con nombre "Laura", de 32 años de edad, y trabaja en el departamento de Marketing.
// En resumen, este array de objetos representa información de empleados, donde cada objeto contiene detalles 
// específicos de cada empleado, como su nombre, edad y departamento en la empresa.






