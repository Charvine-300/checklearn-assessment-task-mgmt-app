<script setup>
import CloseModal from '../assets/icons/close.png';
import { reactive, defineEmits, defineProps, onMounted } from 'vue'
import { editTaskList } from '../composables/tasks';

const props = defineProps({
  task: Object,
  id: Number,
  open: Boolean,
});

const emit = defineEmits(['task-edited', 'update:open']);

const handleModal = () => {
  emit('update:open', !props.open); // Notify the parent to toggle the open value
};

const form = reactive({
  taskName: '',
  dueDate: '',
  priority: '',
});



onMounted(() => {
  form.taskName = props.task.task_name
  form.dueDate = props.task.due_date
  form.priority = props.task.priority 
  form.id = props.id
});

const handleEditTask = () => {
  editTaskList(form, 'edit');

  // Close modal
  handleModal();
};


</script>

<template>
    <!-- Edit Task Modal -->
     <div class="text-neutral-lightGrayishBlue fixed inset-0 w-full h-full backdrop-blur flex items-center justify-center fade-in overflow-y-scroll" v-if="props.open">
      <div class="p-5 bg-neutral-veryDarkGrayishBlue2 rounded-lg shadow-form w-[90%] max-w-[400px]">
        <div class="flex items-center justify-between gap-2 w-full mt-3 mb-5">
          <h3 class="font-bold text-lg capitalize"> edit task </h3>
          <img :src="CloseModal" alt="close icon" class="w-[30px] h-[30px] cursor-pointer" @click="handleModal" />
        </div>

        <!-- Edit task form -->
        <form @submit.prevent="handleEditTask" class="my-[40px] text-neutral-lightGrayishBlue">
          <div class="mb-6">
            <label for="task_name" class="block font-semibold mb-2">Task Name</label>
          <input type="text" id="task_name" name="task_name" class= "border border-neutral-lightGrayishBlue rounded w-full p-3 mb-2 bg-transparent placeholder:text-neutral-lightGrayishBlue placeholder:text-sm" v-model="form.taskName"
          placeholder="eg. Wash dishes" required />
          </div>

          <div class="mb-6">
            <label for="due_date" class="block font-semibold mb-2">Due Date</label>
          <input type="date" :min="today" id="due_date" name="due_date" class= "border border-neutral-lightGrayishBlue rounded w-full p-3 mb-2 bg-transparent placeholder:text-neutral-lightGrayishBlue placeholder:text-sm" v-model="form.dueDate"
          placeholder="eg. Wash dishes" required />
          </div>

          <div class="mb-6">
            <label for="priority_level" class="block font-semibold mb-2">Priority Level</label>
          <select id="priority_level" name="priority_level" class= "border border-neutral-lightGrayishBlue rounded w-full p-3 mb-2 bg-transparent placeholder:text-neutral-lightGrayishBlue placeholder:text-sm" v-model="form.priority"
          placeholder="eg. Wash dishes" required>
          <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
        </select>
          </div>
        
          <div>
            <button
              class="bg-neutral-lightGrayishBlue hover:bg-neutral-lightGrayishBlueHover text-neutral-veryDarkDesaturatedBlue font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
              type="submit">
              Edit Task
            </button>
          </div>
        </form>
      </div>

     </div>
</template>

<style scoped>
option {
  color: hsl(235, 24%, 19%);
}
</style>