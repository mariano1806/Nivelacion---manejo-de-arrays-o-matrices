def ingresar_datos():
    personas = []
    cantidad = int(input("Ingrese el número de personas a registrar: "))
    
    for i in range(cantidad):
        nombre = input(f"Ingrese el nombre de la persona {i + 1}: ")
        edad = int(input(f"Ingrese la edad de {nombre}: "))
        nota = float(input(f"Ingrese la nota de {nombre}: "))
        
        # Almacenar los datos en una lista
        personas.append([nombre, edad, nota])
    
    # Mostrar la lista de personas tal como fueron ingresadas
    print("Listado de personas ingresadas:")
    for persona in personas:
        print(persona)
    
    # Ordenar la lista por la nota de mayor a menor
    personas.sort(key=lambda x: x[2], reverse=True)
    
    # Mostrar la lista ordenada por nota
    print("Listado ordenado por nota (de mayor a menor):")
    for persona in personas:
        print(persona)

# Llamada a la función para iniciar el proceso
ingresar_datos()
