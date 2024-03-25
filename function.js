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

// Det tredje del av JS som ger en funktion till Dörr-kontent av att man ska kunna bledra genom
let currentIndex = 0;
const items = document.querySelectorAll('.Dörr-artikel');
let touchStartX = 0;
let touchEndX = 0;

function showSlide(index) {
    items.forEach((item, i) => {
        item.style.display = i === index ? 'flex' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
}

// Touch event handling
function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].clientX;

    // Calculate swipe direction
    const swipeDistance = touchEndX - touchStartX;

    // Adjust the threshold based on your preference
    const swipeThreshold = 50;

    if (swipeDistance > swipeThreshold) {
        prevSlide();
    } else if (swipeDistance < -swipeThreshold) {
        nextSlide();
    }
}

// Attach touch event listeners
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchend', handleTouchEnd, false);

// Show the first slide on page load
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
