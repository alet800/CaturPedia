// Ganti selector ini jika perlu
const menuNavigation = document.querySelector('.navigation .box-navigation .box:nth-child(2)');
const menuBar = document.querySelector('.navigation .box-navigation .box:nth-child(3)');

menuBar.onclick = (e) => {
    menuNavigation.classList.toggle('menu-active');
    e.stopPropagation();
};

document.addEventListener('click', (e) => {
    if (!menuBar.contains(e.target) && !menuNavigation.contains(e.target)) {
        menuNavigation.classList.remove('menu-active');
    }
});