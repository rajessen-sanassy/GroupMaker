//TIME
var checked5 = JSON.parse(localStorage.getItem("myonoffswitch5"));
document.getElementById("myonoffswitch5").checked = checked5;

$('.onoffswitch5').on('click', function(e) {
    var checkbox5 = document.getElementById("myonoffswitch5");
    localStorage.setItem("myonoffswitch5", checkbox5.checked);
  });
var checkbox5 = document.getElementById("myonoffswitch5");

if (checkbox5.checked == true) {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var minutes1 = today.getMinutes();
  if (minutes < 10)
    minutes1 = "0" + minutes;
  var time = hours + "." + minutes1;
  console.log(time);
  if (time > 15.05 || time < 8.55) {
    //OUR OF SCHOOL TIMES
      window.location="main.html";
  } else if (time >= 13.46) {
     //1:46-3:05
     window.location="class4.html";
  } else if (time >= 12.26) {
    //12:26-1:45
      window.location="class3.html";
  } else if (time >= 11.31) {
    //11:31-12:25
      window.location="main.html";
  } else if (time >= 10.10) {
    //10:10-11:30
      window.location="class2.html";
  } else 
    //8:55-10:10
      window.location="class1.html";
    }