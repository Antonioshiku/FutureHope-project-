<!--  form section -->

<div class="main_con">

   <!-- Welcome text to be displayed before login! -->

   <div class="welcome_text">

      <div class="inner_text">
         <p>Welcome From</p>
         <h1>Future Hope</h1>
         <p>Enter your personal details and start your future step.</p>
         <span>Already have an account? <span id="Log">Login</span></span>
      </div>


   </div>
     

   <!-- Welcome text to be displayed after login! -->

   <div class="welcome_text d-none">

      <div class="inner_text">
         <p>Welcome back From</p>
         <h1>Future Hope</h1>
         <p>Choose the lessons for elementary and middle school that are best for your child.</p>
                            
       <p>I' don't have any account.<span id="Reg">Register</span></p>
      </div>


   </div>
     


   <!-- register form section -->
   <div class="form_section">
      <h4 id="Reg_text">Register Here</h4>
      <form  action="" method="POST" enctype="multipart/form-data">


         <input type="text" require name="username" id="username" placeholder="Full Name">
         <input type="email" name="useremail" id="useremail" placeholder="Email Address">
         <input type="password" name="userpassword" id="userpassword" placeholder="Password">
         <input type="password" name="repassword" id="repassword" placeholder="Confirm-Password">


         <button id="Log_button">Sign Up</button>

         <!-- register form section End! -->

      </form>


      <!-- LOg in form section! -->

      <form class="d-none" action="" method="POST" enctype="multipart/form-data">


         <input type="email" name="email" id="useremail" placeholder="Email Address">
         <input type="password" name="password" id="userpassword" placeholder="Password">


         <button id="Reg_button">Submit</button>

         <!-- register form section End! -->

      </form>



      <!-- Log in form section End! -->



   </div>

</div>