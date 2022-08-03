const ddTypeVal = ["Odd","Even"];
const ddType = ["I1","I2"];
const ddSem = ["S1","S2","S3","S4","S5","S6","S7","S8"];

const OPTIONS =     {
  method: 'GET',
  mode: 'cors',
  headers: {
      'Access-Control-Allow-Origin': '*',
  },
};


for (let i = 0; i < 2 ;i++) {
  const typeSel = document.getElementById(`${ddType[i]}`);
  typeSel.addEventListener('click', () => {
    document.getElementById('type').textContent = `${ddTypeVal[i]}`;
    window.localStorage.setItem('type', ddTypeVal[i].toLowerCase());

    // Display only semester based on odd/even selection
    if (typeSel.innerText.endsWith('n')) {
      document.getElementById('sem').textContent = `Semester`;
        for (let j = 0; j < ddSem.length; j++) {
            if (j % 2 == 1) {
                document.getElementById(ddSem[j]).style.display = 'flex';
            } else {
                document.getElementById(ddSem[j]).style.display = 'none';
            }
        }
    } else {
        document.getElementById('sem').textContent = `Semester`;
        for (let j = 0; j < ddSem.length; j++) {
            if (j % 2 == 0) {
                document.getElementById(ddSem[j]).style.display = 'flex';
            } else {
                document.getElementById(ddSem[j]).style.display = 'none';
            }
        }
    }
  });
}

for (let i = 0; i < ddSem.length; i++) {
    const ddSel = document.getElementById(`${ddSem[i]}`);
    ddSel.style.display = 'none';
    ddSel.addEventListener('click', () => {
        document.getElementById('sem').textContent = `Semester ${i + 1}`;
        if( ddSel.id == "S2"){
                location.href = 'ipsem2.html';
        }
        else if( ddSel.id == "S3"){
          location.href = 'ipsem3.html'
        }
        else if( ddSel.id == "S4"){
          location.href = 'ipsem4.html'
        }
        else if( ddSel.id == "S5"){
          location.href = 'ipsem5.html'
        }
        else if( ddSel.id == "S6"){
          location.href = 'ipsem6.html'
        }
        else if( ddSel.id == "S7"){
          location.href = 'ipsem7.html'
        }
        else if( ddSel.id == "S8"){
          location.href = 'ipsem8.html'
        }

        fetchSem(i + 1);
    });
}

async function fetchSem(sem) {
  fetch(`http://localhost:8000/classes/${sem}`, OPTIONS)
    .then(response => response.json())
    .then(data => console.log(data));
}

// const ddDeptVal = ["CSE","ME","CE","ECE","EE"];
// const ddDept = ["D1","D2","D3","D4","D5"];

// for ( let i = 0 ; i < 5 ; i++)
// {
//     let deptSel = document.getElementById(`${ddDept[i]}`);
//     deptSel.addEventListener('click', () =>{
//         document.getElementById('dept').textContent = `${ddDeptVal[i]}`;
//     });
// }

$("select").on("click" , function() {
  
    $(this).parent(".container-teacher-1").toggleClass("open");
    var selection = $(this).find("option:selected").text(),
    labelFor = $(this).attr("id"),
    label = $("[for='" + labelFor + "']");
  
    label.find(".label-desc").html(selection);
    
  });
  
  $("select").on("click" , function() {
  
    $(this).parent(".container-subject-1").toggleClass("open");
    var selection = $(this).find("option:selected").text(),
    labelFor = $(this).attr("id"),
    label = $("[for='" + labelFor + "']");
  
    label.find(".label-desc").html(selection);
    
  });
