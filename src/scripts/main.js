'use strict';

const consultationForm = document.querySelector('.consultation .form');
const contactsForm = document.querySelector('.contacts .form');

consultationForm.addEventListener('submit', event => {
  event.preventDefault();
  consultationForm.reset();
});

contactsForm.addEventListener('submit', event => {
  event.preventDefault();
  contactsForm.reset();
});
