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

    hour = hour % 12 || 12;

    time.innerHTML = `{}`


}
