"use strict";

document.getElementById("btn").onclick = function () {
  var data1 = parseInt(document.getElementById("x1").value);
  var data2 = parseInt(document.getElementById("x2").value);
  var data3 = parseInt(document.getElementById("x3").value);

  var marks = "";
  var percent = "";
  var grade = " ";
  
  
  marks = data1 + data2 + data3;
  var m = parseInt(marks);
  percent = (m/ 300) * 100;
  var result = parseInt(percent);
  console.log(result);
  console.log(typeof(result));
  if (result <= 60 && result > 45) {
    grade = "C";
  } else if (result <= 80 && result > 60) {
    grade = "B";
  } else if (result <= 90 && result > 80) {
    grade = "A";
  } else if (result <= 100 && result > 90) {
    grade = "A+";
  } else {
    grade = "Fail !!!";
  }

  document.getElementById("y1").innerHTML = "Total Marks: " + marks;
  document.getElementById("y2").innerHTML =
    "Percentage: " + percent + "%";
  document.getElementById("y3").innerHTML = "Grade: " + grade;

  if (grade != "Fail !!!") {
 
    Highcharts.chart("container", {
      chart: {
        type: "variablepie",
      },
      title: {
        text: "Subjects Marks",
        align: "left",
      },
      tooltip: {
        headerFormat: "",
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> <b> ' +
          "{point.name}</b><br/>" +
          "Marks: <b>{point.y}</b><br/>",
      },
      series: [
        {
          minPointSize: 10,
          innerSize: "20%",
          zMin: 0,
          name: "Marks",
          borderRadius: 5,
          data: [
            {
              name: "Physics",
              y: data1,
            },
            {
              name: "Chemistry",
              y: data2,
            },
            {
              name: "Mathematics",
              y: data3,
            },
          ],
          colors: [
            "#4caefe",
            "#3dc3e8",
            "#2dd9db",
            "#1feeaf",
            "#0ff3a0",
            "#00e887",
            "#23e274",
          ],
        },
      ],
    });
    // chart script end
  }
};
