const bgMusic = new Audio("music.mp3");

bgMusic.loop = true;
bgMusic.volume = 0.25;

window.addEventListener("load", () => {
    bgMusic.play().catch(() => {});
});

function startMusic() {
    bgMusic.play().catch(() => {});
}

document.addEventListener("click", startMusic, { once: true });
document.addEventListener("touchstart", startMusic, { once: true });
