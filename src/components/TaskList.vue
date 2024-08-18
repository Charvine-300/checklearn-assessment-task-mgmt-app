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
const handleModalToggle = inject('handleModalToggle'); // Injecting the method

onMounted(() => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));

  if (storedTasks) {
    state.tasks = storedTasks;
  }
});

watch(isModalOpen, (newVal) => {
  if (!newVal) {
    // Logic to refresh tasks when modal closes
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      state.tasks = storedTasks;
    }
  }
});
</script>

<template>
<div class="my-8">

<Task v-for="(task, idx) in state.tasks" :key="idx" :task="task" />
</div>
</template>