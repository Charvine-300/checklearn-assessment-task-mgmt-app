<script setup>
import { ref, onMounted, reactive, watch, inject } from 'vue';
import Task from './Task.vue';
import { useTasksList } from '../composables/tasks';


 const isModalOpen = inject('isModalOpen');

//  Tasks list from composable
 const { state } = useTasksList();

// Initial load of tasks
// const loadTasks = () => {
//   state.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
// };

// onMounted(() => {
//   loadTasks(); // Load tasks when the component mounts
// });

// watch([isModalOpen], () => {
//     const storedTasks = JSON.parse(localStorage.getItem('tasks'));
//     if (storedTasks) {
//       state.tasks = storedTasks;
//     }

//     console.log(state.tasks);
// });
</script>

<template>
<div class="my-8">
    <div v-if="state.tasks.length < 1" class="w-full p-5 bg-neutral-veryDarkBlue flex justify-center items-center rounded-t text-neutral-lightGrayishBlue min-h-[500px]">
       <p> No Tasks </p>
    </div>

<Task v-for="(task, idx) in state.tasks" :key="idx" :task="task" :index="idx" 
@task-updated="loadTasks" 
/>
</div>
</template>