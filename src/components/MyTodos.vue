<template>
  <TodoItem v-for="obj in data" :key="obj.id" :obj="obj" @deleteTodo="deleteTodo" @toggleDone="toggleDone" />
</template>

<script setup>
import TodoItem from "@/pages/todos/TodoItem.vue";
import { defineEmits, defineProps } from "vue";
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
})
const emits = defineEmits(['update-data']);
const deleteTodo = (id) => {
  //删除逻辑
  const newData = props.data.filter((obj) => obj.id !== id);
  emits('update-data', newData);
}
const toggleDone = (id) => {
  const targetIndex = props.data.findIndex(obj => obj.id === id);

  if (targetIndex !== -1) {
    const newData = [...props.data];
    newData[targetIndex].done = !newData[targetIndex].done;
    emits('update-data', newData);
  }

}






</script>

<style></style>
