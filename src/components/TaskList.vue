<script setup>
import { ref, onMounted, reactive, watch, inject } from 'vue';
import Task from './Task.vue';

// interface Task {
//   id: number;
//   task: string;
//   complete: boolean; 
//   due_date: string; 
//   priority_level: string;
// }

 const state = reactive({
    tasks: []
 });

 const isModalOpen = inject('isModalOpen'); // Injecting the state
 const isTaskUpdated = inject('task-updated'); // Injecting the state
const handleModalToggle = inject('handleModalToggle'); // Injecting the method

// Initial load of tasks
const loadTasks = () => {
  state.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
};



onMounted(() => {
  loadTasks(); // Load tasks when the component mounts
});

watch([isModalOpen, isTaskUpdated], () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      state.tasks = storedTasks;
    }

    console.log(state.tasks);
});
</script>

<template>
<div class="my-8">
    <div v-if="state.tasks.length < 1" class="w-full p-5 bg-neutral-veryDarkBlue flex justify-center items-center rounded-t text-neutral-lightGrayishBlue min-h-[500px]">
       <p> No Tasks </p>
    </div>

<Task v-for="(task, idx) in state.tasks" :key="idx" :task="task" :index="idx" @task-updated="loadTasks" />
</div>
</template>