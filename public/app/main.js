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
  cartMenu.classList.toggle("visible");
});
document.addEventListener("click", (event) => {
  if (
    !cartButton.contains(event.target) &&
    !cartMenu.contains(event.target)
  ) {
    cartMenu.classList.remove("visible");
  }
});

// SORT BY Dropdown Menu

// function resizeSelect() {
//   const selectElement = document.querySelector(".subheader__sort-menu");
//   const selectedOption = selectElement.options[selectElement.selectedIndex];
//   const selectedOptionText = selectedOption.text;

//   const dummyElement = document.createElement("span");
//   dummyElement.style.display = "none";
//   dummyElement.style.fontFamily = window.getComputedStyle(selectElement).getPropertyValue("font-family");
//   dummyElement.style.fontSize = window.getComputedStyle(selectElement).getPropertyValue("font-size");
//   dummyElement.textContent = selectedOptionText;

//   document.body.appendChild(dummyElement);
//   const optionWidth = dummyElement.offsetWidth;
//   document.body.removeChild(dummyElement);

//   selectElement.style.width = optionWidth + "rem";
// }
