document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const menuIconClose = document.querySelector(".menu-icon-close");
  const navMenu = document.querySelector(".nav-menu");
  const body = document.querySelector("body");
  const wrapper = document.querySelector(".wrapper");
  //const backgroundLayer = document.querySelector(".background-layer");

  menuIcon.addEventListener("click", () => {
    navMenu.classList.add("active");
    menuIconClose.style.display = "block";
    menuIcon.style.display = "none";
    body.classList.add("menu-open");
    wrapper.classList.add("menu-open");
  });

  menuIconClose.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuIconClose.style.display = "none";
    menuIcon.style.display = "block";
    body.classList.remove("menu-open");
    wrapper.classList.remove("menu-open");
    
  });
});
