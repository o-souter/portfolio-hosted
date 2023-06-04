//Initialising variables
const html = document.getElementsByTagName('html')[0];
var mode = 'light';
const sunMoon = document.getElementById('sunMoon');
const lightDarkToggle = document.getElementById('lightDarkToggle');
const introText = document.getElementById('intro-text');
const introTitle = document.getElementById('intro-title');
const intro = document.getElementById('intro');
const moreAboutMeTitle = document.getElementById('more-about-me-title');
const moreAboutMeTxt = document.getElementById('more-about-me-div')
const moreAboutMe = document.getElementById('more-about-me')
const hyperlinks = document.getElementsByTagName('a')
const skillsTitle = document.getElementById('skills-title')
const skillCells = document.getElementsByClassName('skill-cell');
const projects = document.getElementById('projects');
const projectsTitle = document.getElementById('projects-title');
const languagesTitle = document.getElementById('languages-title');
const projectCells = document.getElementsByClassName('project-cell');
const projectTitles = document.getElementsByClassName('project-title');
const projectDescriptions = document.getElementsByClassName('project-description')
const contactMeTitle = document.getElementById('contactme-title')
const contactMe = document.getElementById('contact-form-div')
const contactTxt = document.getElementsByClassName('contact-text')
const contactInputs = document.getElementsByClassName('inputs');
const findme = document.getElementById('findme')
const findmeCells = document.getElementsByClassName("findme-cell")
const footer = document.getElementsByTagName('footer')[0]
const allFooter = document.getElementById('footer')

//Hamburger menu scripts
const hamburgermenu = document.getElementById("hamburger-menu");
const navbarlist = document.querySelector("nav ul");
const navbarcontainer = document.querySelector("nav")
const links = document.querySelector("nav-link")
const body = document.getElementById("body")

hamburgermenu.addEventListener("click", toggleMenu())
document.addEventListener("click", hideMenu())

function toggleMenu() {
    navbarlist.classList.toggle("show")
}

function hideMenu() {
    if (navbarlist.classList.contains("show")) {
        navbarlist.classList.remove("show")
    }
}

function toggleLightDarkMode() {//Toggle Light/Dark mode function
    if (mode == 'light') { //Dark mode code
        mode = 'dark'; 
        sunMoon.classList.add("fa-regular");
        sunMoon.classList.remove("fa-solid");
        html.style.backgroundColor = "#0e0833";
        for (const el of hyperlinks) {
            if (el.className != 'nav-link' && el.id != 'hamburger-menu') {el.style.color = "#00ff22"}
        }
        introText.style.color = "white";
        introTitle.style.color = "white";
        intro.style.boxShadow = "none";
        moreAboutMe.style.backgroundColor = "#464682";
        moreAboutMeTitle.style.color = "white";
        moreAboutMeTxt.style.color = "white";
        skillsTitle.style.color = "white";
        for (const el of skillCells) {el.style.color = "white"}
        languagesTitle.style.color = "white"
        projects.style.backgroundColor = "#464682"
        projectsTitle.style.color = "white"
        for (const el of projectCells) {el.style.backgroundColor = "#545252"}
        for (const el of projectTitles) {el.style.color = "white"}
        for (const el of projectDescriptions) {el.style.color = "white"}
        contactMeTitle.style.color = "white"
        contactMe.style.boxShadow = "none"
        for (const el of contactTxt) {el.style.color = "white"}
        for (const el of contactInputs) {
            el.style.border = "5px solid white"
            el.style.backgroundColor = "#0e0833"
            el.style.color = "white"
        }
        findme.style.backgroundColor = "#464682"
        findme.style.color = "white"
        for (const el of findmeCells) {el.style.backgroundColor = "#545252"}
        footer.style.color = "white"
        footer.style.backgroundColor = "#0e0833"
    
    }
    
    else if (mode == 'dark') {//Light Mode code
        mode = 'light'
        sunMoon.classList.remove("fa-regular");
        sunMoon.classList.add("fa-solid");
        html.style.backgroundColor = "white";
        for (const el of hyperlinks) {
            if (el.className != 'nav-link' && el.id != 'hamburger-menu') {el.style.color = "#007910"}
        }
        introText.style.color = "black";
        introTitle.style.color = "black";
        intro.style.boxShadow = "0px 2px 15px 2px var(--primary-shadow)"
        moreAboutMe.style.backgroundColor = "#9bd8e9";
        moreAboutMeTitle.style.color= "black"
        moreAboutMeTxt.style.color = "black";
        skillsTitle.style.color = "black";
        for (const el of skillCells) {el.style.color = "black"}
        languagesTitle.style.color = "black"
        projects.style.backgroundColor = "#9bd8e9"
        projectsTitle.style.color = "black"
        for (const el of projectCells) {el.style.backgroundColor = "#ebebeb"}
        for (const el of projectTitles) {el.style.color = "black"}
        for (const el of projectDescriptions) {el.style.color = "black"}
        contactMeTitle.style.color = "black"
        contactMe.style.boxShadow = "0 3px 10px var(--secondary-shadow)"
        for (const el of contactTxt) {el.style.color = "black"}
        for (const el of contactInputs) {
            el.style.border = "5px solid black"
            el.style.backgroundColor = "white"
            el.style.color = "black"
        }
        findme.style.backgroundColor = "#9bd8e9"
        findme.style.color = "black"
        for (const el of findmeCells) {el.style.backgroundColor = "#ebebeb"}
        footer.style.color = "black"
        footer.style.backgroundColor = "var(--primary-colour)"
    }
}