import "./sass/main.scss";

const header = document.querySelector(".header");

const fixNav = () => {
   if (window.scrollY > header.offsetHeight + 900) header.classList.add("active");
   else header.classList.remove("active");
};

window.addEventListener("scroll", fixNav);
