function navBarFunctionality() {
    const trig = document.querySelector('#header-trigger');
    const header = document.querySelector('#blackscreen-header');
    const nav = document.querySelector("#blackscreen-nav");

    trig.addEventListener('mouseenter', () => {
        header.classList.remove('hidden');
        header.classList.add('visible');

        nav.style.visibility = 'visible';
    });

    trig.addEventListener('mouseleave', () => {
        header.classList.remove('visible');
        header.classList.add('hidden');
    })
}

async function wakeLockFunctionality() {

    try {
        wakeLock = await navigator.wakeLock.request('screen');
    } catch (e){
        console.error(`${e.name}: ${e.message}`);
    }
}

function reapplyWakelock() {
    document.addEventListener('visibilitychange', async () => {
        if (wakeLock !== null && document.visibilityState === 'visible') {
            await wakeLockFunctionality();
        }
    })
}

function fullScreen() {
    const el = document.querySelector('.blackscreen-main');

    el.addEventListener('dblclick', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            document.body.style.overflow = 'hidden';
        } else if (document.exitFullscreen) {
            document.body.style.overflow = 'auto';
            document.exitFullscreen();
        }
    })
}

let wakeLock = null;

fullScreen();
wakeLockFunctionality();
reapplyWakelock();
navBarFunctionality();
