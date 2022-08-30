const TODOS_KEY = 'todos';

const $todoForm = document.getElementById('todo');
const $todoInput = $todoForm.firstElementChild;
const $todoList = document.getElementById('todo-list');

$todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newTodo = $todoInput.value;
  $todoInput.value = '';
  addTodoItem(newTodo);
});

let todos = new Map();
loadTodos(); // On load

/**
 * Add todo item on local storage
 * @param {number} newId an id of todo
 * @param {string} newTodo a text of todo
 */
function saveTodo(newId, newTodo) {
  todos.set(newId, newTodo);
  localStorage.setItem(TODOS_KEY, JSON.stringify([...todos]));
}

/**
 * Remove todo item from local storage
 * @param {number} id an id of todo
 */
function removeTodo(id) {
  todos.delete(id);
  localStorage.setItem(TODOS_KEY, JSON.stringify([...todos]));
}

/**
 * Load todo list from local storage
 */
function loadTodos() {
  const jsonTodos = localStorage.getItem(TODOS_KEY);
  if (jsonTodos) todos = new Map(JSON.parse(jsonTodos));
  todos.forEach((todo, id) => printTodoItem(id, todo));
}

/**
 * Add todo item in todo list
 * @param {string} newTodo a text of todo
 */
function addTodoItem(newTodo) {
  const newId = Date.now();
  printTodoItem(newId, newTodo);
  saveTodo(newId, newTodo);
}

/**
 * print todo item on screen
 * @param {string} newTodo a text of todo
 */
function printTodoItem(newId, newTodo) {
  const $todoText = document.createElement('span');
  $todoText.textContent = newTodo;

  const $deleteBtn = document.createElement('button');
  $deleteBtn.textContent = '❌';
  $deleteBtn.classList.add('deleteBtn');
  $deleteBtn.addEventListener('click', (e) => {
    const $target = e.target.parentNode;
    removeTodo(+$target.id);
    $target.remove();
  });

  const $newTodo = document.createElement('li');
  $newTodo.id = newId;
  $newTodo.appendChild($deleteBtn);
  $newTodo.appendChild($todoText);

  $todoList.appendChild($newTodo);
}
