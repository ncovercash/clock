// this needs to happen first for some reason
var today = new Date();
document.getElementById("txt2").innerText = 
	days[today.getDay()] + ", " +
	month[today.getMonth()] + " " +
	today.getDate();

renderTime();
