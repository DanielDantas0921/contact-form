const firstNameSpan = document.getElementById("firstNameSpan");
const firstNameInput = document.getElementById("firstNameInput");
firstNameSpan.style.display = "none";

firstNameInput.addEventListener("change", function () {
  if (firstNameInput.value == "") {
    firstNameSpan.style.display = "inline-block";
  } else {
    firstNameSpan.style.display = "none";
  }
});

const lastNameSpan = document.getElementById("lastNameSpan");
const lastNameInput = document.getElementById("lastNameInput");
lastNameSpan.style.display = "none";

lastNameInput.addEventListener("change", function () {
  if (this.value == "") {
    lastNameSpan.style.display = "inline-block";
  } else {
    lastNameSpan.style.display = "none";
  }
});

const emailInput = document.getElementById("emailInput");
const emailSpan = document.getElementById("emailSpan");
emailSpan.style.display = "none";

emailInput.addEventListener("change", function () {
  if (this.value == "") {
    emailSpan.style.display = "inline-block";
  } else {
    emailSpan.style.display = "none";
  }
});

const generalEnquiryInput = document.getElementById("general-enquiry");
const supportRequestInput = document.getElementById("support-request");
const queryTypeSpan = document.getElementById("queryTypeSpan");
queryTypeSpan.style.display = "none";

// a parte de input do querytype está no arquivo inputRadios



const messageSpan = document.getElementById("emailMessageSpan");
const messageIdTextArea = document.getElementById("messageIdTextArea");
messageSpan.style.display = "none";

messageIdTextArea.addEventListener("change", function () {
  if (this.value == "") {
    messageSpan.style.display = "inline-block";
  } else {
    messageSpan.style.display = "none";
  }
});

const termsInput = document.getElementById("termsInputId");
const termsSpan = document.getElementById("termsSpan");
termsSpan.style.display = "none";

termsInput.addEventListener("change", function () {
  if (this.checked == true) {
    termsSpan.style.display = "none";
  } else {
    termsSpan.style.display = "inline-block";
  }
});

const myForm = document.querySelector("form");
myForm.addEventListener("submit", function (ev) {
    ev.preventDefault()
  if (firstNameInput.value == "") {
    firstNameSpan.style.display = "inline-block";
  }

  if (lastNameInput.value == "") {
    lastNameSpan.style.display = "inline-block";
  }

  if (emailInput.value == "") {
    emailSpan.style.display = "inline-block";
  }

  if (
    generalEnquiryInput.checked == true ||
    supportRequestInput.checked == true
  ) {
    queryTypeSpan.style.display = "none";
  } else {
    queryTypeSpan.style.display = "inline-block";
  }

  if(messageIdTextArea.value == ""){
    messageSpan.style.display = "inline-block"
  }
  if(termsInput.checked == false){
    termsSpan.style.display = "inline-block"
  }
});
