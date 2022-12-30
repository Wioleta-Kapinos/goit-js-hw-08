import _ from 'lodash';
const form = document.querySelector(".feedback-form");
const inputEmail = document.querySelector("input");
const inputMessage = document.querySelector("textarea");
const STORAGE_KEY = "feedback-form-state";
let inputsForm
form.addEventListener("input", _.throttle(() => {
 const { email, message } = form.elements;
    inputsForm = {
    email: email.value,
    message: message.value,
    }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputsForm));
},500));
const currentValues = JSON.parse(localStorage.getItem(STORAGE_KEY));
window.addEventListener("load", () => {
   if(currentValues !== null) {
      inputEmail.value = currentValues.email;
      inputMessage.value = currentValues.message;
   };
}); 
form.addEventListener("submit", (event)=> {
   event.preventDefault();
   // if(!localStorage.getItem(STORAGE_KEY)) {
   //    inputsForm = {
   //       email: "",
   //      message: "",
   //    }
   //  console.log(inputsForm);
   // } else {
   //    console.log(currentValues);
   // };
   if(currentValues !==null) {
      console.log(currentValues);
    } else {
       inputsForm = {
          email: "",
          message: "",
       };
       console.log(inputsForm);
    };
   localStorage.removeItem(STORAGE_KEY);
   form.reset();
});