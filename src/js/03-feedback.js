import _ from 'lodash';
const form = document.querySelector(".feedback-form");
const inputEmail = document.querySelector("input");
const inputMessage = document.querySelector("textarea");
const STORAGE_KEY = "feedback-form-state";
form.addEventListener("input", _.throttle(() => {
 const { email, message } = form.elements;
    let inputsForm = {
    email: email.value,
    message: message.value,
    }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputsForm));
},500));
const currentValues = JSON.parse(localStorage.getItem(STORAGE_KEY));
form.addEventListener("submit", (event)=> {
   event.preventDefault();
   console.log(currentValues);
   localStorage.removeItem(STORAGE_KEY);
   form.reset();
});
window.addEventListener("load", () => {
   if(currentValues !== null) {
      inputEmail.value = currentValues.email;
      inputMessage.value = currentValues.message;
   };
}); 