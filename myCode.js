$(document).ready(() => {
    for (x of top_schools_data) {
      $('.topschool').append(x.school + '</br>');
    }
    for (x of top_schools_data) {
      $('.topschoolapplicant').append(x.applicant + '</br>');
    }

    let cgpaArray = [];
    cgpa_data.map((data) => {
      cgpaArray.push(data.cgpa);
    });

    let cgpaArray2 = [];
    cgpa_data.map((data) => {
      cgpaArray2.push(data.count);
    })
    console.log(cgpaArray);
    console.log(cgpaArray2);
    var ctx = document.getElementById('canvas').getContext('2d');
    var barChartData = {
      labels: cgpaArray,
      datasets: [{
        borderWidth: 2,
        data: cgpaArray2
      }]
    }
    var chart = new Chart(ctx, {
      type: 'bar',
      data: barChartData,
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'CGPA Bar Chart'
        }
      }
    });

    //progress bar
    move();
    function move() {
      var elem = document.getElementById("progress1");
      var width = 1;
      var id = setInterval(frame, 40);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = width + '%';
        }
      }
    }
  })