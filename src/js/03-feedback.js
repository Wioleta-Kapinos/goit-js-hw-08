import _ from 'lodash';
const form = document.querySelector(".feedback-form");
const inputEmail = document.querySelector("input");
const inputMessage = document.querySelector("textarea");
const STORAGE_KEY = "feedback-form-state";

form.addEventListener("input", _.throttle(() => {
 const { email, message } = form.elements;
   inputsForm.email = email.value,
   inputsForm.message = message.value,
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputsForm));
},500));

let inputsForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
inputsForm ? "" : (inputsForm = { email: '', message: '' });
window.addEventListener("load", () => {
   inputEmail.value = inputsForm.email;
   inputMessage.value = inputsForm.message;
}); 

form.addEventListener("submit", (event)=> {
   event.preventDefault(); 
   if(inputsForm.email === '' || inputsForm.message === '') {
      return alert("Wypełnij wszystkie pola !!!");
   }
   console.log(inputsForm);
   localStorage.removeItem(STORAGE_KEY);
   form.reset();
});