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

    // Force audio reload and attempt playback when ready
    audio.load();
    audio.addEventListener('canplaythrough', () => {
        audio.muted = false; // Ensure un-muted
        audio.play().then(() => {
            audioMessage.textContent = 'Audio playing...';
        }).catch(err => {
            console.error('Playback failed after loading:', err);
            audioMessage.textContent = 'Audio failed to play. Check console.';
        });
    });

    // Fallback: Play on first user interaction
    document.addEventListener('click', () => {
        if (audio.paused || audio.muted) {
            audio.muted = false;
            audio.play().then(() => {
                audioMessage.textContent = 'Audio playing...';
            }).catch(err => {
                console.error('Manual playback failed:', err);
                audioMessage.textContent = 'Audio unavailable. Check console.';
            });
        }
    }, { once: true });

    // Audio error handling
    audio.addEventListener('error', () => {
        console.error('Error loading audio file. Details:', audio.error);
        audioMessage.textContent = 'Audio failed to load. Error: ' + audio.error.code;
        alert('Audio error. Verify path: audio/bailo.mp3. Code: ' + audio.error.code);
    });
});
