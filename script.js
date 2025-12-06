/**
 * ACCESSIBLE MOBILE MENU
 */

// Listen to changes in viewport
const desktop = window.matchMedia('(min-width: 1100px)');

/* MENU 1, FROM TOP: #nav-menu, #hamburger  */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
console.log(navMenu.className)
function toggleMenu(btn, ul) {
  // Toggle active
  ul.classList.toggle('active');
  btn.classList.toggle('active');

  const isOpen = ul.classList.contains('active');

  // Update aria-expanded
  btn.setAttribute('aria-expanded', isOpen);

  // Update accessibility for ul
  if (isOpen) {
    ul.removeAttribute('inert');
    ul.setAttribute('aria-hidden', 'false');
  } else {
    ul.setAttribute('inert', '');
    ul.setAttribute('aria-hidden', 'true');
  }
}

function desktopMenu(event, btn, ul) {
  if (event.matches) {
    ul.classList.remove('active');
    ul.removeAttribute('inert');
    ul.setAttribute('aria-hidden', 'false');

    btn.classList.remove('active');
    btn.removeAttribute('aria-expanded');
  } else {
    // Mobile mode — start closed
    ul.classList.remove('active');
    ul.setAttribute('inert', '');
    ul.setAttribute('aria-hidden', 'true');

    btn.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
  }
}

hamburger.addEventListener('click', () => {
	toggleMenu(hamburger, navMenu);
});

desktop.addEventListener('change', desktopMenu);
desktopMenu(desktop, hamburger, navMenu);

/* STOP */

/* MENU 2, FROM RIGHT: #nav-menu2, .#amburger2  */
const hamburger2 = document.getElementById("hamburger2");
const navMenu2 = document.getElementById("nav-menu2");

hamburger2.addEventListener('click', () => {
	toggleMenu(hamburger2, navMenu2);
});

/* MENU 3, FROM LEFT: #nav-menu3, .#amburger3  */
const hamburger3 = document.getElementById("hamburger3");
const navMenu3 = document.getElementById("nav-menu3");

hamburger3.addEventListener('click', () => {
	toggleMenu(hamburger3, navMenu3);
});

/* MENU 4, RIGHT SIDEBAR: #nav-menu4, .#amburger4  */
const hamburger4 = document.getElementById("hamburger4");
const navMenu4 = document.getElementById("nav-menu4");

hamburger4.addEventListener('click', () => {
	toggleMenu(hamburger4, navMenu4);
});

/* MENU 5, LEFT SIDEBAR: #nav-menu5, .#amburger5  */
const hamburger5 = document.getElementById("hamburger5");
const navMenu5 = document.getElementById("nav-menu5");

hamburger5.addEventListener('click', () => {
	toggleMenu(hamburger3, navMenu5);
});


// close mobile menu (only useful for on-page anchor links)
/*
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");

  let menuOpen = navMenu.classList.contains("active");
  hamburger.setAttribute("aria-expanded", menuOpen);
}))
  */