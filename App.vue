<template>
  <div>
    <h1>To-Do List</h1>
    <AddTaskForm @addTask="addTask" />
    <ul>
      <li v-for="(task, index) in tasks" :key="index" :class="{ completed: task.completed }">
        <span @click="toggleCompletion(index)">{{ task.name }}</span>
        <button @click="editTask(index)">Edit</button>
        <button @click="deleteTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import AddTaskForm from './AddTaskForm.vue';

export default {
  name: 'TaskList',
  components: {
    AddTaskForm,
  },
  setup() {
    const tasks = ref([]);
    
    const addTask = (name) => {
      tasks.value.push({ name, completed: false });
      saveTasks();
    };
    
    const editTask = (index) => {
      const newName = prompt('Enter new task name:', tasks.value[index].name);
      if (newName) {
        tasks.value[index].name = newName;
        saveTasks();
      }
    };
    
    const deleteTask = (index) => {
      tasks.value.splice(index, 1);
      saveTasks();
    };
    
    const toggleCompletion = (index) => {
      tasks.value[index].completed = !tasks.value[index].completed;
      saveTasks();
    };

    const saveTasks = () => {
      localStorage.setItem('tasks', JSON.stringify(tasks.value));
    };

    onMounted(() => {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        tasks.value = JSON.parse(savedTasks);
      }
    });

    return { tasks, addTask, editTask, deleteTask, toggleCompletion };
  },
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
