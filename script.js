const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

function newTodo() {
  const text = window.prompt('Введи назву завдання')?.trim();
  if (!text) {
    return;
  }

  const item = document.createElement('li');
  item.className = classNames.TODO_ITEM;

  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.addEventListener('change', updateCounts);

  const title = document.createElement('span');
  title.className = classNames.TODO_TEXT;
  title.textContent = text;
  label.append(checkbox, ' ', title);

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = classNames.TODO_DELETE;
  deleteButton.textContent = 'Видалити';
  deleteButton.addEventListener('click', () => {
    item.remove();
    updateCounts();
  });

  item.append(label, ' ', deleteButton);
  list.append(item);
  updateCounts();
}

function updateCounts() {
  itemCountSpan.textContent = list.children.length;
  uncheckedCountSpan.textContent = list.querySelectorAll('input[type="checkbox"]:not(:checked)').length;
}
