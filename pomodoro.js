import { Timer } from 'easytimer.js';

class Pomodoro {
    constructor() {
        this.timer = new Timer();
        this.cycles = 0;
    }

    getTime() {
        return this.timer;
    }

    getCycle() {
        return this.cycles;
    }

    startPomodoro() {
        const [startBtn, pauseBtn, resetBtn] = [document.querySelector("#startBtn"), document.querySelector("#pauseBtn"), document.querySelector("#resetBtn")];

        this.timer.addEventListener('secondsUpdated', () => {
            document.getElementById('test').innerText = this.timer.getTimeValues().toString();
        })

        startBtn.addEventListener('click', () => {
            this.timer.start({ countdown: true, startValues: { seconds: 25 * 60 } });
        })

        pauseBtn.addEventListener('click', () => {
            this.timer.pause();
        })

        resetBtn.addEventListener('click', () => {
            this.timer.reset();
        })
    }
}


function pomodoroMain() {
    const pomo = new Pomodoro();
    pomo.startPomodoro();
}

pomodoroMain();

