
function clock(){
    let timeObj= new Date();
    let h=timeObj.getHours();
    let m=timeObj.getMinutes();
    let s=timeObj.getSeconds();
    if (m<10) {
        m=`0${m}`
    }
    if (s<10) {
        s=`0${s}`
    }
    document.getElementById("menu").innerHTML=`${h} : ${m} : ${s}`;
}

clock()

setInterval(clock,1000)