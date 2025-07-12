<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <HeaderSearch @addTodo="addTodo" />
        <ul class="todo-main">
          <MyTodos :data="data" @update-data="updateData" />
        </ul>
        <div class="todo-footer">
          <MyFooter :data="data" @clearCompleted="clearCompleted" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nanoid } from "nanoid";
import { ref } from "vue";
import HeaderSearch from './components/HeaderSearch.vue';
import MyFooter from './components/MyFooter.vue';
import MyTodos from './components/MyTodos.vue';
const data = ref([
  {
    id: "001",
    name: "吃饭",
    done: true,
  },
  { id: "002", name: "睡觉", done: false },
  { id: "003", name: "健身", done: true },
]);
function addTodo(name) {
  const todoObj = {
    id: nanoid(),
    name,
    done: false,
  };
  data.value.unshift(todoObj);
}
function updateData(newData) {
  data.value = newData;
}
function clearCompleted(newData) {
  data.value = newData
}



</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
</style>
