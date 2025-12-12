let timerInterval;
let totalSeconds = 0;
function startTimer() {
    timerInterval = setInterval(() => {
        totalSeconds++;
        const mins = String(Math.floor(totalSeconds/60)).padStart(2,'0');
        const secs = String(totalSeconds%60).padStart(2,'0');
        document.getElementById('timer').textContent = `${mins}:${secs}`;
    },1000);
}
function pauseTimer() { clearInterval(timerInterval); }
function resetTimer() { clearInterval(timerInterval); totalSeconds=0; document.getElementById('timer').textContent='00:00'; }
window.onload = startTimer;
