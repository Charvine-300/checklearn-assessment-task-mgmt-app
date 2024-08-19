<script setup>
import { defineProps, ref, defineEmits } from 'vue';
import Delete from '../assets/icons/delete.png';
import Edit from '../assets/icons/edit.png';
import EditTask from './EditTask.vue'

const openEditTaskModal = ref(false);

const handleModal = () => {
  console.log("regina george")
    openEditTaskModal.value = true;
  }


const props = defineProps({
  task: Object,
  index: Number
});

const emit = defineEmits(['toggle-modal', 'task-updated', 'update:open']);

const handleComplete = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  if (tasks && tasks[props.index]) {

    tasks[props.index].completed = tasks[props.index].completed ? false : true;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Emit event to refresh task list
  emit('task-updated');
};
</script>

<template>
  <div class="w-full p-5 bg-neutral-veryDarkDesaturatedBlue flex justify-between items-center rounded-t border-b border-neutral-lightGrayishBlue">
    <div class="gap-3 flex items-center">
      <input type="checkbox" :checked="task.completed" :name="task.task_name" :id="task.task_name" class="w-[20px] h-[20px] rounded-full border border-neutral-lightGrayishBlue" @click="handleComplete" />
      <div class="text-neutral-lightGrayishBlue">
        <p :class="{ 'line-through': task.completed }">
          {{  task.task_name  }}
        </p>
        <p :class="{ 'line-through': task.completed }" style="font-weight: 300;"> Due Date: {{ task.due_date }} </p>
      </div>
    </div>
    <div class="gap-3 flex items-center" v-if="!task.completed">
      <img :src="Edit" alt="edit icon" class="w-[20px] h-[20px] cursor-pointer" @click="handleModal" />
      <img :src="Delete" alt="delete icon" class="w-[20px] h-[20px] cursor-pointer" />
    </div>
  </div>

  <!-- Edit and Delete features -->
   <EditTask :id="index" :task="task" :open="openEditTaskModal"  @update:open="openEditTaskModal = $event" />
</template>