import sound from '/rain.mp3'

function rainNavBarFunctionality() {
    const rainTrig = document.querySelector('#rain-header-trigger');
    const rainHeader = document.querySelector('#rainsounds-header');
    const rainNav = document.querySelector("#rainsounds-nav");

    rainTrig.addEventListener('mouseenter', () => {
        rainHeader.classList.remove('hidden');
        rainHeader.classList.add('visible');

        rainNav.style.visibility = 'visible';
    });

    rainTrig.addEventListener('mouseleave', () => {
        rainHeader.classList.remove('visible');
        rainHeader.classList.add('hidden');
    })
}

async function rainWakeLockFunctionality() {

    try {
        rainWakeLock = await navigator.wakeLock.request('screen');
    } catch (e){
        console.error(`${e.name}: ${e.message}`);
    }
}

function rainReapplyWakelock() {
    document.addEventListener('visibilitychange', async () => {
        if (rainWakeLock !== null && document.visibilityState === 'visible') {
            await rainWakeLockFunctionality();
        }
    })
}

function rainFullScreen() {
    const rainEl = document.querySelector('.blackscreen-main');

    rainEl.addEventListener('dblclick', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            document.body.style.overflow = 'hidden';
        } else if (document.exitFullscreen) {
            document.body.style.overflow = 'auto';
            document.exitFullscreen();
        }
    })
}

function playAudio() {
    const pBtn = document.querySelector("#rain-player");
    const rain = new Audio(sound);
    rain.loop = true;
    rain.volume = 0.5;

    pBtn.addEventListener('click', () => {
        if (rain.paused) {
            rain.play();
            pBtn.querySelector("#play-button").src = '/pause.png';
            if (pBtn.id === 'rain-player') {
                pBtn.id = 'rain-player-new'
            }
        } else {
            rain.pause();
            pBtn.querySelector('#play-button').src = '/play.png';
        }
    })
}

let rainWakeLock = null;

rainFullScreen();
rainWakeLockFunctionality();
rainReapplyWakelock();
rainNavBarFunctionality();
playAudio();