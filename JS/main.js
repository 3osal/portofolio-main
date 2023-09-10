// get navbar
let navBar = document.querySelector(".nav-bar")
let btnUp = document.querySelector(".up");

window.onscroll = function () {
    // btn up show
    if (window.scrollY >= 300) {
        btnUp.classList.add("show")
    } else {
        // btn up hidden
        btnUp.classList.remove("show")
    }
}

btnUp.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}

