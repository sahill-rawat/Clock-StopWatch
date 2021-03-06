window.onload = function(){
  document.getElementById("preloader").style.display = "none";
};

setInterval(() => {
  var d = new Date();
  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();

  var h = hour * 30 + min / 2;
  var m = 6 * min;
  var s = 6 * sec;

  var date = d.getDate();
  var month = d.getMonth();
  var year = d.getFullYear();
  var day = d.getDay();

  const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var dayname = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  document.getElementById("hour").style.transform = `rotate(${h}deg)`;
  document.getElementById("minute").style.transform = `rotate(${m}deg)`;
  document.getElementById("seconds").style.transform = `rotate(${s}deg)`;
  document.getElementById("date").textContent = date;
  document.getElementById("month").textContent = monthNames[month];
  document.getElementById("year").textContent = year;
  document.getElementById("day").textContent = dayname[day];
}, 1000);


function show()
{
  $("#stop-watch").toggleClass("hide");
  if (document.querySelector(".in-body").id === "hide-clock")  document.querySelector(".in-body").id = "show-clock";
  else if (document.querySelector(".in-body").id === "show-clock")   document.querySelector(".in-body").id = "hide-clock";
}

function showClock()
{
    if (document.querySelector(".in-body").id === "hide-clock")  
    {
      document.querySelector(".in-body").id = "show-clock";
      $("#stop-watch").toggleClass("hide");
    }
}

function showStopWatch()
{
  let cl = document.querySelector("#stop-watch").classList;
  if(cl.length != 0)
  {
    cl.remove("hide");
    document.querySelector(".in-body").id = "hide-clock";
  }
}
