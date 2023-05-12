document.getElementById('loginbtn').addEventListener('click',function(){
   const emailField = document.getElementById('loginemail');
   const email = emailField.value;

   const passField = document.getElementById('loginpass');
   const pass = passField.value;

   if(email ==='junayed15-3294@diu.edu.bd' && pass === 'junayed' || email ==='jihad@diu.edu.bd' && pass === 'jihad'){
      window.location.href='home.html'
   }
   else{
      alert('Invalid email or password')
   }
})