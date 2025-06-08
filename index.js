document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const audioMessage = document.getElementById('audio-message');
    const container = document.getElementById('main-container');

    // Fade-in animation for container
    container.style.opacity = '0';
    container.style.transition = 'opacity 1s ease-in';
    setTimeout(() => {
        container.style.opacity = '1';
    }, 100);

    // Attempt to play audio when ready
    audio.addEventListener('canplaythrough', () => {
        audio.muted = false; // Un-mute after loading
        audio.play().catch(err => {
            console.error('Autoplay failed after loading:', err);
            audioMessage.textContent = 'Audio failed to play. Check console for details.';
        });
    });

    // Fallback: Un-mute and play on first user interaction
    document.addEventListener('click', () => {
        if (audio.muted) {
            audio.muted = false;
            audio.play().catch(err => {
                console.error('Playback failed on interaction:', err);
                audioMessage.textContent = 'Audio unavailable. Check file path or browser.';
            });
        }
    }, { once: true });

    // Audio error handling
    audio.addEventListener('error', () => {
        console.error('Error loading audio file. Details:', audio.error);
        audioMessage.textContent = 'Audio unavailable. Error: ' + audio.error.code;
        alert('Failed to load audio. Verify path: audio/MONTAGEM BAILÃO.mp3. Error code: ' + audio.error.code);
    });
});
