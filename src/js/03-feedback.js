import throttle from 'lodash.throttle';

const THROTTLE_DELAY = 500;
const DATA_LOCAL_KEY = 'feedback-form-state';

const loginForm = document.querySelector('.feedback-form');
const emailInput = loginForm.email;
const messageInput = loginForm.message;

setInputsValues();

loginForm.addEventListener('submit', onSubmit);
loginForm.addEventListener('input', throttle(formHandler, THROTTLE_DELAY));

function formHandler () {
  const email = emailInput.value;
  const message = messageInput.value;

  localStorage[DATA_LOCAL_KEY] = JSON.stringify({email, message});
}

function onSubmit (e) {
  e.preventDefault();

  console.log({
    [emailInput.name] : emailInput.value,
    [messageInput.name] : messageInput.value
  });

  loginForm.reset();
  localStorage[DATA_LOCAL_KEY] = '';
}

function setInputsValues () {
  if (!localStorage[DATA_LOCAL_KEY]) return;
  const {email, message} = JSON.parse(localStorage[DATA_LOCAL_KEY]);

  if (email) emailInput.value = email;
  if (message) messageInput.value = message;
}