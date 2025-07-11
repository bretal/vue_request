<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      @keyup.enter="addTodo"
      v-model="text"
    />
  </div>
</template>

<script setup>
//记得写setup 不然没有导出对象了就
import { ref } from "vue";
import { nanoid } from "nanoid";
const text = ref("");
function addTodo() {
  //   console.log(text.value);
  const todoObj = {
    id: nanoid(),
    name: text.value,
    done: false,
  };
}
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}
</style>
