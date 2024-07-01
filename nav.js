const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  primaryNav.classList.toggle("open");
  navToggle.classList.toggle("open");
  //   console.log(primaryNav.classList.contains("open"));
});

//   console.log(visibility);
  
