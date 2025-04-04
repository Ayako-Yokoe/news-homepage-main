const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const hamburgerMenu = document.getElementById("hamburger-menu");

openBtn.addEventListener("click", () => {
    hamburgerMenu.classList.add("visible");
})

closeBtn.addEventListener("click", () => {
    hamburgerMenu.classList.remove("visible");
})
