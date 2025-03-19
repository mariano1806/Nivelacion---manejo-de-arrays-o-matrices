// Función para solicitar los datos y mostrar la lista
function ingresarDatos() {
    const personas = [];
    const cantidad = parseInt(prompt("Ingrese el número de personas a registrar:"));
    
    for (let i = 0; i < cantidad; i++) {
        const nombre = prompt(`Ingrese el nombre de la persona ${i + 1}:`);
        const edad = parseInt(prompt(`Ingrese la edad de ${nombre}:`));
        const nota = parseFloat(prompt(`Ingrese la nota de ${nombre}:`));
        
        // Almacenar los datos en un array
        personas.push([nombre, edad, nota]);
    }
    
    // Mostrar la lista de personas tal como fueron ingresadas
    console.log("Listado de personas ingresadas:");
    console.table(personas);
    
    // Ordenar la lista por la nota de mayor a menor
    personas.sort((a, b) => b[2] - a[2]);
    
    // Mostrar la lista ordenada por nota
    console.log("Listado ordenado por nota (de mayor a menor):");
    console.table(personas);
}

// Llamada a la función para iniciar el proceso
ingresarDatos();
