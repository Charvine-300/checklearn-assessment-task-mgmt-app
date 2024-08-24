<script setup>
import AddIcon from '../assets/icons/add-icon.png';
import CloseModal from '../assets/icons/close.png';
import { ref, reactive, watch, defineEmits, onMounted } from 'vue'
import { editTaskList } from '../composables/tasks';


const today = new Date().toISOString().split('T')[0];

const openAddTaskModal = ref(false);

const emit = defineEmits(['toggle-modal']);

// Emit the event when modal state changes
watch(openAddTaskModal, (newVal) => {
  emit('toggle-modal', newVal);
});

const handleModal = () => {
  if (openAddTaskModal.value === true) {
    openAddTaskModal.value = false;
  } else {
    openAddTaskModal.value = true;
  }
};

const form = reactive({
  taskName: '',
  dueDate: '',
  priority: 'Low',
});

const handleSubmit = () => {
  editTaskList(form, "add");

  // Close modal
  handleModal();
}

onMounted(() => {
// Clear form
form.taskName = "";
form.dueDate = "";
form.priority = "Low";
})

</script>

<template>
    <div class="flex items-center gap-2 w-full justify-end cursor-pointer" @click="handleModal">
        <h3 class="font-semibold capitalize text-white-100"> add new task</h3>
        <img :src="AddIcon" alt="add icon" class="w-[20px] h-[20px]" />
    </div>

    <!-- Add Task Modal -->
     <div class="text-neutral-lightGrayishBlue fixed inset-0 w-full h-full backdrop-blur flex items-center justify-center fade-in overflow-y-scroll" v-if="openAddTaskModal">
      <div class="p-5 bg-neutral-veryDarkGrayishBlue2 rounded-lg shadow-form w-[90%] max-w-[400px]">
        <div class="flex items-center justify-between gap-2 w-full mt-3 mb-5">
          <h3 class="font-bold text-lg capitalize"> Add new task </h3>
          <img :src="CloseModal" alt="close icon" class="w-[30px] h-[30px] cursor-pointer" @click="handleModal" />
        </div>

        <!-- Add task form -->
        <form @submit.prevent="handleSubmit" class="my-[40px] text-neutral-lightGrayishBlue">
          <div class="mb-6">
            <label for="task_name" class="block font-semibold mb-2">Task Name</label>
          <input type="text" id="task_name" name="task_name" class= "border border-neutral-lightGrayishBlue rounded w-full p-3 mb-2 bg-transparent placeholder:text-neutral-lightGrayishBlue placeholder:text-sm" v-model="form.taskName"
          placeholder="eg. Wash dishes" required />
          </div>

          <div class="mb-6">
            <label for="due_date" class="block font-semibold mb-2">Due Date (Optional)</label>
          <input type="date" :min="today" id="due_date" name="due_date" class= "border border-neutral-lightGrayishBlue rounded w-full p-3 mb-2 bg-transparent placeholder:text-neutral-lightGrayishBlue placeholder:text-sm" v-model="form.dueDate" />
          </div>

          <div class="mb-6">
            <label for="priority_level" class="block font-semibold mb-2">Priority Level</label>
          <select id="priority_level" name="priority_level" class= "border border-neutral-lightGrayishBlue rounded w-full p-3 mb-2 bg-transparent placeholder:text-neutral-lightGrayishBlue placeholder:text-sm" v-model="form.priority" required>
          <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
        </select>
          </div>
        
          <div>
            <button
              class="bg-neutral-lightGrayishBlue hover:bg-neutral-lightGrayishBlueHover text-neutral-veryDarkDesaturatedBlue font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
              type="submit">
              Add Task
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