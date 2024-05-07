// Seleccione el botón de carrito
const carritoBtn = document.getElementById('carrito-btn');

// Seleccione el elemento de total
const totalSpan = document.getElementById('total');

// Seleccione el elemento del label del total
const totalLabel = document.getElementById('total-label');

// Ocultar el total inicialmente
totalSpan.style.display = 'none';
totalLabel.style.display = 'none';

// Agregar un event listener al botón de carrito
carritoBtn.addEventListener('click', function() {
    // Toggle para mostrar u ocultar el total
    if (totalSpan.style.display === 'none') {
        totalSpan.style.display = 'inline';
        totalLabel.style.display = 'inline';
    } else {
        totalSpan.style.display = 'none';
        totalLabel.style.display = 'none';
    }
});
