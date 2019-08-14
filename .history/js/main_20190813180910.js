const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus')

function showTime() {
    let today = new Date(),
    hour= today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds()

    const amPm = hour >= 12 ? 'PM' : 'AM';
 sec =
    hour = hour % 12 || 12;

    time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}`;

    setTimeout(showTime, 1000);
}

function addZero

showTime();
