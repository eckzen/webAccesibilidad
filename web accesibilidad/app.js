document.getElementById('aumentarFuenteTexto').addEventListener('click', function() {
    // Obtenemos el tamaño actual del texto
    var currentSize = parseInt(window.getComputedStyle(document.body).fontSize);
    // Aumentamos el tamaño del texto en 2 píxeles
    document.body.style.fontSize = (currentSize + 2) + 'px';
});