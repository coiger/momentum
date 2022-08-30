const HIDDEN_CLASS = 'hidden';
const USERNAME_KEY = 'username';

const $loginForm = document.getElementById('login');
const $greeting = document.getElementById('greeting');

const username = localStorage.getItem(USERNAME_KEY);
if (username) {
  $greeting.textContent = `Hello ${username}`;
  $loginForm.classList.add(HIDDEN_CLASS);
  $greeting.classList.remove(HIDDEN_CLASS);
}

$loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = e.target.firstElementChild.value;
  $greeting.textContent = `Hello ${username}`;
  localStorage.setItem(USERNAME_KEY, username);

  $loginForm.classList.add(HIDDEN_CLASS);
  $greeting.classList.remove(HIDDEN_CLASS);
});
