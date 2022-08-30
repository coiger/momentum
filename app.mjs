const HIDDEN_CLASS = 'hidden';
const USERNAME_KEY = 'username';

const $loginForm = document.getElementById('login');
const $greeting = document.getElementById('greeting');

function paintGreetings(username) {
  $greeting.textContent = `Hello ${username}`;
  $loginForm.classList.add(HIDDEN_CLASS);
  $greeting.classList.remove(HIDDEN_CLASS);
}

const username = localStorage.getItem(USERNAME_KEY);
if (username) paintGreetings(username);

$loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = e.target.firstElementChild.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
});
