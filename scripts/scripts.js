(()=> {
   'use strict';

   // removes overflow hidden on hero__container
   // (()=> {
   //    let heroContainer = document.querySelector('.hero__container');
   //    setTimeout(() => {
   //       heroContainer.classList.remove('overflow--hidden');
   //    },6500);
   // })();


      let errorIcon = document.querySelector('.error__icon');
      let errorMsg = document.querySelector('.input__container span');
      let email = document.querySelector('.input__container .email');
      let errorTransition = 'input__error--transition';
      let errorHide = 'input__error--hide';
      let errorEmail = 'email__error--show';
      addErrorStyle(errorIcon, errorHide);
      addErrorStyle(errorMsg, errorHide);
      setTimeout(() => {
         addErrorStyle(errorIcon, errorTransition);
         addErrorStyle(errorMsg, errorTransition);
      },6500);

      eventListenerAdd();


   function eventListenerAdd() {
      let form = document.querySelector('.form');
      form.addEventListener('submit', emailValidation);
      email.addEventListener('focus', emailValidation);
   }
   
   function addErrorStyle(markup, style) {
      markup.classList.add(style);
   }

   function emailValidation(event) {
      addErrorStyle(errorIcon, errorHide);
      addErrorStyle(errorMsg, errorHide);
      removeErrorStyle(email, errorEmail);
      event.preventDefault();
      if (event.type === 'submit') {
         inputOnSubmit();
      }
   }

   function emailRegexValidation(email) {
      let pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      let result = (pattern.test(email));
      return result;
   }

   function inputOnSubmit() {
      if(emailRegexValidation(email.value) === true) {
         alert(`your email is valid\nEmail: ${email.value}`);
         return;
      }
      removeErrorStyle(errorIcon, errorHide);
      removeErrorStyle(errorMsg, errorHide);
      addErrorStyle(email, errorEmail);
      return;
   }

   function removeErrorStyle(markup, style) {
      markup.classList.remove(style);
   }

})();