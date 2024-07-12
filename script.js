function generatePassword() {
  const lengthInput = document.getElementById("length").value;
  const length = parseInt(lengthInput);

  if (isNaN(length) || length < 4) {
    alert("Please enter a valid password length of at least 4");
    return;
  }

  const lowerCharset = "abcdefghijklmnopqrstuvwxyz";
  const upperCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberCharset = "0123456789";
  const symbolCharset = "!@#$%^&*()";
  const allCharset =
    lowerCharset + upperCharset + numberCharset + symbolCharset;

  let password = "";
  password += lowerCharset.charAt(
    Math.floor(Math.random() * lowerCharset.length)
  );
  password += upperCharset.charAt(
    Math.floor(Math.random() * upperCharset.length)
  );
  password += numberCharset.charAt(
    Math.floor(Math.random() * numberCharset.length)
  );
  password += symbolCharset.charAt(
    Math.floor(Math.random() * symbolCharset.length)
  );

  for (let i = 4; i < length; ++i) {
    password += allCharset.charAt(
      Math.floor(Math.random() * allCharset.length)
    );
  }

  // Shuffle the password to ensure randomness
  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  document.getElementById("password").value = password;
  document.getElementById("copyMessage").innerText = ""; // Clear previous copy message
}

function copyToClipboard() {
  const passwordField = document.getElementById("password");
  passwordField.select();
  passwordField.setSelectionRange(0, 99999); // For mobile devices

  if (passwordField.value !== "") {
    navigator.clipboard.writeText(passwordField.value).then(
      () => {
        document.getElementById("copyMessage").innerText = "Copied!";
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  } else {
    document.getElementById("copyMessage").innerText = "Nothing to copy!";
  }
}
