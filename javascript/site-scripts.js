//Hamburger menu scripts

const hamburgermenu = document.getElementById("hamburger-menu");
const navbarlist = document.querySelector("nav ul");
const navbarcontainer = document.querySelector("nav")
const links = document.querySelector("nav-link")
const body = document.getElementById("body")


hamburgermenu.addEventListener("click", toggleMenu())
document.addEventListener("click", hideMenu())

// function showMenu() {
//     navbarcontainer.style.display = "block";
//     links.forEach((link) => 
//     link.addEventListener("click", () => {
//         navbarlist.classList.remove("show");
//     })
// )
// }


function toggleMenu() {
    navbarlist.classList.toggle("show")
}

function hideMenu() {
    console.log("hide menu")
    if (navbarlist.classList.contains("show")) {
        navbarlist.classList.remove("show")
    }
}