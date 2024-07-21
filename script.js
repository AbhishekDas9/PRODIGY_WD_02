let timer;
let seconds = 0;
let running = false;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const laps = document.getElementById('laps');

function updateTime() {
    seconds++;
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    hrs = hrs < 10 ? '0' + hrs : hrs;
    mins = mins < 10 ? '0' + mins : mins;
    secs = secs < 10 ? '0' + secs : secs;

    display.innerText = `${hrs}:${mins}:${secs}`;
}

startButton.addEventListener('click', () => {
    if (!running) {
        timer = setInterval(updateTime, 1000);
        running = true;
    }
});

pauseButton.addEventListener('click', () => {
    if (running) {
        clearInterval(timer);
        running = false;
    }
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    running = false;
    seconds = 0;
    display.innerText = '00:00:00';
    laps.innerHTML = '';
});

lapButton.addEventListener('click', () => {
    if (running) {
        const lapTime = document.createElement('li');
        lapTime.innerText = display.innerText;
        laps.appendChild(lapTime);
    }
});