* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Work Sans', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
    transition: all 0.3s ease;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    backdrop-filter: blur(10px);
}

.header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    text-align: center;
    position: relative;
}

.header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: 600;
}

.datetime {
    font-size: 1rem;
    opacity: 0.9;
    margin-bottom: 20px;
}

.theme-switcher {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s ease;
}

.theme-switcher:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: rotate(180deg);
}

.input-container {
    padding: 30px;
    display: flex;
    gap: 10px;
}

.todo-input {
    flex: 1;
    padding: 15px 20px;
    border: 2px solid #e0e0e0;
    border-radius: 50px;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;
    font-family: 'Work Sans', sans-serif;
}

.todo-input:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.add-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 15px 25px;
    border-radius: 50px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
}

.add-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.todos-container {
    padding: 0 30px 30px;
}

.todo-item {
    background: #f8f9ff;
    margin-bottom: 15px;
    padding: 20px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    gap: 15px;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.todo-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: scaleY(0);
    transition: transform 0.3s ease;
}

.todo-item:hover::before {
    transform: scaleY(1);
}

.todo-item:hover {
    transform: translateX(5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.todo-item.completed {
    opacity: 0.7;
    background: #e8f5e8;
}

.todo-item.completed .todo-text {
    text-decoration: line-through;
    color: #666;
}

.check-btn {
    background: none;
    border: 2px solid #ddd;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    color: transparent;
    font-size: 0.9rem;
}

.check-btn:hover {
    border-color: #4caf50;
    transform: scale(1.1);
}

.check-btn.checked {
    background: #4caf50;
    border-color: #4caf50;
    color: white;
}

.todo-text {
    flex: 1;
    font-size: 1.1rem;
    color: #333;
    transition: all 0.3s ease;
    word-wrap: break-word;
}

.delete-btn {
    background: #ff4757;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0;
}

.todo-item:hover .delete-btn {
    opacity: 1;
}

.delete-btn:hover {
    background: #ff3742;
    transform: scale(1.1);
}

.stats {
    padding: 20px 30px;
    background: rgba(102, 126, 234, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    color: #666;
}

.clear-all {
    background: #ff4757;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.clear-all:hover {
    background: #ff3742;
    transform: translateY(-1px);
}

.clear-all:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
}

.empty-state {
    text-align: center;
    padding: 40px;
    color: #999;
}

.empty-state i {
    font-size: 3rem;
    margin-bottom: 15px;
    opacity: 0.5;
}

/* Dark Theme */
body.dark-theme {
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
}

body.dark-theme .container {
    background: rgba(52, 73, 94, 0.95);
    color: #ecf0f1;
}

body.dark-theme .todo-item {
    background: #34495e;
    color: #ecf0f1;
}

body.dark-theme .todo-item.completed {
    background: #2c3e50;
}

body.dark-theme .todo-input {
    background: #34495e;
    border-color: #34495e;
    color: #ecf0f1;
}

body.dark-theme .todo-input::placeholder {
    color: #bdc3c7;
}

body.dark-theme .stats {
    background: rgba(52, 73, 94, 0.3);
    color: #bdc3c7;
}

body.dark-theme .empty-state {
    color: #bdc3c7;
}

body.dark-theme .todo-text {
    color: #ecf0f1;
}

body.dark-theme .check-btn {
    border-color: #7f8c8d;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        margin: 10px;
    }
    
    .header h1 {
        font-size: 2rem;
    }
    
    .input-container {
        padding: 20px;
        flex-direction: column;
    }
    
    .todos-container {
        padding: 0 20px 20px;
    }
    
    .todo-item {
        padding: 15px;
    }
    
    .stats {
        padding: 15px 20px;
        flex-direction: column;
        gap: 10px;
    }
    
    .theme-switcher {
        top: 15px;
        right: 15px;
        padding: 8px;
        font-size: 1rem;
    }
}
