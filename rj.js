const menubar1 = document.querySelector("#navmenu-bar");
const navMenu1 = document.querySelector(".nav-items");

menubar1.addEventListener("click", mobileMenu);
navMenu1.addEventListener("click", mobileMenuClose);

function mobileMenu() {
  menubar1.classList.toggle("active");
  navMenu1.classList.toggle("active");
}
function mobileMenuClose() {
  // menubar1.classList.toggle("active");
  navMenu1.classList.toggle("active");
}

let submit1 = document.getElementById("submi");
let contact_form = document.getElementById("contact-form");

submit1.addEventListener("click", () => {
  // e.preventDefault();

  let name1 = document.getElementById("names");
  let subject1 = document.getElementById("subject");
  let email = document.getElementById("email");
  let text_area = document.getElementById("tex-area").value;


  if (name1.value === "") {
    alert("Fill the Name");
    // name1.value.focus();
    return false;
  }

  if (subject1.value.length < 3 || subject1.value.length > 10) {
    alert("Subject must > 3 and < 10 letters");
    return false;
  }

  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value == "") {
    alert("Fill the Email Box");
    return false;
  } else if (email.value != email.value.match(validRegex)) {
    alert("Invalid email address!");
    return (email.value = "");
  }

  var maxWords = 5;
  text_area = text_area.value.split(" ");
  if (text_area.length < maxWords) {
    alert("Please Max 20 words Write");
    return false;
  }
});
const navigationHeight = document.querySelector('.header-part').offsetHeight;

document.documentElement.style.setProperty('--scroll-padding', navigationHeight + "px");
