function primeTime(){
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();

    var present = document.getElementById("timer");

    present.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(primeTime,1000);