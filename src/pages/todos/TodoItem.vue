<template>
    <li>
        <label>
            <input type="checkbox" @change="handleToggleDone" :checked="obj.done" />
            <span>{{ obj.name }}</span>
        </label>
        <button class="btn btn-danger" :style="{ display: obj.done ? 'inline-block' : 'none' }"
            @click="handleDelete">删除</button>
    </li>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

const props = defineProps({
    obj: {
        type: Object,
        required: true,
    },
});

const emits = defineEmits(['deleteTodo', 'toggleDone']);
const handleDelete = () => {
    emits('deleteTodo', props.obj.id);
}
const handleToggleDone = (event) => {
    emits('toggleDone', props.obj.id, event.target.checked);

}
</script>

<style>
.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
        0 1px 2px rgba(0, 0, 0, 0.05);
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

li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}
</style>
