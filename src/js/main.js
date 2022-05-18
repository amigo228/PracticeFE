let navOpener = document.querySelector('.js__nav__opener');
let header = document.querySelector('.js__header');

navOpener.addEventListener('click', () => {
    if (header.classList.contains('active')) {
        header.classList.remove('active');
    } else {
        header.classList.add('active');
    }
});