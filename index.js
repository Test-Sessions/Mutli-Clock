const hour = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const time = document.getElementById('AM');
function clock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = "AM";
    if(h > 12) {
        h = h - 12;
        am = "PM";
    }
    if (h < 10){
        h = "0" + h;
    }
    if (m < 10){
        m = "0" + m;
    }
    if (s < 10){
        s = "0" + s;
    }
    hour.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    time.innerText = am;
    setTimeout(() =>{
        clock()
      }, 1000)
}
clock()