function validEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const buttonSubmit = document.getElementById("button-submit");
const buttonDismiss = document.getElementById("button-dismiss");
const emailInput = document.getElementById("emailInput");
const thanks = document.querySelector(".thanks");
const card = document.querySelector(".card");
const submittedEmailSpan = document.getElementById("submitted-email");
const textValid = document.querySelector(".text-valid");

buttonSubmit.addEventListener('click', (event) => {
  const email = document.getElementById("emailInput").value
  if (validEmail(email)) {
    submittedEmailSpan.textContent = email;
    emailInput.classList.remove('invalid');
    textValid.classList.remove('active');
    thanks.classList.toggle("active");
    card.classList.toggle("none");
  }
  else {
    emailInput.classList.add('invalid');
    textValid.classList.add('active');
  }

});

buttonDismiss.addEventListener('click', (event) => {
  thanks.classList.remove('active');
  card.classList.remove('none');
  
  emailInput.value = '';
  
  emailInput.classList.remove('invalid');
  textValid.classList.remove('active');
});
