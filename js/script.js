// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("navLinks");
const authButtons = document.getElementById("authButtons");
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  authButtons.classList.toggle("active");
})
