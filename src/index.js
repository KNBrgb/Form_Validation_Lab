// document.addEventListener(
//     "DOMContentLoaded",
//     function() {

const errorDisplay = document.getElementById("errorDisplay");
const registrationForm = document.getElementById("registration");
const loginForm = document.getElementById("login");

// use helper function to handle form submit
registrationForm.addEventListener("submit", validateRegistration);

/** HELPER FUNCTIONS */
function validateRegistration(event) {
  // prevent default submit logic
  event.preventDefault();

  if (!userNameValidation(registrationForm.elements.username)) {
    return false;
  }
  if (emailValidation(registrationForm.elements.email)) {
    return false;
  }
  //   displayError("test error");
}

function userNameValidation(userName) {
  if (userName.value === "") {
    displayError("Please enter a username");
    return false;
  }
  if (userName.value.length < 4) {
    displayError("The username must be at least four characters long");
    return false;
  }

  if (userName.value.match(/^(.)\1+$/)) {
    displayError("The username must be at least two unique characters long");
    return false;
  }

  if (!userName.value.match(/^[A-Za-z0-9]+$/)) {
    displayError(
      "The username cannot contain any special characters or whitespace"
    );
    return false;
  }
  return true;
}

function emailValidation(email) {
  // {

  //   if (email.value === "") displayError("Please enter a valid email address.");
  //   return false;
  // }
console.log(email.value);
  if (!email.value.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)) {
    displayError("Please enter a valid email address.");
    return false;
  }
  if(email.value.match("example\.com$")){

    displayError('"The email must not be from the domain "example.com."');
    return false;
  }
  return true;
}

function displayError(error) {
  errorDisplay.textContent = error;
  errorDisplay.style.display = "block";
  setTimeout(() => {
    errorDisplay.style.display = "none";
  }, 2000);
}
// });
