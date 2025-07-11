<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <HeaderSearch />
        <ul class="todo-main">
          <MyTodos />
        </ul>
        <div class="todo-footer">
          <MyFooter />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderSearch from './components/HeaderSearch.vue';
import MyFooter from './components/MyFooter.vue';
import MyTodos from './components/MyTodos.vue';



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
