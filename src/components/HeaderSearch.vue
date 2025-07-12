<template>
    <div class="todo-header">
        <input type="text" placeholder="键入待办事项" @keyup.enter="addTodo" v-model="text" />
    </div>
</template>

<script setup>
//记得写setup 不然没有导出对象了就
import { defineEmits, ref } from "vue";
const text = ref("");
const emits = defineEmits(["addTodo"]);
//提交一个值并且将·text·重置为空
function addTodo() {
    if (!text.value.trim()) return;
    emits("addTodo", text.value.trim());
    //将自己的值作为参数传递给父组件
    text.value = "";
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
