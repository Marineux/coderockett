var myNavbar = document.querySelector('.navbar')
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 200 ) {
        mayNavbar.classList.add(".scroll");
        myNavbar.classList.remove(".scroll");
    }
    else {
        myNavbar.classList.remove("none");
        myNavbar.classList.add("none");
    }
}