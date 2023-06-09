const menu_icon = document.querySelector(".menu_icon");
const Menu_items = document.querySelector("#Menu_items");
const All_img = document.querySelectorAll(".small_img_col img");
const singe_img = document.querySelector(".singe_img");
const range = document.getElementsByClassName("range");

// ============================ this is a mobile navbar effect ==================================

menu_icon.addEventListener("click", () => {
  Menu_items.classList.toggle("menu_items_show");
});

// ============================ this is a Image Select effect ==================================

All_img.forEach((e) => {
  e.addEventListener("click", Get_src);
});

function Get_src(src) {
  singe_img.setAttribute("src", src.target.src);
}

// ============================ this is input correction ==================================

Array.from(range).forEach((range) => {
  // console.log(e);

  range.addEventListener("click", () => {
    range.value < 1 ? (range.value = 1) : range.value;
    console.log(range.value);
  });
});
