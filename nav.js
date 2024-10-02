const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

const abs = navToggle.addEventListener("click", () => {
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

// Get the navigation bar and the links inside it
const navBar = document.querySelector('.primary-navigation');
const links = navBar.querySelectorAll('.menu-link');

// Add a click event listener to each link
links.forEach(link => {
  link.addEventListener('click', () => {
    // Toggle the visibility of the navigation bar
    navBar.classList.toggle('collapsed');
    // Close the navigation bar when a link is clicked
    navToggle.setAttribute("aria-expanded", false);
    navBar.classList.remove('collapsed');
    primaryNav.setAttribute('data-visible', false);
  });
  
});

// Time of day greeting
const greeting = document.querySelector(".time-of-day");
    document.addEventListener("DOMContentLoaded", () => {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        if (hours >= 0 && hours < 12) {
            greeting.textContent = "morning!";
        } else if (hours >= 12 && hours < 18) {
            greeting.textContent = "afternoon!";
        } else if (hours >= 18 || hours < 24) {
            greeting.textContent = "evening!";
        }
    });

