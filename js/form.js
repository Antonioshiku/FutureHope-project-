let Form = document.querySelector("#Log");
let Reg = document.querySelector("#Reg");
let Button=document.querySelector('#Log_button');
let regButton=document.querySelector('#Reg_button');
let RegText=document.querySelector('#Reg_text');



Form.addEventListener("click", () => {

  LogInForm();
});

Reg.addEventListener("click", () => {

  RegistentionForm();
});




function LogInForm() {
  if (Form.innerHTML == "Login") {
    let paForm = Form.parentElement.parentElement.parentElement;
    paForm.classList.add("d-none");
    let paReg = Reg.parentElement.parentElement.parentElement;
    paReg.classList.remove("d-none");
  } else {
    let paForm = Form.parentElement.parentElement.parentElement;
    paForm.classList.remove("d-none");
    let paReg = Reg.parentElement.parentElement.parentElement;
    paReg.classList.add("d-none");
  }


       
       let RegisterForm=Button.parentElement;
       RegisterForm.classList.add('d-none');
       let logInButton=regButton.parentElement;
       logInButton.classList.remove('d-none');
       
       RegText.innerHTML="Sign Up Here";
       RegText.style.transform='translateY(40px)';



}




function RegistentionForm() {
  if (Form.innerHTML == "Register") {
    let paForm = Form.parentElement.parentElement.parentElement;
    paForm.classList.add("d-none");
    let paReg = Reg.parentElement.parentElement.parentElement;
    paReg.classList.remove("d-none");
  } else {
    let paForm = Form.parentElement.parentElement.parentElement;
    paForm.classList.remove("d-none");
    let paReg = Reg.parentElement.parentElement.parentElement;
    paReg.classList.add("d-none");
  }

       
    let RegisterForm=Button.parentElement;
    RegisterForm.classList.remove('d-none');
    let logInButton=regButton.parentElement;
    logInButton.classList.add('d-none');
    

    RegText.innerHTML="Register Here";
    RegText.style.transform='translateY(0px)';


}



// if  (window.screen.width>818 && window.screen.width<1100) {
  
//     let formMain=document.querySelector('.main_con');
//     formMain.classList.add('show_main_form')


// } else {
//     console.log("error");
// }