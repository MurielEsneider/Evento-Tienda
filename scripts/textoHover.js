document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento de texto
    const textoClick = document.querySelector('.texto-click');

    // Agregar un evento de clic al elemento de texto
    textoClick.addEventListener('click', function() {
        // Alternar la clase 'clicked' para aplicar o eliminar el efecto de clic
        this.classList.toggle('clicked');
    });
});

