const $todoForm = document.getElementById('todo');
const $todoInput = $todoForm.firstElementChild;
const $todoList = document.getElementById('todo-list');

/**
 * Add todo item on todo list
 * @param {string} newTodo a text of todo
 */
function addTodoItem(newTodo) {
  const $todoText = document.createElement('span');
  $todoText.textContent = newTodo;

  const $deleteBtn = document.createElement('button');
  $deleteBtn.textContent = '❌';
  $deleteBtn.addEventListener('click', (e) => {
    e.target.parentNode.remove();
  });

  const $newTodo = document.createElement('li');
  $newTodo.appendChild($todoText);
  $newTodo.appendChild($deleteBtn);

  $todoList.appendChild($newTodo);
}

$todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newTodo = $todoInput.value;
  $todoInput.value = '';
  addTodoItem(newTodo);
});
