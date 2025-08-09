// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("navLinks");
const authButtons = document.getElementById("authButtons");
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  authButtons.classList.toggle("active");
})


const categoryButtons = document.querySelectorAll('.category-btn');
const products = document.querySelectorAll('.product-card');
const productList = document.querySelector('.main-featured-products-list');

let currentCategory = 'Cat'; 
let currentSlide = 0;
const productsPerPage = 3;

function filterProducts(category) {
  currentCategory = category;
  currentSlide = 0;

  categoryButtons.forEach(btn => {
    btn.setAttribute('aria-pressed', btn.textContent === category);
    btn.style.backgroundColor = btn.textContent === category ? 'orange' : 'transparent';
    btn.style.color = btn.textContent === category ? '#fff' : '#f7be15';
  });

  const filtered = Array.from(products).filter(p => p.dataset.category === category);
  products.forEach(p => p.style.display = 'none');

  filtered.slice(0, productsPerPage).forEach(p => {
    p.style.display = 'block';
  });
}

function showSlide(direction) {
  const filtered = Array.from(products).filter(p => p.dataset.category === currentCategory);
  const totalSlides = Math.ceil(filtered.length / productsPerPage);

  if (direction === 'next' && currentSlide < totalSlides - 1) {
    currentSlide++;
  } else if (direction === 'prev' && currentSlide > 0) {
    currentSlide--;
  }

  filtered.forEach(p => p.style.display = 'none');
  const start = currentSlide * productsPerPage;
  const end = start + productsPerPage;
  filtered.slice(start, end).forEach(p => {
    p.style.display = 'block';
  });
}

categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterProducts(btn.textContent);
  });
});

document.querySelector('.arrow-left').addEventListener('click', () => {
  showSlide('prev');
});

document.querySelector('.arrow-right').addEventListener('click', () => {
  showSlide('next');
});

filterProducts(currentCategory);

