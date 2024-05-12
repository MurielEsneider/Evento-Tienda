function vaciarCarrito() {
    // Obtener la lista de productos del carrito
    var listaProductos = document.getElementById("lista-productos");
    // Eliminar todos los elementos de la lista
    listaProductos.innerHTML = "";
    // Actualizar el total u otras acciones necesarias
    actualizarTotal();
  }

  function actualizarTotal() {
    document.getElementById("total").innerText = "0";

  }