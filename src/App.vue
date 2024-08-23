<script setup>
  import './style.css'
  import Header from './components/Header.vue'
  import AddTask from './components/AddTask.vue'
  import TaskList from './components/TaskList.vue'
  import { ref, provide } from 'vue'
  

  const isModalOpen = ref(false);

const handleModalToggle = (isOpen) => {
  isModalOpen.value = isOpen;
};

provide('isModalOpen', isModalOpen); // Providing the state
provide('handleModalToggle', handleModalToggle); // Providing the method

</script>

<template>
<div class="bg-neutral-veryDarkBlue w-screen h-screen flex flex-col overflow-y-scroll">
  <!-- BG Image -->
  <div class="bg-custom-bg top-0 bg-cover bg-center max-h-[200px] lg:max-h-[300px] h-full w-full bg-image fixed"></div>

  <div class="z-[100] w-[90%] mx-auto lg:w-[40%]">
    <Header />

    <AddTask @toggle-modal="handleModalToggle" />
    
    <TaskList />
  </div>


</div>
</template>

<style scoped>

</style>
