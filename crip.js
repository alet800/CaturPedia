
const menBar = document.querySelector('.menu-bar');
const menuNav = document.querySelector('.menu-navigation');

if (menBar && menuNav) {
    menBar.addEventListener('click', () => {
        menuNav.classList.toggle('menu-active');
    });
}

document.addEventListener('click', (e) => {
    if (!menBar?.contains(e.target) && !menuNav?.contains(e.target)) {
        menuNav.classList.remove('menu-active');
    }
});