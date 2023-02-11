const mobile_nav = document.querySelector('.fa-solid');
const nav_header = document.querySelector(".nav");
const toggleNavBar = () => {
    nav_header.classList.toggle("active")
};
mobile_nav.addEventListener("click", () => toggleNavBar());