// ===============================
// Loader
// ===============================
window.addEventListener("load", function () {
    setTimeout(function () {
        const loader = document.getElementById("loader");
        if (loader) loader.style.display = "none";

        const hero = document.getElementById("hero");
        if (hero) hero.style.display = "flex";
    }, 300);
});

// ===============================
// Start Journey
// ===============================
function startJourney() {
    document.getElementById("hero").style.display = "none";
    document.getElementById("section1").style.display = "flex";

    playMusic();

    if (typeof confetti !== "undefined") {
        confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 }
        });
    }
}

// ===============================
// Next Sections
// ===============================
function nextSection(nextId) {

    document.querySelectorAll(".section").forEach(function (section) {
        section.style.display = "none";
    });

    document.getElementById(nextId).style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (typeof confetti !== "undefined") {
        confetti({
            particleCount: 120,
            spread: 80
        });
    }
}

// ===============================
// Music
// ===============================
function playMusic() {
    const music = document.getElementById("music");

    if (music) {
        music.play().catch(function () {});
    }
}

// ===============================
// Gift
// ===============================
function openGift() {

    const gift = document.querySelector(".gift-box");

    gift.innerHTML = "💖";
    gift.style.transform = "scale(1.3)";

    if (typeof confetti !== "undefined") {
        confetti({
            particleCount: 300,
            spread: 180
        });
    }

    setTimeout(function () {
        nextSection("section5");
    }, 1500);
}

// ===============================
// Final Fireworks
// ===============================
function showFireworks() {

    for (let i = 0; i < 12; i++) {

        setTimeout(function () {

            if (typeof confetti !== "undefined") {
                confetti({
                    particleCount: 180,
                    spread: 160,
                    startVelocity: 45,
                    origin: {
                        x: Math.random(),
                        y: Math.random() * 0.6
                    }
                });
            }

        }, i * 300);
    }

    setTimeout(function () {

        document.body.innerHTML = `
        <div style="background:#000;color:#fff;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:20px;font-family:Poppins,sans-serif;">
            <h1 style="font-size:50px;">🎉 Happy Birthday Ani ❤️</h1>
            <h2>I Love You So Much 💖</h2>
            <p style="max-width:600px;font-size:20px;line-height:1.8;">
                May Allah always protect you.<br>
                May every dream of yours come true.<br><br>
                Thank you for being the most beautiful part of my life. ❤️
            </p>
            <h2>Forever & Always 🧸💕</h2>
        </div>`;

    }, 4200);
}

// ===============================
// Floating Confetti
// ===============================
if (typeof confetti !== "undefined") {

    setInterval(function () {

        confetti({
            particleCount: 40,
            spread: 60,
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2
            }
        });

    }, 9000);
}

console.log("Birthday Website Loaded ❤️");