function displayTime(){
    time = new Date();
    let yr = time.getFullYear();
    let dat = time.getDate();
    let m = time.getMonth();
    hr=time.getHours();
    if(hr>12){
        hr-=12;
    }
    document.getElementById("date").innerHTML = "DATE    :"+dat;
    document.getElementById("month").innerHTML = "MONTH  :"+m;
    document.getElementById("year").innerHTML = "YEAR    :"+yr;
    document.getElementById("hours").innerHTML = hr;
    document.getElementById("mins").innerHTML = time.getMinutes();
    document.getElementById("seconds").innerHTML = time.getSeconds();
}
setInterval(displayTime,1000);