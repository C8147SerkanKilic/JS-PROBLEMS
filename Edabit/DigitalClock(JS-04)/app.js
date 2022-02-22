//1.yol ve uzun ve diğerini bulana kadar 1.5 saat uğraştığım yol!!!
// const hours = document.querySelector("#digit-hours")
// const minutes = document.querySelector("#digit-minutes")
// const seconds = document.querySelector("#digit-seconds")
// const ampm = document.querySelector("#digit-ampm")
// const time = new Date();

// hours.innerHTML = time.getHours();
// minutes.innerHTML = time.getMinutes();
// seconds.innerHTML = time.getSeconds();
// ampm.innerHTML = hours >= 12 ? "PM":"AM"

//2.yol

setInterval(setTime,1000)

function setTime(){
    const digitalTime = document.querySelector("div")
    const time = new Date();
    digitalTime.innerHTML = time.toLocaleString("en-US", { hour: '2-digit', minute: '2-digit', second: '2-digit' }) 
}

