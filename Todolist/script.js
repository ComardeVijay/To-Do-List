const tasks = [];
function addTask() {
  const text = taskInput.value.trim();
  const priority = prioritySelect.value;
  if (!text) return alert("Enter a task.");
  tasks.push({ text, priority });
  taskInput.value = "";
  renderTasks();
}
function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  const order = { High: 1, Medium: 2, Low: 3 };
  tasks.sort((a, b) => order[a.priority] - order[b.priority]);
  tasks.forEach((t, i) => {
    list.innerHTML += `<li class="${t.priority.toLowerCase()}">
      ${t.text} <button class="delete-btn" onclick="deleteTask(${i})">Delete</button>
    </li>`;
  });
}
function deleteTask(i) {
  tasks.splice(i, 1);
  renderTasks();
}
