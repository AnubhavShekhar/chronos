'use strict';

const OPTIONS =     {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
};

let timetable;
let ttIndex = 0;

function init() {
    fetch(`http://localhost:8000/timetable/${ttIndex}`, OPTIONS)
        .then(response => response.json())
        .then(data => later(allDays, data));
}

function addSlot(day, str, n) {
    for (let i = 1; i <= n; i++) {
        const slot = document.querySelector(`#${str}${i}`);
        day.push(slot);
    }
}

function later(days, {timetable}) {
    console.log({days, timetable});
    for (let i = 0; i < days.length; i++) {
        for (let j = 0; j < days[i].length; j++) {
            if (timetable[i][j].startsWith('NW')) {
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
            init();
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
var ddSel;
for (let i = 0; i < 8; i++) {
    ddSel = document.getElementById(`${ddSem[i]}`);
    console.log(ddSel);
    ddSel.addEventListener('click', () => {
        console.log('clik');
        generateNew();
        document.getElementById('sem').textContent = `Semester ${i + 1}`;
        console.log(ddSel.textContent);
    });

}
const ddDeptVal = ["CSE","ME","CE","ECE","EE"];
const ddDept = ["D1","D2","D3","D4","D5"];

for ( let i = 0 ; i < 5 ; i++)
{
    let deptSel = document.getElementById(`${ddDept[i]}`);
    deptSel.addEventListener('click', () =>{
        document.getElementById('dept').textContent = `${ddDeptVal[i]}`
    })
}
init();