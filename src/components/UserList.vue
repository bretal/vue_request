<template>
    <!-- 用户信息展示列表 -->
    <div class="row" v-show="users.length > 0">
        <div class="card" v-for="user in users" :key="user.id">
            <a :href="user.url" target="_blank">
                <img :src="user.avatar_url" style='width: 100px' />
            </a>
            <p class="card-text">{{ user.login }}</p>
        </div>
    </div>
    <div class="show" v-show="isFirstTime && !isloading">欢迎来到搜索界面!</div>
    <div class="show" v-show="isloading">加载中。。。。</div>
</template>

<script setup>
import {
    useUserStore
} from '@/utils/userstore';
import { computed, watch } from 'vue';
const userStore = useUserStore();
const isFirstTime = computed(() => userStore.isFirstLoad)
const isloading = computed(() => userStore.loading)

const users = computed(() => userStore.users)
// userStore.setIsFirstLoad(users.value.length === 0)
watch(isloading, (now) => {
    // 只在加载完成之后触发一次
    if (!now && userStore.users.length >= 0) {
        userStore.setIsFirstLoad(false)
    }
})


</script>

<style scoped>
.album {
    min-height: 50rem;
    /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
}

.card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
}

.card>img {
    margin-bottom: .75rem;
    border-radius: 100px;
}

.card-text {
    font-size: 85%;
}

.show {
    font-size: 64px;
    text-align: center;
    margin-top: 5rem;
    color: red;
    font-weight: bold;
}
</style>