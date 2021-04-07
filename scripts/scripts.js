
// removes overflow hidden on hero__container
(()=> {
   let heroContainer = document.querySelector('.hero__container');
   setTimeout(() => {
      heroContainer.classList.remove('overflow--hidden');
   },6500);
})();

