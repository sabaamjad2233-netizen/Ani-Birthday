// ===============================
// Loader
// ===============================

window.addEventListener("load", function () {

setTimeout(() => {

document.getElementById("loader").style.display = "none";

}, 2500);

});

// ===============================
// Start Journey
// ===============================

function startJourney() {

document.querySelector(".hero").style.display = "none";

document.getElementById("section1").style.display = "flex";

playMusic();

confetti({

particleCount:180,

spread:90,

origin:{y:0.6}

});

}

// ===============================
// Next Sections
// ===============================

function nextSection(nextId){

let sections=document.querySelectorAll(".section");

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

spread:70

});

}

// ===============================
// Background Music
// ===============================

function playMusic(){

const music=document.getElementById("music");

music.play().catch(()=>{

console.log("Autoplay blocked by browser");

});

}
// ===============================
// Gift Box
// ===============================

function openGift() {

confetti({
particleCount:300,
spread:180,
origin:{y:0.6}
});

const gift=document.querySelector(".gift-box");

gift.innerHTML="💖";

gift.style.transform="scale(1.3)";

gift.style.transition="0.5s";

setTimeout(()=>{

nextSection("section5");

},1500);

}

// ===============================
// Cake Celebration
// ===============================

function celebrateCake(){

confetti({
particleCount:250,
spread:150,
origin:{y:0.5}
});

alert("🎂 Happy Birthday Ani ❤️");

}

// ===============================
// Auto Confetti Every 8 Seconds
// ===============================

setInterval(()=>{

confetti({

particleCount:60,

spread:60,

origin:{
x:Math.random(),
y:Math.random()-0.2
}

});

},8000);

// ===============================
// Keyboard Shortcut
// Press C for Celebration
// ===============================

document.addEventListener("keydown",function(e){

if(e.key==="c" || e.key==="C"){

confetti({

particleCount:350,

spread:180

});

}

});

// ===============================
// End Message
// ===============================

console.log("❤️ Happy Birthday Website Loaded Successfully ❤️");
// =====================================
// Premium Image Slider
// =====================================

let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

function autoSlider() {

if(slides.length===0) return;

slides.forEach(slide=>{

slide.classList.remove("active");

});

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

slides[currentSlide].classList.add("active");

}

setInterval(autoSlider,3000);

// =====================================
// Typewriter Effect
// =====================================

const typingText=document.getElementById("typingText");

if(typingText){

const message=typingText.innerHTML;

typingText.innerHTML="";

let i=0;

function typeWriter(){

if(i<message.length){

typingText.innerHTML+=message.charAt(i);

i++;

setTimeout(typeWriter,35);

}

}

setTimeout(typeWriter,800);

}

// =====================================
// Fireworks Celebration
// =====================================

function showFireworks(){

for(let i=0;i<12;i++){

setTimeout(()=>{

confetti({

particleCount:180,

spread:150,

startVelocity:45,

origin:{

x:Math.random(),

y:Math.random()*0.6

}

});

},i*300);

}

alert("🎉 Happy Birthday Ani ❤️");

}

// =====================================
// Welcome Animation
// =====================================

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity 1.5s";

document.body.style.opacity="1";

},300);

});

// =====================================
// Console Message
// =====================================

console.log("🎂 Premium Birthday Website Loaded Successfully ❤️");