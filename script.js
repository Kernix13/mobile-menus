/**
 * ACCESSIBLE MOBILE MENU
 */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {

  /* Toggle active class */
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  /* Toggle aria-expanded value */
  let menuOpen = navMenu.classList.contains("active");
  hamburger.setAttribute("aria-expanded", menuOpen);
})

// close mobile menu
navLinks.forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");

  let menuOpen = navMenu.classList.contains("active");
  hamburger.setAttribute("aria-expanded", menuOpen);
}))