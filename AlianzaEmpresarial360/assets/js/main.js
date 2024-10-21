// Obtener elementos del DOM
const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');

// Función para pausar/reproducir el video
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.classList.remove('fa-play'); // Quitar el ícono de "play"
        playPauseBtn.classList.add('fa-pause'); // Añadir el ícono de "pause"
    } else {
        video.pause();
        playPauseBtn.classList.remove('fa-pause'); // Quitar el ícono de "pause"
        playPauseBtn.classList.add('fa-play'); // Añadir el ícono de "play"
    }
});

// Función para silenciar/activar sonido
muteBtn.addEventListener('click', () => {
    video.muted = !video.muted; // Cambia el estado de mute
    muteBtn.classList.toggle('fa-volume-high'); // Cambiar a ícono de volumen alto
    muteBtn.classList.toggle('fa-volume-xmark'); // Cambiar a ícono de volumen bajo
});