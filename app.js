const menu_icon = document.querySelector(".menu_icon");
const Menu_items = document.querySelector("#Menu_items");

// ============================ this is a mobile navbar effect ==================================

menu_icon.addEventListener("click", () => {
  Menu_items.classList.toggle("menu_items_show");
});
