function validateEmail() {}

function validateName() {
  const nameRegex = /^[A-Za-z\u00C0-\u017F']+(\s[A-Za-z\u00C0-\u017F']{1,2})?$/;
  const minLength = 3;
  const maxLength = 25;
  var name = document.getElementById("firstName").value;
  var trimmedName = trim(name);

  if (trimmedName.length < minLength || trimmedName.length > maxLength) {
    alert(
      "Name too short or too long. Names should be between" +
        minLength +
        "-" +
        maxLength +
        "characters."
    );
  } // end if

  if (!nameRegex.test(trimmedName)) {
    alert(
      "Invalid name entered. Please enter your name without numbers or special characters"
    );
  } // end if

  return true; // Validation passed
} // end validateName()

function validateLastName() {}
