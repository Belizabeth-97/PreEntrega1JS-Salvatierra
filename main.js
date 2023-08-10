
// Bloque de código de bienvenida y selección de opciones
const msjBienvenida = () => {
    alert("¡Bienvenido a Felicitas!");
    let nombreCliente = prompt("Ingrese su nombre");
    
    if (nombreCliente.trim() === "") {
        alert("No ingresaste nombre");
    } else {
        alert("Hola, " + nombreCliente + ". Para continuar presione el botón ACEPTAR.");
    }
};

const selectProducts = () => {
    const productos = [
        { id: 1, nombre: "Conjunto Roma", precio: 25300 },
        { id: 2, nombre: "Sastrero Mia", precio: 11400 },
        { id: 3, nombre: "Sweater Victoria", precio: 5600 }
    ];

    const accesorios = [
        { id: 1, nombre: "Anillo cobra", precio: 5300 },
        { id: 2, nombre: "Aros Renata", precio: 4400 },
        { id: 3, nombre: "Collar estrellas", precio: 3600 }
    ];
}

// Función para mostrar opciones
const selectOption = () => {
    const opcionProductos = 1;
    const opcionAccesorios = 2;

    const eleccion = Number(prompt("Elige: 1 - Productos, 2 - Accesorios"));

    if (eleccion === opcionProductos) {
        mostrarOpciones(productos);
    } else if (eleccion === opcionAccesorios) {
        mostrarOpciones(accesorios);
    } else {
        alert("Eleccion inválida");
    }
};

// Función para mostrar opciones y obtener elección
const mostrarOpciones = (lista) => {
    let mensaje = "Elige una opción:\n";

    for (let i = 0; i < lista.length; i++) {
        mensaje += `${i + 1} - ${lista[i].nombre}\n`;
    }

    const eleccion = Number(prompt(mensaje)) - 1;

    if (eleccion >= 0 && eleccion < lista.length) {
        const itemElegido = lista[eleccion];
        alert(`Elegiste ${itemElegido.nombre}. El precio es $${itemElegido.precio}`);
    } else {
        alert("Eleccion inválida");
    }
};

// Ejecutar la función de selección al cargar la página
selectOption();





// Llamar a las funciones de bienvenida y selección de opciones
    msjBienvenida();
    selectOption();
    selectProducts ();