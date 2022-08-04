const ddTypeVal = ["Odd", "Even"];
const ddType = ["I1", "I2"];
const ODD = ["S3", "S5", "S7"];
const EVEN = ["S2", "S4", "S6", "S8"];

const OPTIONS = {
  method: 'GET',
  mode: 'cors',
  headers: {
      'Access-Control-Allow-Origin': '*',
  },
};

const TYPE = window.localStorage.getItem('type');
if (TYPE.endsWith('n')) {
  document.getElementById('type').textContent = 'Even';
  for (let j = 0; j < ODD.length; j++) {
    console.log(document.getElementById(ODD[j]));
    document.getElementById(ODD[j]).style.display = 'none'
  }

  for (let j = 0; j < EVEN.length; j++) {
    document.getElementById(EVEN[j]).style.display = 'flex';
  }
} else {
  document.getElementById('type').textContent = 'Odd';
  for (let j = 0; j < EVEN.length; j++) {
    document.getElementById(EVEN[j]).style.display = 'none';
  }
  for (let j = 0; j < ODD.length; j++) {
    document.getElementById(ODD[j]).style.display = 'flex';
  }    
}

for (let i = 0; i < ddTypeVal.length; i++) {
  const typeSel = document.getElementById(`${ddType[i]}`);
  typeSel.addEventListener('click', () => {
    document.getElementById('type').textContent = `${ddTypeVal[i]}`;
    window.localStorage.setItem('type', ddTypeVal[i].toLowerCase());
    // Display only semester based on odd/even selection
    if (window.localStorage.getItem('type').endsWith('n')) {
      // document.getElementById('sem').textContent = `Semester`;
      for (let j = 0; j < ODD.length; j++) {
        console.log(document.getElementById(ODD[j]));
        document.getElementById(ODD[j]).style.display = 'none'
      }

      for (let j = 0; j < EVEN.length; j++) {
        document.getElementById(EVEN[j]).style.display = 'flex';
      }
    } else {
      for (let j = 0; j < EVEN.length; j++) {
        document.getElementById(EVEN[j]).style.display = 'none';
      }
      for (let j = 0; j < ODD.length; j++) {
        document.getElementById(ODD[j]).style.display = 'flex';
      }      
    }
  });
}

document.getElementById('S2').addEventListener('click', () => location.href = 'ipsem2.html');
document.getElementById('S3').addEventListener('click', () => location.href = 'ipsem3.html');
document.getElementById('S4').addEventListener('click', () => location.href = 'ipsem4.html');
document.getElementById('S5').addEventListener('click', () => location.href = 'ipsem5.html');
document.getElementById('S6').addEventListener('click', () => location.href = 'ipsem6.html');
document.getElementById('S7').addEventListener('click', () => location.href = 'ipsem7.html');
document.getElementById('S8').addEventListener('click', () => location.href = 'ipsem8.html');

const POST_OPTIONS = {
  method: 'POST',
  mode: 'no-cors',
  headers: {
      'Access-Control-Allow-Origin': '*',
  },
};


const submitBtn = document.getElementById('sbmit');
submitBtn.addEventListener('click', () => {
  let formData = {};
  for (let i = 1; i <= 7; i++) {
    const teacher = document.getElementById(`container-teacher-${i}`);
    const tvalue = teacher.options[teacher.selectedIndex].value;
    const subject = document.getElementById(`container-subject-${i}`);
    const svalue = subject.options[subject.selectedIndex].value;
    console.log({tvalue, svalue})

    formData[tvalue] = svalue;
    POST_OPTIONS.body = JSON.stringify(formData);
  }
  // return;
  console.log(formData);
  
  fetch('http://localhost:8000/remap', POST_OPTIONS)
    .then(() => fetch('http://localhost:8000/create', OPTIONS));
});

const generateBtn = document.getElementById('gnrate');
generateBtn.addEventListener('click', () => {
  fetch('http://localhost:8000/create', OPTIONS);
})

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
