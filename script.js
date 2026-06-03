const menBar = document.querySelector('.menu-bar');
const menuNav = document.querySelector('.menu-navigation');

if (menBar && menuNav) {
    menBar.addEventListener('click', () => {
        menuNav.classList.toggle('menu-active');
    });
}
