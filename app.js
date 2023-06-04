const menu_icon = document.querySelector(".menu_icon");
const Menu_items = document.querySelector("#Menu_items");
const cursor = document.querySelector("#cursor");

// ============================ this is a mobile navbar effect ==================================

menu_icon.addEventListener("click", () => {
  Menu_items.classList.toggle("menu_items_show");
});

// ============================ this is a cursor effect ==================================

window.onmouseover = function (e) {
  cursor.style.left = e.pageX - 25 + "px";
  cursor.style.top = e.pageY - 25 + "px";
  cursor.style.display = "block";
};
