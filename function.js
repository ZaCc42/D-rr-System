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

function showImage(index) {
    const imageContainer = document.querySelector('.image-container');
    const imageWidth = document.querySelector('.image').width;

    imageContainer.style.transform = `translateX(-${index * imageWidth}px)`;
}