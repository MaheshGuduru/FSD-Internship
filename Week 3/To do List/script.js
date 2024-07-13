document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const clearCompletedBtn = document.getElementById('clear-completed-btn');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            e.target.parentElement.remove();
        } else if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completed');
        }
    });

    clearCompletedBtn.addEventListener('click', () => {
        const completedTasks = document.querySelectorAll('#task-list li.completed');
        completedTasks.forEach(task => task.remove());
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }
});
