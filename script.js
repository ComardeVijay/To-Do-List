let todos = JSON.parse(localStorage.getItem('todos')) || [];
let isDarkTheme = localStorage.getItem('darkTheme') === 'true';

const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todosContainer = document.getElementById('todosContainer');
const emptyState = document.getElementById('emptyState');
const stats = document.getElementById('stats');
const todoCount = document.getElementById('todoCount');
const clearBtn = document.getElementById('clearBtn');
const themeToggle = document.getElementById('themeToggle');
const datetimeElement = document.getElementById('datetime');

document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    setInterval(updateDateTime, 1000);
    renderTodos();
    applyTheme();
    setupEventListeners();
});

function setupEventListeners() {
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') addTodo();
    });
    themeToggle.addEventListener('click', toggleTheme);
    clearBtn.addEventListener('click', clearCompleted);

    todosContainer.addEventListener('click', function (e) {
        const item = e.target.closest('.todo-item');
        if (!item) return;
        const id = Number(item.dataset.id);

        if (e.target.closest('.check-btn')) toggleTodo(id);
        if (e.target.closest('.delete-btn')) deleteTodo(id);
    });
}

function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long', year: 'numeric', month: 'long',
        day: 'numeric', hour: '2-digit', minute: '2-digit'
    };
    datetimeElement.textContent = now.toLocaleDateString('en-US', options);
}

function addTodo() {
    const text = todoInput.value.trim();
    if (text === '') {
        showInputError();
        return;
    }

    const todo = {
        id: Date.now(),
        text,
        completed: false,
        createdAt: new Date().toISOString()
    };

    todos.unshift(todo);
    todoInput.value = '';
    saveTodos();
    renderTodos();
    showInputSuccess();
}

function showInputError() {
    todoInput.style.borderColor = '#ff4757';
    setTimeout(() => todoInput.style.borderColor = '#e0e0e0', 1000);
}

function showInputSuccess() {
    todoInput.style.borderColor = '#4caf50';
    setTimeout(() => todoInput.style.borderColor = '#e0e0e0', 1000);
}

function toggleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
    });
    saveTodos();
    renderTodos();
}

function deleteTodo(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        todos = todos.filter(todo => todo.id !== id);
        saveTodos();
        renderTodos();
    }
}

function clearCompleted() {
    const completedTodos = todos.filter(todo => todo.completed);
    if (completedTodos.length === 0) {
        alert('No completed tasks to clear!');
        return;
    }
    if (confirm(`Are you sure you want to delete ${completedTodos.length} completed task(s)?`)) {
        todos = todos.filter(todo => !todo.completed);
        saveTodos();
        renderTodos();
    }
}

function renderTodos() {
    if (todos.length === 0) {
        emptyState.style.display = 'block';
        stats.style.display = 'none';
        todosContainer.innerHTML = '';
        todosContainer.appendChild(emptyState);
        return;
    }

    emptyState.style.display = 'none';
    stats.style.display = 'flex';

    const remainingCount = todos.filter(todo => !todo.completed).length;
    const completedCount = todos.filter(todo => todo.completed).length;

    todoCount.textContent = `${remainingCount} task${remainingCount !== 1 ? 's' : ''} remaining`;
    clearBtn.disabled = completedCount === 0;

    todosContainer.innerHTML = todos.map(todo => `
        <div class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
            <button class="check-btn ${todo.completed ? 'checked' : ''}" type="button">
                <i class="fas fa-check"></i>
            </button>
            <span class="todo-text">${escapeHtml(todo.text)}</span>
            <button class="delete-btn" type="button">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    localStorage.setItem('darkTheme', isDarkTheme);
    applyTheme();
}

function applyTheme() {
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');
    if (isDarkTheme) {
        body.classList.add('dark-theme');
        themeIcon.className = 'fas fa-sun';
    } else {
        body.classList.remove('dark-theme');
        themeIcon.className = 'fas fa-moon';
    }
}
