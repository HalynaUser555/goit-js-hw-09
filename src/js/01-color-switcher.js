function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]')
};
const timer = {
    itervalId: null,
    start() {
        this.itervalId = setInterval(() => {
            const color = getRandomHexColor();
            document.body.style.background = "" + color;
        }, 1000);
    },
    stop() {
        clearInterval(this.itervalId);
        this.itervalId = null;
    },
}
refs.startBtn.addEventListener('click', () => {
    timer.start();
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
})
refs.stopBtn.addEventListener('click', () => {
    timer.stop();
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
}
)