const HIDDEN_CLASS = 'hidden';

const $loginForm = document.getElementById('login');
const $greeting = document.getElementById('greeting');

$loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = e.target.firstElementChild.value;
  $greeting.textContent = `Hello ${username}`;

  $loginForm.classList.add(HIDDEN_CLASS);
  $greeting.classList.remove(HIDDEN_CLASS);
});
