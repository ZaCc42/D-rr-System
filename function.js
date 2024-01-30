// Har är funktion till dropdown menu. Så när jag trycker på tre streck den byts till "X" och om skärmen är liten den kan släppa ut allt det man såg på navigations fällt.  
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

// andra del av funktion till navigation bar. Denna gör att efter vi har gått över H1 så blir navigations bar helt enkeld statiskt och står i samma position på toppen av skärm.  
document.addEventListener("DOMContentLoaded", function() { //Dena rade dubbel kollar att alla filer är laddade och funktion kan köras
    var nav = document.querySelector('.nav');
    var h1 = document.querySelector('h1');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY >= h1.offsetHeight) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
    });
});

