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
    
  });
  
  $(document).mouseup(function (e)
  {
      var container = $(".container-teacher-1");
  
      if (container.has(e.target).length === 0)
      {
          container.removeClass("open");
      }
  });
  
  
  $("select").on("change" , function() {
    
    var selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");
      
    label.find(".label-desc").html(selection);
      
  });

  $("select").on("click" , function() {
  
    $(this).parent(".container-subject-1").toggleClass("open");
    
  });
  
  $(document).mouseup(function (e)
  {
      var container = $(".container-subject-1");
  
      if (container.has(e.target).length === 0)
      {
          container.removeClass("open");
      }
  });
  
  
  $("select").on("change" , function() {
    
    var selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");
      
    label.find(".label-desc").html(selection);
      
  });
  
  
  $("select").on("click" , function() {
  
    $(this).parent(".container-teacher-2").toggleClass("open");
    
  });
  
  $(document).mouseup(function (e)
  {
      var container = $(".container-teacher-2");
  
      if (container.has(e.target).length === 0)
      {
          container.removeClass("open");
      }
  });
  
  
  $("select").on("change" , function() {
    
    var selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");
      
    label.find(".label-desc").html(selection);
      
  });

  $("select").on("click" , function() {
  
    $(this).parent(".container-subject-2").toggleClass("open");
    
  });
  
  $(document).mouseup(function (e)
  {
      var container = $(".container-subject-2");
  
      if (container.has(e.target).length === 0)
      {
          container.removeClass("open");
      }
  });
  
  
  $("select").on("change" , function() {
    
    var selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");
      
    label.find(".label-desc").html(selection);
      
  });

  $("select").on("click" , function() {
  
    $(this).parent(".container-teacher-3").toggleClass("open");
    
  });
  
  $(document).mouseup(function (e)
  {
      var container = $(".container-teacher-3");
  
      if (container.has(e.target).length === 0)
      {
          container.removeClass("open");
      }
  });
  
  
  $("select").on("change" , function() {
    
    var selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");
      
    label.find(".label-desc").html(selection);
      
  });

  $("select").on("click" , function() {
  
    $(this).parent(".container-subject-3").toggleClass("open");
    
  });
  
  $(document).mouseup(function (e)
  {
      var container = $(".container-subject-3");
  
      if (container.has(e.target).length === 0)
      {
          container.removeClass("open");
      }
  });
  
  
  $("select").on("change" , function() {
    
    var selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");
      
    label.find(".label-desc").html(selection);
      
  });

  $("select").on("click" , function() {
  
    $(this).parent(".container-teacher-4").toggleClass("open");
    
  });
  
  $(document).mouseup(function (e)
  {
      var container = $(".container-teacher-4");
  
      if (container.has(e.target).length === 0)
      {
          container.removeClass("open");
      }
  });
  
  
  $("select").on("change" , function() {
    
    var selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");
      
    label.find(".label-desc").html(selection);
      
  });

  $("select").on("click" , function() {
  
    $(this).parent(".container-subject-4").toggleClass("open");
    
  });
  
  $(document).mouseup(function (e)
  {
      var container = $(".container-subject-4");
  
      if (container.has(e.target).length === 0)
      {
          container.removeClass("open");
      }
  });
  
  
  $("select").on("change" , function() {
    
    var selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");
      
    label.find(".label-desc").html(selection);
      
  });

  $("select").on("click" , function() {
  
    $(this).parent(".container-teacher-5").toggleClass("open");
    
  });
  
  $(document).mouseup(function (e)
  {
      var container = $(".container-teacher-5");
  
      if (container.has(e.target).length === 0)
      {
          container.removeClass("open");
      }
  });
  
  
  $("select").on("change" , function() {
    
    var selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");
      
    label.find(".label-desc").html(selection);
      
  });

  $("select").on("click" , function() {
  
    $(this).parent(".container-subject-5").toggleClass("open");
    
  });
  
  $(document).mouseup(function (e)
  {
      var container = $(".container-subject-5");
  
      if (container.has(e.target).length === 0)
      {
          container.removeClass("open");
      }
  });
  
  
  $("select").on("change" , function() {
    
    var selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");
      
    label.find(".label-desc").html(selection);
      
  });
  