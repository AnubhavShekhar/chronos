'use strict';

const OPTIONS =     {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
};

// document.getElementById('sem').textContent = `Semester 6`;

let timetable;
let ttIndex = 0;

const SEM_BTNS = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"];
const semType = window.localStorage.getItem('type');
if (semType.endsWith('n')) {
    for (let i = 0; i < SEM_BTNS.length; i += 2) {
        document.getElementById(SEM_BTNS[i]).style.display = 'none';
    }
} else {
    for (let i = 1; i < SEM_BTNS.length; i += 2) {
        document.getElementById(SEM_BTNS[i]).style.display = 'none';
    }
}

function init(id) {
    fetch(`http://localhost:8000/timetables/${id}`, OPTIONS)
        .then(response => response.json())
        .then(data => later(allDays, data));
}

function addSlot(day, str, n) {
    for (let i = 1; i <= n; i++) {
        const slot = document.querySelector(`#${str}${i}`);
        day.push(slot);
    }
}

function later(days, timetable) {
    console.log({days, timetable});
    for (let i = 0; i < days.length; i++) {
        for (let j = 0; j < days[i].length; j++) {
            if (timetable[i][j].startsWith('NW') || timetable[i][j].startsWith('MIN')) {
                timetable[i][j] = 'NW/MP';
            }
            days[i][j].textContent = timetable[i][j];
        }
    }
}

function generateNew() {
    console.log('Clicked');
    fetch('http://localhost:8000/create', OPTIONS)
        .then(() => {
            init(6);
        });
}

const monday = [];
const tuesday = [];
const wednesday = [];
const thursday = [];
const friday = [];
const allDays = [monday, tuesday, wednesday, thursday, friday];

addSlot(monday, 'mon', 7);
addSlot(tuesday, 'tue', 7);
addSlot(wednesday, 'wed', 7);
addSlot(thursday, 'thu', 7);
addSlot(friday, 'fri', 6);

const rfBtn = document.querySelector('#refresh');
rfBtn.addEventListener('click', generateNew);

const ddSem = ["S1","S2","S3","S4","S5","S6","S7","S8"];
// const ddSem = ["S2", "S4", "S6", "S8"];
var ddSel;
for (let i = 0; i < ddSem.length; i++) {
    ddSel = document.getElementById(`${ddSem[i]}`);
    console.log(ddSel);
    if(ddSel.id == "S1" || ddSel.id == "S2"){
        ddSel.onclick = function (){
            location.href = 'special.html'
        }
    }
    ddSel.addEventListener('click', () => {
        document.getElementById('sem').textContent = `Semester ${i + 1}`;

        init(i + 1);
    });
}

init(6);