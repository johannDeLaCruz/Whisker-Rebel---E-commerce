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
