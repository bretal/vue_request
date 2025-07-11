<template>
  <TodoItem v-for="obj in data" :key="obj.id" :obj="obj" />
</template>

<script setup>
import TodoItem from "@/pages/todos/TodoItem.vue";
import { ref } from "vue";
const data = ref([
  {
    id: "001",
    name: "吃饭",
    done: true,
  },

  { id: "002", name: "睡觉", done: false },
  { id: "003", name: "健身", done: true },
]);
</script>

<style></style>
