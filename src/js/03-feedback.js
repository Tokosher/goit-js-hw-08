import throttle from 'lodash.throttle';

const THROTTLE_DELAY = 500;
const EMAIL_LOCAL_KEY = 'feedback-form-state-email';
const MESSAGE_LOCAL_KEY = 'feedback-form-state-message';

const loginForm = document.querySelector('form.feedback-form');
const emailInput = loginForm.elements.email;
const textAreaMessage = loginForm.elements.message;

setInputsValues();

emailInput.addEventListener('input', throttle(inputsHandler, THROTTLE_DELAY));
textAreaMessage.addEventListener('input', throttle(inputsHandler, THROTTLE_DELAY));
loginForm.addEventListener('submit', onSubmit);

function inputsHandler (e) {
  /**
   * We can use this type of check if we have just 2 inputs on form
   */
  const currentLocalStorageKey = e.target.name === 'email' ? EMAIL_LOCAL_KEY : MESSAGE_LOCAL_KEY;

  localStorage[currentLocalStorageKey] = e.target.value;
}

function onSubmit (e) {
  e.preventDefault();

  console.log({
    [emailInput.name] : emailInput.value,
    [textAreaMessage.name] : textAreaMessage.value
  });

  loginForm.reset();
  localStorage[EMAIL_LOCAL_KEY] = '';
  localStorage[MESSAGE_LOCAL_KEY] = '';
}

function setInputsValues () {
  if (localStorage[EMAIL_LOCAL_KEY]) {
    emailInput.value = localStorage[EMAIL_LOCAL_KEY];
  }

  if (localStorage[MESSAGE_LOCAL_KEY]) {
    textAreaMessage.value = localStorage[MESSAGE_LOCAL_KEY];
  }
}