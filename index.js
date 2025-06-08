document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const audioToggle = document.getElementById('audio-toggle');
    const infoButton = document.getElementById('info-button');
    const container = document.getElementById('main-container');

    // Fade-in animation for container
    container.style.opacity = '0';
    container.style.transition = 'opacity 1s ease-in';
    setTimeout(() => {
        container.style.opacity = '1';
    }, 100);

    // Audio setup and error handling
    audio.addEventListener('canplay', () => {
        audioToggle.disabled = false;
        audioToggle.textContent = 'Pause Audio';
        audio.play().catch(err => {
            console.error('Audio playback failed:', err);
            audioToggle.textContent = 'Audio Unavailable';
            audioToggle.disabled = true;
        });
    });

    audio.addEventListener('error', () => {
        console.error('Error loading audio file.');
        audioToggle.textContent = 'Audio Unavailable';
        audioToggle.disabled = true;
        alert('Failed to load audio. Please check the file path or try again later.');
    });

    // Toggle audio playback
    audioToggle.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(err => {
                console.error('Audio playback failed:', err);
                alert('Unable to play audio. Please try again.');
            });
            audioToggle.textContent = 'Pause Audio';
            audioToggle.setAttribute('aria-label', 'Pause audio playback');
        } else {
            audio.pause();
            audioToggle.textContent = 'Play Audio';
            audioToggle.setAttribute('aria-label', 'Play audio playback');
        }
    });

    // Info button action
    infoButton.addEventListener('click', () => {
        alert('Welcome to The Kernel Community! Join our Discord or visit our Roblox link to get started.');
    });

    // Keyboard accessibility for info button
    infoButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            infoButton.click();
        }
    });
});
