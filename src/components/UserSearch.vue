<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="searchText" />&nbsp;<button
                @click="searchUsers">Search</button>
        </div>
    </section>

</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useUserStore } from '../utils/userstore';
const userStore = useUserStore()
const searchText = ref('')
//vue3中不再需要使用name给组件命名 直接使用该组件所在的文件名实现命名

function searchUsers() {
    // console.log('searching for users with name: ', searchText.value)
    axios.get(`https://api.github.com/search/users?q=${searchText.value}`)
        .then(response => {
            console.log('请求成功了', response.data.items)
            userStore.setUsers(response.data.items)
        })
        .catch(error => {
            console.log(error)
        })
}
//拿到东西之后 我需要进行一次组件的通信了
</script>

<style></style>