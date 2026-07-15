// ===============================
// Loader
// ===============================

window.addEventListener("load", function () {

setTimeout(() => {

document.getElementById("loader").style.display = "none";

}, 1500

});

// ===============================
// Start Journey
// ===============================

function startJourney() {

document.getElementById("hero").style.display = "none";

document.getElementById("section1").style.display = "flex";

playMusic();

confetti({

particleCount:200,

spread:120,

origin:{y:0.6}

});

}

// ===============================
// Next Sections
// ===============================

function nextSection(nextId){

const sections=document.querySelectorAll(".section");

sections.forEach(section=>{

section.style.display="none";

});

document.getElementById(nextId).style.display="flex";

window.scrollTo({

top:0,

behavior:"smooth"

});

confetti({

particleCount:120,

spread:80

});

}

// ===============================
// Background Music
// ===============================

function playMusic(){

const music=document.getElementById("music");

if(music){

music.play().catch(()=>{

console.log("Autoplay blocked");

});

}

}

// ===============================
// Gift Box
// ===============================

function openGift(){

const gift=document.querySelector(".gift-box");

gift.innerHTML="💖";

gift.style.transform="scale(1.3)";

confetti({

particleCount:300,

spread:180

});

setTimeout(()=>{

nextSection("section5");

},1500);

}

// ===============================
// Fireworks
// ===============================

function showFireworks(){

for(let i=0;i<12;i++){

setTimeout(()=>{

confetti({

particleCount:180,

spread:160,

startVelocity:45,

origin:{

x:Math.random(),

y:Math.random()*0.6

}

});

},i*300);

}

alert("🎉 Happy Birthday Mine Bhalu ❤️");

}

// ===============================
// Floating Confetti
// ===============================

setInterval(()=>{

confetti({

particleCount:40,

spread:60,

origin:{

x:Math.random(),

y:Math.random()-0.2

}

});

},9000);

console.log("Premium Birthday Website Loaded ❤️");