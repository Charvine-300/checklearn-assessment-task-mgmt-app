import { reactive, onMounted, onUnmounted } from 'vue'

const state = reactive({
    tasks: []
});

// Fetching Tasks list
function useTasksList() {
   ;

onMounted(() => {
    state.tasks = JSON.parse(localStorage.getItem('tasks')) || [];  
});

return { state };
};

// Add task to list
function addTaskToList(task) {
    const newTask = {
        task_name: task.taskName,
        due_date: task.dueDate,
        priority: task.priority,
        completed: false,
    };

    let tasks = JSON.parse(localStorage.getItem('tasks'));

    if (!tasks) {
        tasks = [];
    }

    tasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    state.tasks = tasks;
}

export {
    useTasksList,
    addTaskToList
}