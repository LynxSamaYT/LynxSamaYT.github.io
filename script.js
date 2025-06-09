document.addEventListener('DOMContentLoaded', () => {
    const backgroundMusic = document.getElementById('backgroundMusic');

    if (backgroundMusic) {
        // Attempt to play the audio automatically
        const playPromise = backgroundMusic.play();

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    // Audio started playing successfully
                    console.log("Audio playback started automatically.");
                })
                .catch(error => {
                    // Autoplay was prevented or other error occurred
                    console.warn("Automatic audio playback prevented or failed:", error);
                    // You might want to provide a fallback like a button here,
                    // or just accept that auto-play won't work.
                    // For example, re-add a button to manually play:
                    // const playButton = document.createElement('button');
                    // playButton.textContent = "Play Music";
                    // playButton.id = "fallbackPlayMusic";
                    // document.body.appendChild(playButton);
                    // playButton.addEventListener('click', () => {
                    //     backgroundMusic.play().catch(e => console.error("Manual play failed:", e));
                    //     playButton.remove();
                    // });
                });
        }
    } else {
        console.error("Missing audio element with ID 'backgroundMusic'.");
    }
});
