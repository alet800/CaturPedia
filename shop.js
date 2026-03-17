const navmenu = document.querySelector('.nav-menu');
const btnmenu = document.querySelector('#btn-menu');


btnmenu.onclick = (e) => {
    e.preventDefault();
    navmenu.classList.toggle('active');
};


document.addEventListener('click', (e) => {
    if (!btnmenu.contains(e.target) && !navmenu.contains(e.target)) {
        navmenu.classList.remove('active');
    }
});

const btnCart = document.getElementById("btn-cart")
const Cart = document.getElementById("cart")

btnCart.onclick = function (e) {
    e.preventDefault();
    Cart.classList.toggle("active");
};

document.addEventListener("click", function (e){
    if(!btnCart.contains(e.target) && !Cart.contains(e.target)){
        Cart.classList.remove("active");
    }
})


function updateStars(rating) {
    const starsContainer = document.getElementById('modal-rating');
    starsContainer.innerHTML = '';
    
    const fullStars = Math.floor(rating);
    const hasHalfStar = (rating % 1) !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        starsContainer.innerHTML += '<i class="fa-solid fa-star"></i>';
    }
    if (hasHalfStar) {
        starsContainer.innerHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsContainer.innerHTML += '<i class="fa-regular fa-star"></i>';
    }
}

const modalMenu = document.querySelector('.modal-menu');
const modalClose = document.querySelector('.modal-close');
const modalImage = document.querySelector('.modal-menu .modal-body img');
const modalTitle = document.querySelector('.modal-menu .deskripsi h3');
const modalDesc = document.querySelector('.modal-menu .deskripsi p');
const modalPrice = document.querySelector('.modal-menu .deskripsi h4');
const detailMenu = document.querySelectorAll('.detail-menu');

detailMenu.forEach((btn) => {
    btn.onclick = (e) => {
        e.preventDefault();
        
        const imgSrc = btn.getAttribute('data-img');
        const title = btn.getAttribute('data-title');
        const price = btn.getAttribute('data-price');
        const desc = btn.getAttribute('data-desc');
        const rating = parseFloat(btn.getAttribute('data-rating')) || 0;
        
        modalImage.src = imgSrc;
        modalTitle.textContent = title;
        modalPrice.textContent = price;
        modalDesc.textContent = desc;
        updateStars(rating);
        
        modalMenu.style.display = "block";
    }
});

modalClose.onclick = (e) => {
    e.preventDefault();
    modalMenu.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === modalMenu) {
        modalMenu.style.display = "none";
    }
}


let cart = []; 


function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
    alert(`${product.title} ditambahkan ke keranjang! (${cart.length} items)`);
}


function removeFromCart(index) {
    if (event) event.stopPropagation();
    cart.splice(index, 1);
    updateCartDisplay();
}




function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
    Cart.classList.add("active");
    alert(`${product.title} ditambahkan ke keranjang!`); 
}

document.addEventListener('click', (e) => {
    const btn = e.target.closest('.tambah-cart');
    
    if (btn) {
        e.preventDefault();
        const product = {
            img: btn.getAttribute('data-img'),
            title: btn.getAttribute('data-title'),
            price: btn.getAttribute('data-price')
        };
        addToCart(product);
    }
});


function updateCartDisplay() {
    const cartElement = document.getElementById('cart');


    cartElement.querySelectorAll('.cart-item').forEach(item => item.remove());


    cart.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        cartItem.innerHTML = `
            <div class="item-brg">
                <img src="${product.img}" alt="${product.title}">
                <div class="item-detail">
                    <h3>${product.title}</h3>
                    <div class="item-harga">${product.price}</div>
                </div>
            </div>
            <i class="fa-solid fa-trash" onclick="removeFromCart(${index})"></i>
        `;

        cartElement.appendChild(cartItem);
    });


    const cartCount = document.getElementById('cart-count');
    if (cartCount) cartCount.textContent = cart.length;


    let totalHarga = 0;
    cart.forEach(product => {
        const harga = parseInt(product.price.replace(/[^\d]/g, ''));
        totalHarga += harga;
    });

    const totalPrice = document.getElementById('total-price');
    const btnCheckout = document.getElementById('btn-checkout');

    if (totalPrice) totalPrice.textContent = `Rp ${totalHarga.toLocaleString()}`;

    if (btnCheckout) {
        btnCheckout.textContent = `Checkout (${cart.length} item)`;
        btnCheckout.style.display = cart.length > 0 ? 'block' : 'none';
    }
}

document.addEventListener('click', function(e) {
    if (e.target.closest('#btn-checkout')) {
        if (cart.length === 0) {
            e.preventDefault();
            alert('Keranjang kosong! Tambahkan produk dulu.');
        }
    }
});
