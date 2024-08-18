<script setup>
import { defineProps, ref } from 'vue';
import Delete from '../assets/icons/delete.png';
import Edit from '../assets/icons/edit.png';

const props = defineProps({
  task: Object,
  index: Number
});

const handleComplete = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  if (tasks && tasks[props.index]) {
    tasks[props.index].completed = true;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Emit event to refresh task list
  emit('task-updated');
};
</script>

<template>
  <div class="w-full p-5 bg-neutral-veryDarkDesaturatedBlue flex justify-between items-center rounded-t border-b border-neutral-lightGrayishBlue">
    <div class="gap-3 flex items-center">
      <input type="checkbox" :checked="task.complete" :name="task.task_name" :id="task.task_name" class="w-[20px] h-[20px] rounded-full border border-neutral-lightGrayishBlue" />
      <div class="text-neutral-lightGrayishBlue">
        <p>
          {{  task.task_name  }}
        </p>
        <p class="font-light"> Due Date: {{ task.due_date }} </p>
      </div>
    </div>
    <div class="gap-3 flex items-center" v-if="!task.completed">
      <img :src="Edit" alt="edit icon" class="w-[20px] h-[20px] cursor-pointer" />
      <img :src="Delete" alt="delete icon" class="w-[20px] h-[20px] cursor-pointer" />
    </div>
  </div>
</template>