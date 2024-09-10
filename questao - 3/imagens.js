document.addEventListener('DOMContentLoaded', () => {
    const zoomInButton = document.getElementById('zoom-in');
    const zoomOutButton = document.getElementById('zoom-out');
    const images = document.querySelectorAll('.zoomable');

    let scale = 1;

    function updateImageSize() {
        images.forEach(image => {
            image.style.transform = `scale(${scale})`;
        });
    }

    zoomInButton.addEventListener('click', () => {
        scale += 0.1;
        updateImageSize();
    });

    zoomOutButton.addEventListener('click', () => {
        scale = Math.max(0.1, scale - 0.1); // Impede que o zoom fique menor que 0.1
        updateImageSize();
    });
});
