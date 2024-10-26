// Función para aplicar efecto de aparición y zoom a las imágenes
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-image");
    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = "1";
            img.style.transform = "scale(1)";
        }, index * 500); // Intervalo para hacer que aparezcan secuencialmente
    });
});

