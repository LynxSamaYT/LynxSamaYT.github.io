document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const audioToggle = document.getElementById('audio-toggle');
    const container = document.getElementById('main-container');

    // Fade-in animation for container
    container.style.opacity = '0';
    container.style.transition = 'opacity 1s ease-in';
    setTimeout(() => {
        container.style.opacity = '1';
    }, 100);

    // Attempt to autoplay audio
    function tryPlayAudio() {
        audio.play().then(() => {
            audioToggle.textContent = 'Pause Audio';
            audioToggle.setAttribute('aria-label', 'Pause audio playback');
        }).catch(err => {
            console.error('Autoplay failed:', err);
            audioToggle.disabled = false;
            audioToggle.textContent = 'Play Audio (Click to Start)';
            audioToggle.setAttribute('aria-label', 'Play audio playback manually');
        });
    }

    // Initial autoplay attempt
    tryPlayAudio();

    // Audio toggle functionality
    audioToggle.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().then(() => {
                audioToggle.textContent = 'Pause Audio';
                audioToggle.setAttribute('aria-label', 'Pause audio playback');
            }).catch(err => {
                console.error('Audio playback failed:', err);
                alert('Unable to play audio. Check the file path or browser settings.');
                audioToggle.textContent = 'Audio Unavailable';
                audioToggle.disabled = true;
            });
        } else {
            audio.pause();
            audioToggle.textContent = 'Play Audio';
            audioToggle.setAttribute('aria-label', 'Play audio playback');
        }
    });

    // Audio error handling
    audio.addEventListener('error', () => {
        console.error('Error loading audio file. Details:', audio.error);
        audioToggle.textContent = 'Audio Unavailable';
        audioToggle.disabled = true;
        alert('Failed to load audio. Please verify the file path: audio/MONTAGEM BAILÃO.mp3. Error: ' + audio.error.code);
    });

    // Retry autoplay on user interaction (e.g., button click)
    document.addEventListener('click', tryPlayAudio, { once: true });
});
