import { Timer } from 'easytimer.js';

const timer = new Timer();

timer.start({ startValues: { seconds: 10 } });
timer.addEventListener('secondsUpdated', (e) => {
    document.getElementById('test').innerText = timer.getTimeValues().toString();
});

