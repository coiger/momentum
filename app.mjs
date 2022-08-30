const $loginForm = document.getElementById('login');

$loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = e.target.firstElementChild.value;
  $loginForm.classList.add('hidden');
});
