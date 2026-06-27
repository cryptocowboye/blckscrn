import { Timer } from 'easytimer.js';

class Pomodoro {
    constructor(mins) {
        this.timer = new Timer({ countdown: true, startValues: { seconds: mins * 60 } });
        this.break = new Timer({ countdown: true, startValues: { seconds: (mins / 5) * 60 } });
        
        this.currentTimer = this.timer; 
        this.cycles = 0;

        this.playBtn = document.querySelector("#startBtn");
        this.pauseBtn = document.querySelector("#pauseBtn");
        this.resetBtn = document.querySelector("#resetBtn");
        this.display = document.getElementById('test');

        this.setupTimerEvents(this.timer, 'timer');
        this.setupTimerEvents(this.break, 'break');
        this.setupButtonListeners();

        this.updateDisplay();
    }

    updateDisplay() {
        this.display.innerText = this.currentTimer.getTimeValues().toString(['minutes', 'seconds']);
    }

    setupTimerEvents(timerInstance, type) {
        timerInstance.addEventListener('secondsUpdated', () => {
            if (this.currentTimer === timerInstance) this.updateDisplay();
        });

        timerInstance.addEventListener('targetAchieved', () => {
            timerInstance.reset();
            timerInstance.pause();
            
            if (type === 'timer') {
                this.currentTimer = this.break;
                this.cycles++;
            } else {
                this.currentTimer = this.timer;
            }
            
            this.updateDisplay();
        });
    }

    setupButtonListeners() {
        this.playBtn.addEventListener('click', () => this.currentTimer.start());
        this.pauseBtn.addEventListener('click', () => this.currentTimer.pause());
        this.resetBtn.addEventListener('click', () => {
            this.currentTimer.reset();
            this.currentTimer.pause();
            this.updateDisplay();
        });
    }

    init() {
        this.updateDisplay();
    }
}
function pomodoroMain() {
    const pomo = new Pomodoro(0.25);
    pomo.init();
}

pomodoroMain()

