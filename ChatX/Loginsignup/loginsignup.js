function toggleForms(event) {
  event.preventDefault(); // Prevent default link behavior

  var signupForm = document.getElementById("signupForm");
  var loginForm = document.getElementById("loginForm");

  signupForm.classList.toggle("hidden");
  loginForm.classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", function() {
  var signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Redirect to otp.html after a short delay (e.g., 2 seconds)
    setTimeout(function() {
      window.location.href = "file:///E:/Sanju/ChatX/Loginsignup/otp.html";
    }, 2000); // Adjust the delay as needed
  });
});
