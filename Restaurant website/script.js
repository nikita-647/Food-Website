const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header-tag", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header-content .section-description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header-btns", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".service-card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
});

ScrollReveal().reveal(".client-image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".client-content .section-subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".client-content .section-header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".client-content .section-description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".client-details", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".client-rating", {
  ...scrollRevealOption,
  delay: 2500,
});

ScrollReveal().reveal(".download-image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".download-content .section-subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".download-content .section-header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".download-content .section-description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".download-btn", {
  ...scrollRevealOption,
  delay: 2000,
});
