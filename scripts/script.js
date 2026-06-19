async function wakeLockFunctionality() {

    try {

        wakeLock = await navigator.wakeLock.request('screen');
        console.log("Wake Lock is active!")

        wakeLock.addEventListener('release', () => {
            console.log("Wake Lock has been released")
        });
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
