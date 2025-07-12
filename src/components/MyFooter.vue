<template>
    <label>
        <input type="checkbox" />
    </label>
    <span>
        <span>已完成:{{ completed }}</span> / 全部{{ data.length }}
    </span>
    <button class="btn btn-danger" @click="clearCompleted">清除已完成任务</button>

</template>

<script setup>
import { defineEmits, defineProps, ref, watch } from 'vue';


const props = defineProps({
    data: {
        type: Array,
        requered: true
    }

})
const completed = ref(
    props.data.filter(item => item.done).length
)
watch(
    () => props.data,
    (newVal, oldVal) => {
        completed.value = newVal.filter(item => item.done).length
    },
    {
        deep: true
    }
)
const localData = props.data
const emits = defineEmits(['clearCompleted'])
function clearCompleted() {
    // 过滤出已完成的任务
    const newData = localData.filter(item => !item.done)
    console.log('记录已完成的任务1', newData);

    emits('clearCompleted', newData)
    //为什么点击待办项为已完成之后 为什么不会实时记录已完成的任务的个数？
    completed.value = newData.filter(item => item.done).length
}


</script>

<style scoped>
.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>