let section = document.querySelector(".eighth-sec")
let bars = document.querySelectorAll(".bar .progress")
//__________________________

let counter = setInterval(()=>{
  let actu_date = new Date().getTime();
  let bac_date = new Date("Jun 11,2023 7:00:00").getTime();
  let difrence = "";
  let days = document.getElementById("days");
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds")
  difrence = bac_date - actu_date;
  let days_num = Math.floor(difrence / 1000 / 60/60 / 24); 
  let hours_num = Math.floor((difrence % (1000 * 60 * 60 *24)) /1000 /60 /60)
  let minutes_num = Math.floor((difrence % (1000 * 60 * 60)) /1000 /60);
  let seconds_num = Math.floor((difrence % (1000 * 60)) /1000);
  if(days_num < 10){
    days_num = `00${days_num}`
  }else if(days_num<100){
    days_num = `0${days_num}`
  }
  if(hours_num < 10){
    hours_num = `00${hours_num}`
  }else if(hours_num<100){
    hours_num = `0${hours_num}`
  }
  if(minutes_num < 10){
    minutes_num = `00${minutes_num}`
  }else if(minutes_num<100){
    minutes_num = `0${minutes_num}`
  }
  if(seconds_num < 10){
    seconds_num = `00${seconds_num}`
  }else if(seconds_num<100){
    seconds_num = `0${seconds_num}`
  }
  days.innerHTML = days_num
  hours.innerHTML = hours_num
  minutes.innerHTML = minutes_num
  seconds.innerHTML = seconds_num
},1000)
//_________________________
let counter_2 = "";
let eleventh = document.getElementById("stats");
let numbers = document.querySelectorAll(".stat");
let started = false;
window.onscroll = function(){
  if(window.scrollY >= section.offsetTop-400){
    bars.forEach((bar)=>{
      bar.style.width = bar.dataset.width
    })
  }
  if(window.scrollY >= eleventh.offsetTop-400){
    if(!started){
      numbers.forEach((num)=>increaseNumber(num))
    }
    started = true;
  }
}

function increaseNumber(el){
  let goal = el.dataset.number;
  let counter_2 = setInterval(()=>{
    el.textContent++;
    if(el.textContent == goal){
      clearInterval(counter_2)
    }
  },1000/goal)
}