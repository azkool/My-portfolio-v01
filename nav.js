const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute('data-visible');

    //console.log(visiblity)
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});

// Time of day greeting
const greeting = document.querySelector(".time-of-day");

    document.addEventListener("DOMContentLoaded", () => {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        console.log(hours);
        if (hours >= 0 && hours < 12) {
            greeting.textContent = "morning!";
        } else if (hours >= 12 && hours < 18) {
            greeting.textContent = "afternoon!";
        } else if (hours >= 18 || hours < 24) {
            greeting.textContent = "evening!";
        }
        
    });

