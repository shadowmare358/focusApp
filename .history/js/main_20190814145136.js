const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus'),
pomBtn = document.getElementById('pomBtn'),
shortBt = document.getElementById('')

const showAmPm = true;
let counterFocus = 0;
let counterName = 0;

function showTime() {
    let today = new Date(),
    hour= today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds()

    const amPm = hour >= 12 ? 'PM' : 'AM';
 sec =
    hour = hour % 12 || 12;

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

function addZero(n) {
    return (parseInt(n,10) < 10 ? '0' : '') + n
}

function setBgGreet() {
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12){
        document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
        greeting.textContent = 'Good Morning';
    }else if(hour < 18){
        document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    }else{
        document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

function getName() {
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    }else{
        name.textContent = localStorage.getItem('name')
    }
}

function setName(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name',e.target.innerText);
            name.blur();
        }
    }else{
        localStorage.setItem('name',e.target.innerText)
    }
}

function getFocus() {
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]';
    }else{
        focus.textContent = localStorage.getItem('focus')
    }
}
function setFocus(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus',e.target.innerText);
            focus.blur();
        }
    }else{
        localStorage.setItem('focus',e.target.innerText)
    }
}
function setEmptyName(e){
    if(counterName === 0){
        e.target.innerText = ''
        counterName++;
    }

}
function setEmptyFocus(e){

    if(counterFocus === 0){
        e.target.innerText = ''
        counterFocus++;
    }

}
function setNameCounter(e){
    counterName = 0;
}
function setFocusCounter(e){
    counterFocus = 0;
}


name.addEventListener('keypress',setName);
name.addEventListener('blur',setName);
name.addEventListener('keydown',setEmptyName);
name.addEventListener('click',setNameCounter);
focus.addEventListener('keypress',setFocus);
focus.addEventListener('blur',setFocus);
focus.addEventListener('keydown',setEmptyFocus);
focus.addEventListener('click',setFocusCounter);

showTime();
setBgGreet();
getName();
getFocus();