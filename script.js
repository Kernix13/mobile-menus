/**
 * ACCESSIBLE MOBILE MENU
 */


/* MENU 1, FROM TOP: #nav-menu, #hamburger  */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {

  /* Toggle active class */
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  /* Toggle aria-expanded value */
  let menuOpen = navMenu.classList.contains("active");
  hamburger.setAttribute("aria-expanded", menuOpen);
})

/* MENU 2, FROM RIGHT: #nav-menu2, .#amburger2  */
const hamburger2 = document.getElementById("hamburger2");
const navMenu2 = document.getElementById("nav-menu2");

hamburger2.addEventListener("click", () => {

  /* Toggle active class */
  hamburger2.classList.toggle("active");
  navMenu2.classList.toggle("active");

  /* Toggle aria-expanded value */
  let menuOpen2 = navMenu2.classList.contains("active");
  hamburger2.setAttribute("aria-expanded", menuOpen2);
})

/* MENU 3, FROM LEFT: #nav-menu3, .#amburger3  */
const hamburger3 = document.getElementById("hamburger3");
const navMenu3 = document.getElementById("nav-menu3");

hamburger3.addEventListener("click", () => {

  /* Toggle active class */
  hamburger3.classList.toggle("active");
  navMenu3.classList.toggle("active");

  /* Toggle aria-expanded value */
  let menuOpen3 = navMenu3.classList.contains("active");
  hamburger3.setAttribute("aria-expanded", menuOpen3);
})

/* MENU 4, RIGHT SIDEBAR: #nav-menu4, .#amburger4  */

/* MENU 5, LEFT SIDEBAR: #nav-menu5, .#amburger5  */


// close mobile menu (only useful for on page anchor links)
/*
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");

  let menuOpen = navMenu.classList.contains("active");
  hamburger.setAttribute("aria-expanded", menuOpen);
}))
  */