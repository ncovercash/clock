let makeDoubleDigits = (i) => {
	return String(i).length < 2 ? "0"+i : String(i);
};

let time = document.getElementById("time");
let date = document.getElementById("date");

let month = [];
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
let days = [];
days[0] = "Sunday";
days[1] = "Monday";
days[2] = "Tuesday";
days[3] = "Wednesday";
days[4] = "Thursday";
days[5] = "Friday";
days[6] = "Saturday";

let resize = () => {
	let maxHeight = window.innerHeight;

	let timeHeight = maxHeight*0.72;
	let dateHeight = maxHeight*0.22;

	time.style.lineHeight = Math.floor(timeHeight)+"px";
	time.style.fontSize = Math.floor(timeHeight*4/5)+"px";

	date.style.lineHeight = Math.floor(dateHeight)+"px";
	date.style.fontSize = Math.floor(dateHeight*2/3)+"px";

	// decrease font size to fit
	let i=0;
	while (time.offsetHeight > timeHeight+2) { // 2px to account for rounding
		time.style.fontSize = Math.floor((timeHeight*4/5)-(i++))+"px";
	}
	i=0;
	while (date.offsetHeight > dateHeight+2) { // 2px to account for rounding
		date.style.fontSize = Math.floor((dateHeight*2/3)-(i++))+"px";
	}
};

window.addEventListener("resize", resize);

let tick = () => {
	let today = new Date();
	let h = today.getHours()%12;
	h = h ? h : 12;
	let m = makeDoubleDigits(today.getMinutes());
	let s = makeDoubleDigits(today.getSeconds());

	time.innerHTML = "" + h + ":" + m + "" + "";
	date.innerText = 
		days[today.getDay()] + ", " +
		month[today.getMonth()] + " " +
		today.getDate();
	
	setTimeout(tick, 1000);
};
tick();
resize();
