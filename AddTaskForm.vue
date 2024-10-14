<template>
    <div>
      <input v-model="newTask" placeholder="Enter task">
      <button @click="addTask">Add Task</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'AddTaskForm',
    emits: ['addTask'],
    setup(props, { emit }) {
      const newTask = ref('');
  
      const addTask = () => {
        if (newTask.value.trim()) {
          emit('addTask', newTask.value);
          newTask.value = '';
        }
      };
  
      return { newTask, addTask };
    },
  };
  </script>