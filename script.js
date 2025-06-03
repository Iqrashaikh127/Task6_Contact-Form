const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  // Name Validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Message Validation
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required.";
    isValid = false;
  } else {
    messageError.textContent = "";
  }

  // Success Message
  if (isValid) {
    successMessage.textContent = "Your message has been sent successfully!";
    form.reset();
    setTimeout(() => (successMessage.textContent = ""), 4000);
  }
});
