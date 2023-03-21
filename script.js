const inputtedEmail = document.querySelector(".get input"),
  Btn = document.querySelector(".get button"),
  error = document.querySelector(".get .error");


Btn.addEventListener("click", ()=>{

     var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(validRegex.test(inputtedEmail.value)){
         error.textContent = "Thank you!";
        error.style.color = "hsl(176, 68%, 64%)";
      }
      else{
        error.textContent = "Please enter a valid emails address";
      }
    setTimeout(() => {
        error.textContent =""
    }, 5000);
});