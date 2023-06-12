// SHOP Dropdown Menu
const shopButton = document.querySelector(".navbar__shop-menu");
const shopSubMenu = document.querySelector("#shop-submenu");

shopButton.addEventListener("click", () => {
  shopSubMenu.classList.toggle("visible");
});

document.addEventListener("click", (event) => {
  if (
    !shopButton.contains(event.target) &&
    !shopSubMenu.contains(event.target)
  ) {
    shopSubMenu.classList.remove("visible");
  }
});

// CART DROPDOWN MENU
const cartButton = document.querySelector(".navbar__cart");
const cartMenu = document.querySelector(".cart-dropdown");

cartButton.addEventListener("click", () => {
  cartMenu.classList.toggle("cart-dropdown--visible");
});
document.addEventListener("click", (event) => {
  if (!cartMenu.contains(event.target) && event.target !== cartButton) {
    cartMenu.classList.remove("cart-dropdown--visible");
  }
});

// VANILLA-LAZYLOAD
var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});


