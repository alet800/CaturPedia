// 1. Ambil elemen navigasi utama
const navmenu = document.querySelector('.navigation');

// 2. Ambil elemen tombol menu (ikon hamburger)
const btnmenu = document.querySelector('.box.menu-bar');

// 3. Ambil elemen menu itu sendiri (ul/li)
const menuNav = document.querySelector('.menu-navigation');

// 4. Ambil semua link di dalam menu
const menuLinks = document.querySelectorAll('.menu-navigation ul li a');

// Fungsi untuk membuka/menutup menu
function toggleMenu() {
    menuNav.classList.toggle('menu-active');
}

// Event Listener untuk Tombol Hamburger
if (btnmenu) {
    btnmenu.addEventListener('click', (e) => {
        e.stopPropagation(); // Mencegah event bubble ke document
        toggleMenu();
    });
}

// Event Listener untuk Link Menu (Tutup menu saat link diklik)
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuNav.classList.remove('menu-active');
    });
});

// Event Listener untuk Klik di Luar Menu (Tutup menu jika klik di area kosong)
document.addEventListener('click', (e) => {
    // Cek apakah klik terjadi di luar tombol menu DAN di luar area menu
    const isClickInsideMenu = menuNav.contains(e.target);
    const isClickInsideHamburger = btnmenu.contains(e.target);

    if (!isClickInsideMenu && !isClickInsideHamburger) {
        menuNav.classList.remove('menu-active');
    }
});