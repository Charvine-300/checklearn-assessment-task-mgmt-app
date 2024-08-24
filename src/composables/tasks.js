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
function editTaskList(task, action) {
    const updatedTask = {
        task_name: task.taskName,
        due_date: task.dueDate,
        priority: task.priority,
        completed: task.completed ?? false,
    };

    let tasks = JSON.parse(localStorage.getItem('tasks'));

    if (!tasks) {
        tasks = [];
    }

    // Alter tasks list according to action
    switch(action) {
        case 'add':
            tasks.push(updatedTask);
            break;
        case 'edit':
              // Check if tasks exist and the id is valid
  if (tasks && task.id >= 0 && task.id < tasks.length) {
    // Update the task at the specified id
    tasks[task.id] = {
      ...tasks[task.id],
      ...updatedTask,
    };
  } else {
    console.error('Task not found or invalid id');
  }
  break;
        default:
            break;
    }

    // Update storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    state.tasks = tasks;
};


export {
    useTasksList,
    editTaskList
}