const prompt = require("prompt-sync")({ sigint: true });

let estudiantes = [];

function agregarOActualizarEstudiante() {
    let nombre = prompt("Ingrese el nombre del estudiante: ").trim();
    let materias = ["Matematicas", "Lengua", "Sociales", "Naturales"];
    let estudiante = estudiantes.find(e => e[0] === nombre);

    if (estudiante) {
        console.log("El estudiante ya existe. Puedes actualizar sus notas.");
    } else {
        estudiante = [nombre, []];
        estudiantes.push(estudiante);
    }

    materias.forEach(materia => {
        let nota = parseInt(prompt(`Ingrese la nota para ${materia} (o -1 para no cambiar): `));
        if (nota >= 0 && nota <= 10) {
            let materiaExistente = estudiante[1].find(m => m[0] === materia);
            if (materiaExistente) {
                materiaExistente[1] = nota;
            } else {
                estudiante[1].push([materia, nota]);
            }
        }
    });

    console.log("Registro actualizado.");
}

function mostrarEstudiantes() {
    console.log("Lista de estudiantes y sus calificaciones:");
    console.log(estudiantes);
}

while (true) {
    console.log("\n1. Agregar/Actualizar estudiante\n2. Mostrar estudiantes\n3. Salir");
    let opcion = prompt("Seleccione una opción: ");
    if (opcion === "1") {
        agregarOActualizarEstudiante();
    } else if (opcion === "2") {
        mostrarEstudiantes();
    } else if (opcion === "3") {
        console.log("Saliendo...");
        break;
    } else {
        console.log("Opción inválida.");
    }
}