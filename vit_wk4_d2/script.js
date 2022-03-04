var OWNER_EMAIL = "muckity@muck.com";
var OWNER_PASSWORD = "strike";

var listofAuthUsers = [
    {email: "mad@muck.com", password: "whackamole"},
    {email: "amok@muck.com", password: "qwerty"}
];

function login() {
    var emailInputValue = document.querySelector("#emailInput"). value.toLowerCase();
    var passwordInputValue = document.querySelector("#passwordInput"). value.toLowerCase();

    console.log(emailInputValue, passwordInputValue);

    var isAuth = validate(emailInputValue, passwordInputValue);
    console.log(isAuth);
    if (isAuth === true); {
    var errorMessage = document.querySelector("#error");
    errorMessage.getElementsByClassName.visibility ="hidden";
} else {
var errorMessage = document.querySelector("#error");
errorMessage.style.visibility = "visible";
}
}

function validate(email, password) {
    if (email == OWNER_EMAIL && password == OWNER_PASSWORD) {
        return true;
    } else {
        return false;
    }
    for (let i = 0; i < listOfAuthUsers.length; i++) {
        if (listofAuthUsers[i].email === email) {
         if (listofAuthUsers[i].password ===password) {
             return true;
         }
        }
    }
    return false;
}
window.onload = function() {
    clock();  
      function clock() {
      var now = new Date();
      var TwentyFourHour = now.getHours();
      var hour = now.getHours();
      var min = now.getMinutes();
      var sec = now.getSeconds();
      var mid = 'pm';
      if (min < 10) {
        min = "0" + min;
      }
      if (hour > 12) {
        hour = hour - 12;
      }    
      if(hour==0){ 
        hour=12;
      }
      if(TwentyFourHour < 12) {
         mid = 'am';
      }     
    document.getElementById('currentTime').innerHTML =     hour+':'+min+':'+sec +' '+mid ;
      setTimeout(clock, 1000);
      }
  }