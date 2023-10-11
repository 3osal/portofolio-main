// get navbar
let navBar = document.querySelector(".nav-bar")
let btnUp = document.querySelector(".up");
let scrollHide = document.querySelectorAll('.scroll-hide');
let btnMessage = document.querySelector('.message-user')
let formContact = document.querySelector('.user-me')
let formInput = document.querySelectorAll('.user-me input');
let formBtn = document.querySelectorAll('.user-me .btn');
let formClose = document.querySelectorAll('.user-me .close')



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

//show btn message after 5s
setInterval(() => {
    btnMessage.style.display = 'block';
}, 5000)

btnMessage.onclick = (e) => {
    formContact.classList.toggle('show-form');
}


// window.addEventListener('scroll', () => {
// navBar.classList.toggle('sticky', window.scrollY > 10)
// } )

document.querySelector('.toggle-setting .fa-gear').onclick = function () {
    this.classList.toggle("fa-spin")
    document.querySelector(".setting-box").classList.toggle("open")
}



// switch color
let colorsLi = document.querySelectorAll('.color-list li')

colorsLi.forEach(li => {
    li.addEventListener('click', (e) => {
        //set color on root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        e.target.parentElement.querySelectorAll('.active').forEach(Element => {
            Element.classList.remove('active')
        })

        e.target.classList.add('active');

        //set color on local storge
        localStorage.setItem('color_option', e.target.dataset.color)

    })
})

// local storge
let mainColor = localStorage.getItem('color_option');

//switch text color
if (mainColor !== null) {
    document.documentElement.style.setProperty('--main-color', localStorage.getItem('color_option'))
    document.querySelectorAll('.color-list li').forEach(element => {
        element.classList.remove('active')
        if (element.dataset.color === mainColor) {
            element.classList.add('active');
        }
    })
}


// Dark  and light mood
let btnChangeMode = document.querySelector('.light');
let iconMode = document.querySelector('#icon-mode')
let btnText = document.querySelector('#text-mode');

//local storge
let mainMode = localStorage.getItem('color-mode');


if (typeof(Storage) !== "undefined") {
    btnChangeMode.onclick = function () {
        document.body.classList.toggle('light-theme');
        if (document.body.classList.contains('light-theme')) {
            iconMode.src = 'image/light-mode.png';
            btnText.innerHTML = 'light';
            // حفظ حالة الوضع في local storage
            localStorage.setItem('theme', 'light');
        } else {
            iconMode.src = 'image/dark-mode.png';
            btnText.innerHTML = 'dark';
            // حفظ حالة الوضع في local storage
            localStorage.setItem('theme', 'dark');
        }
    }


    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        iconMode.src = 'image/light-mode.png';
        btnText.innerHTML = 'light';
    } else {
        document.body.classList.remove('light-theme');
        iconMode.src = 'image/dark-mode.png';
        btnText.innerHTML = 'dark';
    }
} else {
    console.log("Local storage is not supported in this browser.");
}
