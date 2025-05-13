function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  
  if (taskInput.value.trim() === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskInput.value}</span>
    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
  `;
  
  li.addEventListener('click', function() {
    this.classList.toggle('completed');
  });

  taskList.appendChild(li);
  taskInput.value = '';
}

function deleteTask(button) {
  const li = button.parentElement;
  li.remove();
}