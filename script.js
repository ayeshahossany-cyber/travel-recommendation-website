/* ========================
   TOGGLE BEACH SECTION
======================== */
function toggleBeach() {
    const beach = document.getElementById("beach");
    if (beach.classList.contains("hidden")) {
        beach.classList.remove("hidden");
        beach.style.opacity = 0;
        beach.style.transform = "translateY(40px)";
        setTimeout(() => {
            beach.style.transition = "all 1.2s ease";
            beach.style.opacity = 1;
            beach.style.transform = "translateY(0)";
        }, 100);
    } else {
        beach.style.transition = "all 0.6s ease";
        beach.style.opacity = 0;
        beach.style.transform = "translateY(40px)";
        setTimeout(() => beach.classList.add("hidden"), 600);
    }
}

/* ========================
   TOGGLE TEMPLE SECTION
======================== */
function toggleTemple() {
    const temple = document.getElementById("temple");
    if (temple.classList.contains("hidden")) {
        temple.classList.remove("hidden");
        temple.style.opacity = 0;
        temple.style.transform = "translateY(40px)";
        setTimeout(() => {
            temple.style.transition = "all 1.2s ease";
            temple.style.opacity = 1;
            temple.style.transform = "translateY(0)";
        }, 100);
    } else {
        temple.style.transition = "all 0.6s ease";
        temple.style.opacity = 0;
        temple.style.transform = "translateY(40px)";
        setTimeout(() => temple.classList.add("hidden"), 600);
    }
}

/* ========================
   SCROLL REVEAL ANIMATIONS
======================== */
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal, .reveal-delay");

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ========================
   BACK TO TOP BUTTON
======================== */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ========================
   BACKGROUND MUSIC (OPTIONAL)
======================== */
document.addEventListener("click", function() {
    const music = document.getElementById("bgMusic");
    if (music && music.paused) {
        music.volume = 0.3;
        music.play().catch(() => {});
    }
}, { once: true });

/* ========================
   AUTOMATIC COUNTRY REVEAL
======================== */
const countrySelect = document.getElementById("countrySelect");
const countryResult = document.getElementById("countryResult");

countrySelect.addEventListener("change", function() {
    const country = this.value;

    // Clear previous content
    countryResult.innerHTML = "";
    countryResult.style.opacity = 0;
    countryResult.style.transform = "translateY(40px)";

    if (!country) return;

    let html = "";
    if (country === "japan") {
        html = `
            <h3>Japan</h3>
            <p>The Land of the Rising Sun: temples, lantern-lit streets, and cherry blossoms at dusk.</p>
            <img src="images/japan1.jpg" alt="Japan 1">
            <img src="images/japan2.jpg" alt="Japan 2">
        `;
    } else if (country === "france") {
        html = `
            <h3>France</h3>
            <p>Paris at twilight: cafés, cobblestone streets, and the Eiffel Tower shimmering softly.</p>
            <img src="images/france1.jpg" alt="France 1">
            <img src="images/france2.jpg" alt="France 2">
        `;
    }

    // Insert content (hidden initially)
    countryResult.innerHTML = html;

    // Trigger cinematic reveal animation
    setTimeout(() => {
        countryResult.style.transition = "all 1.2s ease";
        countryResult.style.opacity = 1;
        countryResult.style.transform = "translateY(0)";
    }, 100);
});