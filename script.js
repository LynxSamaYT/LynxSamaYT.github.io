ddocument.addEventListener('DOMContentLoaded', () => {
  const playPrompt = document.getElementById('playPrompt');
  const audio = document.getElementById('musicaDeFondo');

  playPrompt.addEventListener('click', () => {
    audio.play().then(() => {
      playPrompt.style.display = 'none'; // Oculta el texto después de iniciar la música
    }).catch(error => {
      console.error('Error al reproducir el audio:', error);
    });
  });
});
