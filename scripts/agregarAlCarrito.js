
function agregarAlCarrito(nombre, precio) {
    // Crear un elemento de lista para mostrar el producto en el carrito
    var listaProductos = document.getElementById("lista-productos");
    var nuevoProducto = document.createElement("li");
    nuevoProducto.textContent = nombre + " - $" + precio;
    listaProductos.appendChild(nuevoProducto);

    // Actualizar el total del carrito
    var totalCarrito = document.getElementById("total");
    totalCarrito.textContent = parseInt(totalCarrito.textContent) + precio;
}

function aumentarCantidad() {
    var spanCantidad = document.getElementById("cuenta-carrito");
    var cantidadActual = parseInt(spanCantidad.innerText);
    cantidadActual++; // Incrementa la cantidad
    spanCantidad.innerText = cantidadActual; // Actualiza el texto del span
  }