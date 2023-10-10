// get navbar
let navBar = document.querySelector(".nav-bar")
let btnUp = document.querySelector(".up");
let scrollHide = document.querySelectorAll('.scroll-hide');

window.onscroll = function () {
    // btn up show
    if (window.scrollY >= 300) {
        btnUp.classList.add("show")
    } else {
        // btn up hidden
        btnUp.classList.remove("show")
    }

    //show sections scroll
    scrollHide.forEach(scrollh => {
        if (window.scrollY >= scrollh.offsetTop - 300) {
            scrollh.style.opacity = 1;
        } else {
            scrollh.style.opacity = -1;
        }
    })
}

btnUp.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}

// window.addEventListener('scroll', () => {
// navBar.classList.toggle('sticky', window.scrollY > 10)
// } )

document.querySelector('.toggle-setting .fa-gear').onclick = function () {
    this.classList.toggle("fa-spin")
    document.querySelector(".setting-box").classList.toggle("open")
}


// Add color backGround in local storge
let mainColors = localStorage.getItem('color-option');
let colorParagraph = localStorage.getItem('color-pargraph')

if (mainColors !== "null") {
    document.documentElement.style.setProperty('--backgroundColor', localStorage.getItem)
}
if (colorParagraph !== "null") {
    document.documentElement.style.setProperty('--paragraph-color', localStorage.getItem)
}

//Change color websit
const colorList = document.querySelectorAll('.color-list span');

colorList.forEach(span => {
    span.addEventListener('click', (e) => {

        document.documentElement.style.setProperty('--backgroundColor', e.target.dataset.color)
        span.classList.toggle('active');

        //local storge
        localStorage.setItem('color-option', e.target.dataset.color)

        if (e.target.dataset.color == '#fff') {
            document.documentElement.style.setProperty('--paragraph-color', "#000")
            localStorage.setItem('color-pargraph', document.documentElement.style.setProperty('--paragraph-color', "#000"))
        } else {
            document.documentElement.style.setProperty('--paragraph-color', "#fff")
        }
    })
})



