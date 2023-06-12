const menu_icon = document.querySelector(".menu_icon");
const Menu_items = document.querySelector("#Menu_items");
const All_img = document.querySelectorAll(".small_img_col img");
const singe_img = document.querySelector(".singe_img");
const range = document.getElementsByClassName("range");
const form_btn = document.querySelectorAll(".form_btn span");
const Login_form = document.getElementById("Login_form");
const Register_form = document.getElementById("Register_form");
const Indicator = document.getElementById("Indicator");

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

// ============================ this is login and registration form  effect ==================================

function Register() {
  Register_form.style.transform = " translateX(0rem)";
  Login_form.style.transform = " translateX(0rem)";
  Indicator.style.transform = " translateX(6.5rem)";
}

function login() {
  Register_form.style.transform = " translateX(19rem)";
  Login_form.style.transform = " translateX(19rem)";
  Indicator.style.transform = " translateX(0rem)";
}
