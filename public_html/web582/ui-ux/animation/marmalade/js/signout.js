console.log('js/signout.js is loaded');

const signout = document.querySelector('#signout');
signout.addEventListener('click', signOut);

function signOut(event) {
  event.preventDefault();
  window.localStorage.clear();
  readMessage();
  window.location.href = 'login.html';
}