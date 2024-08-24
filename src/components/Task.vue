<script setup>
import { defineProps, ref, defineEmits, computed } from 'vue';
import Delete from '../assets/icons/delete.png';
import Edit from '../assets/icons/edit.png';
import EditTask from './EditTask.vue'
import DeleteTask from './DeleteTask.vue'

const openEditTaskModal = ref(false);
const openDeleteTaskModal = ref(false);

const handleEditModal = () => {
    openEditTaskModal.value = true;
}

const handleDeleteTaskModal = () => {
  openDeleteTaskModal.value = true;
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

// Trigger task list refresh from EditTask event
const taskUpdate = () => {
  emit('task-updated');
}

// Compute the circle color class based on task.completed
const circleColorClass = computed(() => {
  switch (props.task.priority) {
    case 'Low':
      return 1;
    case 'Medium':
      return 2;
    case 'High':
      return 3;
    default:
      return 0;
  }
});

</script>

<template>
  <div class="w-full p-5 bg-neutral-veryDarkDesaturatedBlue flex justify-between items-center rounded-t border-b border-neutral-lightGrayishBlue">
    <div class="gap-3 flex items-center">
      <input type="checkbox" :checked="task.completed" :name="task.task_name" :id="task.task_name" class="w-[20px] h-[20px] rounded-full border border-neutral-lightGrayishBlue" @click="handleComplete" />
      <div class="text-neutral-lightGrayishBlue">
        <div class="flex flex-row items-center gap-2">
          <p :class="{ 'line-through': task.completed }">
            {{  task.task_name  }}
          </p>
          <div>
            <p v-for="idx in circleColorClass" :key="idx" class="text-primary-brightBlue inline"> ! </p>
            <span :class="circleColorClass" class="w-2 h-2 rounded-full cursor-pointer" :title="task.priority"></span>
          </div>
        </div>
        <p :class="{ 'line-through': task.completed }" style="font-weight: 300;" v-if="task.due_date"> Due Date: {{ task.due_date }} </p>
      </div>
    </div>
    <div class="gap-3 flex items-center">
      <img :src="Edit" alt="edit icon" class="w-[20px] h-[20px] cursor-pointer" @click="handleEditModal" v-if="!task.completed" />
      <img :src="Delete" alt="delete icon" class="w-[20px] h-[20px] cursor-pointer" @click="handleDeleteTaskModal" />
    </div>
  </div>

  <!-- Edit and Delete features -->
   <EditTask :id="index" :task="task" :open="openEditTaskModal"  @update:open="openEditTaskModal = $event" @task-edited="taskUpdate" />
   <DeleteTask :id="index" :task="task" :open="openDeleteTaskModal" @update:open="openDeleteTaskModal = $event" @task-deleted="taskUpdate"   />
</template>