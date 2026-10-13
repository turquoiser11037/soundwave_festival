/*form*/

const form = document.getElementById('form')
const error_element = document.getElementById('error')
const name_input = document.getElementById('name')
const email_input = document.getElementById('email')
const contact_input = document.getElementById('contact-number')

form.addEventListener('submit', (e) => {
  const messages = [];
  error_element.innerText = '';
  formValid = true;
  if (name_input.value.trim() === "") {
    messages.push('Name is required');
    formValid = false;
  }

  if (email_input.value.trim() === "") {
    messages.push('Email is required');
    formValid = false;
  }

  if (contact_input.value.trim() === "") {
    messages.push('Contact number is required');
    formValid = false;
  }

  if (formValid) {
    e.preventDefault()
    document.getElementById('error').innerHTML = "Your form has been submitted. Thank you"
  }

  if (messages.length > 0) {
    e.preventDefault()
    error_element.innerText = messages.join(', ');
  }

});