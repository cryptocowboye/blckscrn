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

    startTimer(mins=25) {
        const [startBtn, pauseBtn, resetBtn] = [document.querySelector("#startBtn"), document.querySelector("#pauseBtn"), document.querySelector("#resetBtn")];

        const tmrInit = () => {
            document.getElementById('test').innerText = this.timer.getTimeValues().toString(['minutes', 'seconds']);
        }

        const strtFunc = () => {
            this.timer.start({ countdown: true, startValues: { seconds: mins * 60 } });
        }

        const psFunc = () => {
            this.timer.pause();
        }

        const rstFunc = () => {
            this.timer.reset();
            this.timer.pause();
            document.getElementById('test').innerText = `${this.timer.getTimeValues().toString(['minutes', 'seconds'])}`;
        }

        this.timer.addEventListener('secondsUpdated', tmrInit)

        startBtn.addEventListener('click', strtFunc)

        pauseBtn.addEventListener('click', psFunc)

        resetBtn.addEventListener('click', rstFunc)

        this.timer.addEventListener('targetAchieved', () => {
            this.timer.removeEventListener('secondsUpdated', tmrInit)
            startBtn.removeEventListener('click', strtFunc);
            pauseBtn.removeEventListener('click', psFunc);
            resetBtn.removeEventListener('click', rstFunc);
        }, { once: true })


    }

    startPomodoro() {
        this.startTimer(25);
    }
}


function pomodoroMain() {
    const pomo = new Pomodoro();
    pomo.startPomodoro();
}

pomodoroMain();

