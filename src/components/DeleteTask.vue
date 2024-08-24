<script setup>
import { defineProps, defineEmits } from 'vue';
import CloseModal from '../assets/icons/close.png';
import { editTaskList } from '../composables/tasks';

const props = defineProps({
  task: Object,
  id: Number,
  open: Boolean,
});

const emit = defineEmits(['task-deleted', 'update:open']);

const handleModal = () => {
  emit('update:open', !props.open); // Notify the parent to toggle the open value
};

const handleDeleteTask = () => {
  props.task['id'] = props.id;
  
  editTaskList('delete', props.task)
    // Close modal
    handleModal();

};

</script>

<template>
    <!-- Delete Task Modal -->
    <div class="text-neutral-lightGrayishBlue fixed inset-0 w-full h-full backdrop-blur flex items-center justify-center fade-in overflow-y-scroll" v-if="props.open">
      <div class="p-5 bg-neutral-veryDarkGrayishBlue2 rounded-lg shadow-custom1 w-[90%] max-w-[400px] flex flex-col gap-4">
        <div class="flex items-center justify-between gap-2 w-full mt-3 mb-5">
          <h3 class="font-bold text-lg capitalize"> delete task </h3>
          <img :src="CloseModal" alt="close icon" class="w-[30px] h-[30px] cursor-pointer" @click="handleModal" />
        </div>

        <p class="font-bold text-md">
            Are you sure you wish to delete this task
        </p>
        <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 pt-5">
  <button class="flex-1 bg-green-500 text-white py-2 rounded" @click="handleDeleteTask">Yes</button>
  <button class="flex-1 bg-red-500 text-white py-2 rounded" @click="handleModal">No</button>
</div>

      </div>
    </div>

</template>