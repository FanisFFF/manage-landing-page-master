const emailInput = document.querySelector('input[name="email"]');
const form = document.querySelector("form");
const errorMessage = document.querySelector(".errorMessage");
function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return inputText.value.match(mailformat);
}
form.addEventListener("submit", (e) => {
  let messages = [];
  if (emailInput.value === "" || emailInput.value == null) {
    messages.push("Name is required");
  }
  if (!ValidateEmail(emailInput)) {
    messages.push("Invalid email format");
  }
  if (messages.length > 0) {
    e.preventDefault();
    console.log(errorMessage);
    errorMessage.style.display = "block";
    errorMessage.innerText = messages.join(", ");
  }
});

//menu
const menuIcon = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".menu-close");
const bg = document.querySelector(".bg-tint");

console.log(menuIcon);
menuIcon.addEventListener("click", () => {
  console.log("click");
  menu.classList.toggle("menu-active");
  menuIcon.style.display = "none";
  menuClose.style.display = "block";
  bg.classList.add("bg-tint-active");
});
menuClose.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
  menuClose.style.display = "none";
  menuIcon.style.display = "block";
  bg.classList.remove("bg-tint-active");
});
