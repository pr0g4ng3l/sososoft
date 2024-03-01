const nav = document.getElementById("nav");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", () => {
    nav.classList.add("nav-visible");
})

closeMenu.addEventListener("click", () => {
    nav.classList.remove("nav-visible");
})