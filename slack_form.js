const emailField = document.querySelector("#user_email");
emailField.focus();
const emailBox = document.querySelector(".input-field-group");

const signupForm = document.querySelector("#signup_form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInput = document.querySelector("#user_email");
  const validation = validateEmail(emailInput.value);
  if (validation) signupForm.submit();
});

function validateEmail(input) {
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
  if (emailPattern.test(input) === false) {
    emailBox.classList.add("error");
    return false;
  } else {
    emailBox.classList.remove("error");
    return true;
  }
}
