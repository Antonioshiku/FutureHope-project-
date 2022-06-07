let arrowLogo = document.querySelector("#down_logo");

let Courses = arrowLogo.parentElement;

Courses.addEventListener("click", () => {
  let dropBox = document.querySelector(".drop_div");

  dropBox.classList.add(".show_drop");

  if (dropBox.classList.contains("show_drop")) {
    dropBox.classList.remove("show_drop");
  } else {
    dropBox.classList.add("show_drop");
  }
});

//  menu section

let menu = document.querySelector(".main_menu");

menu.addEventListener("click", () => {
  phoneMenu();

  let first = menu.firstElementChild;
  first.classList.add(".forward_first");

  let second = first.nextElementSibling;
  second.classList.add(".forward_second");

  if (first.classList.contains("forward_first")) {
    first.classList.add("backward_first");
    second.classList.add("backward_second");
    first.classList.remove("forward_first");
    second.classList.remove("forward_second");
  } else {
    first.classList.add("forward_first");
    second.classList.add("forward_second");
    first.classList.remove("backward_first");
    second.classList.remove("backward_second");
  }
});

function phoneMenu() {
  let XLogo = document.querySelector("#X_logo");
  let menuSite = document.querySelector(".main_phone_menu");
  menuSite.classList.add("show_menu_site");
  menuSite.classList.remove('hide_menu_site');

  XLogo.onclick= () => {
               menuSite.classList.remove('show_menu_site')
               menuSite.classList.add('hide_menu_site');
  }
}


window.addEventListener('scroll' , () => {
  let mainNavCon=document.querySelector('.main_nav_con');
           
      if (window.scrollY >243) {
  mainNavCon.classList.add('show_nav')

      } else {

  mainNavCon.classList.remove('show_nav')

      }

})