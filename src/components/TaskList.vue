<script setup>
import Task from './Task.vue';
import { useTasksList } from '../composables/tasks';

//  Tasks list from composable
 const { state } = useTasksList();

</script>

<template>
<div class="my-8">
    <div v-if="state.tasks.length < 1" class="w-full p-5 bg-neutral-veryDarkBlue flex justify-center items-center rounded-t text-neutral-lightGrayishBlue min-h-[500px]">
       <p> No Tasks </p>
    </div>

<Task v-for="(task, idx) in state.tasks" :key="idx" :task="task" :index="idx" />
</div>
</template>