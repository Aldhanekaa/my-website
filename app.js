window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

var modalBtn = document.querySelector(".note");
var modalBg = document.querySelector('.modal-bg')
var modalClose = document.querySelector('.close-modal');
modalBtn.addEventListener('click', function () {
    modalBg.classList.add('bg-active');
    document.body.style.overflow = 'hidden';
    modalBg.classList.remove('closing')
})

modalClose.addEventListener('click', function () {
    modalBg.classList.add('closing')
    modalBg.classList.remove('bg-active');
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'auto';
})

let home = document.querySelector("#home");
let about = document.querySelector("#about");
let project = document.querySelector("#projects");
let contact = document.querySelector("#contact")
let home2 = document.querySelector('.welcome');
let about2 = document.querySelector('.abouts');
let project2 = document.querySelector('.project')
let contact2 = document.querySelector('.contact')

window.addEventListener('scroll', () => {
    var windo = window.pageYOffset;
    if (about.offsetTop <= windo && project.offsetTop > windo) {
        about2.classList.add('wow')
        home2.classList.remove('wow')
        project2.classList.remove('wow')

    } else if (project.offsetTop <= windo && contact.offsetTop > windo) {
        about2.classList.remove('wow')
        home2.classList.remove('wow')
        project2.classList.add('wow')
        contact2.classList.remove('wow')
        console.log('project')
    } else if (contact.offsetTop <= windo) {
        about2.classList.remove('wow')
        home2.classList.remove('wow')
        project2.classList.remove('wow')
        contact2.classList.add('wow')
        console.log('contact')
    } else {
        about2.classList.remove('wow')
        home2.classList.add('wow')
        contact2.classList.remove('wow')
        project2.classList.remove('wow')
    }
})

/** QUOTES */

/** QUOTES */

function peringatan() {
    alert('Max width is 1160px and max height is 730px')
}

function showMoreProject() {
    var dots = document.getElementById("parent_showmore_");
    var btnText = document.getElementById("showMoreBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.style.display = 'none';

    } else {
        dots.style.display = "none";
        btnText.innerHTML = 'Show Less';
    }
}

