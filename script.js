let time;
let interval;
let paused = false;

function startTimer() {
    if (!paused) {
        time = document.getElementById("inputTime").value;
    }
    
    let display = document.getElementById("displayTime");

    if (isNaN(time) || time <= 0) {
        alert("Por favor, insira um número válido!");
        return;
    }

    interval = setInterval(() => {
        if (time <= 0) {
            clearInterval(interval);
            display.textContent = "Tempo esgotado!";
        } else {
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            display.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
            if (time <= 10) {
                display.classList.add("warning");
            } else {
                display.classList.remove("warning");
            }
            time--;
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(interval);
    paused = true;
}

function resetTimer() {
    clearInterval(interval);
    document.getElementById("displayTime").textContent = "00:00";
    document.getElementById("displayTime").classList.remove("warning");
    paused = false;
}
