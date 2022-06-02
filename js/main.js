let arrowLogo = document.querySelector("#down_logo");

let Courses = arrowLogo.parentElement;

Courses.addEventListener("click", () => {
  let dropBox = document.querySelector(".drop_div");

       dropBox.classList.add('.show_drop');

       if (dropBox.classList.contains('show_drop')) {

           dropBox.classList.remove('show_drop');
       } else { 
           dropBox.classList.add('show_drop');
             
       }
 
});
  


//  menu section

let menu=document.querySelector('.main_menu');

menu.addEventListener('click', () => {


           phoneMenu();

  let first=  menu.firstElementChild;
  first.classList.add('.forward_first');

  let second=first.nextElementSibling;
  second.classList.add('.forward_second');

  if (first.classList.contains('forward_first')) {
    first.classList.add('backward_first');
    second.classList.add('backward_second');
    first.classList.remove('forward_first');
    second.classList.remove('forward_second');
      
  } else {
    first.classList.add('forward_first');
   second.classList.add('forward_second');
     first.classList.remove('backward_first');
    second.classList.remove('backward_second');
  }
  
})


function phoneMenu() {
           
}