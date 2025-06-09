document.addEventListener('DOMContentLoaded', () => {
    const playAudioButton = document.getElementById('playAudio');
    const backgroundMusic = document.getElementById('backgroundMusic');

    if (playAudioButton && backgroundMusic) {
        playAudioButton.addEventListener('click', () => {
            // Attempt to play the audio
            const playPromise = backgroundMusic.play();

            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        // Audio started playing successfully
                        console.log("Audio playback started.");
                        // Gradually fade out and hide the button
                        playAudioButton.style.opacity = '0';
                        setTimeout(() => {
                            playAudioButton.style.display = 'none';
                        }, 300); // Matches the CSS transition duration
                    })
                    .catch(error => {
                        // Autoplay was prevented or other error occurred
                        console.warn("Audio playback prevented or failed:", error);
                        // Optionally, provide user feedback that audio could not play
                        // You might want to keep the button visible or change its text
                        alert("La música no se pudo reproducir automáticamente. Por favor, asegúrate de que tu navegador lo permita.");
                        // Or just log and keep the button to allow retries
                        playAudioButton.style.display = 'block'; // Ensure button is visible if play fails
                        playAudioButton.style.opacity = '1';
                        playAudioButton.textContent = "Reintentar Música"; // Change button text
                    });
            }
        });
    } else {
        console.error("Missing audio player button or audio element.");
    }
});
