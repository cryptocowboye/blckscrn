import { Timer } from 'easytimer.js';

const timer = new Timer();
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn")


timer.addEventListener('secondsUpdated', (e) => {
    document.getElementById('test').innerText = timer.getTimeValues().toString();
});

startBtn.addEventListener('click', () => {
    timer.start({ countdown: true, startValues: { seconds: 25 * 60 } });
})

pauseBtn.addEventListener('click', () => {
    timer.pause();
})

resetBtn.addEventListener('click', () => {
    timer.reset();
})

