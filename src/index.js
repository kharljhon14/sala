import "./sass/main.scss";

const header = document.querySelector(".header");

const fixNav = () => {
   if (window.scrollY > header.offsetHeight + 900) header.classList.add("active");
   else header.classList.remove("active");
};

const blocks = document.querySelectorAll(".block");
const triggerBottom = (window.innerHeight / 5) * 4;

const scrollAnimation = () => {
   blocks.forEach((block) => {
      const top = block.getBoundingClientRect().top;

      if (top < triggerBottom) block.classList.add("show");
   });
};

scrollAnimation();

window.addEventListener("scroll", () => {
   fixNav();
   scrollAnimation();
});

const burgerBtn = document.querySelector(".header__burger");
const navigation = document.querySelector(".header__navigation");
const headerCta = document.querySelector(".header__cta");

burgerBtn.addEventListener("click", () => {
   navigation.classList.toggle("show-header");
   headerCta.classList.toggle("show-header");
});
