estudiantes = []

def agregar_o_actualizar_estudiante():
    nombre = input("Ingrese el nombre del estudiante: ").strip()
    materias = ["Matematicas", "Lengua", "Sociales", "Naturales"]
    
    estudiante = next((e for e in estudiantes if e[0] == nombre), None)

    if estudiante:
        print("El estudiante ya existe. Puedes actualizar sus notas.")
    else:
        estudiante = [nombre, []]
        estudiantes.append(estudiante)

    for materia in materias:
        try:
            nota = int(input(f"Ingrese la nota para {materia} (o -1 para no cambiar): "))
            if 0 <= nota <= 10:
                materia_existente = next((m for m in estudiante[1] if m[0] == materia), None)
                if materia_existente:
                    materia_existente[1] = nota
                else:
                    estudiante[1].append([materia, nota])
        except ValueError:
            print("Nota inválida.")

    print("Registro actualizado.")

def mostrar_estudiantes():
    print("Lista de estudiantes y sus calificaciones:")
    print(estudiantes)

while True:
    print("\n1. Agregar/Actualizar estudiante\n2. Mostrar estudiantes\n3. Salir")
    opcion = input("Seleccione una opción: ")
    if opcion == "1":
        agregar_o_actualizar_estudiante()
    elif opcion == "2":
        mostrar_estudiantes()
    elif opcion == "3":
        print("Saliendo...")
        break
    else:
        print("Opción inválida.")
