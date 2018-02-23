
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

var month = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var d = new Date();
var dayName = days[d.getDay()];
var day = d.getDate();
var monthName = month[d.getMonth()];
var year = d.getFullYear();
    
document.getElementById("currentdate").innerHTML= dayName + ", " + day + " " + monthName + " " + year;