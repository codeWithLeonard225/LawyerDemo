const menu = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

menu.onclick = () => {
    navLinks.classList.toggle("show");
    
};

