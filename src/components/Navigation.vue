<script lang="ts" setup>
import Barchart from '@/assets/icons/concise/Barchart.vue'

const navigationData = [
    { name: '首页', to: '/' },
    { name: '直播', to: '/live', newTab: true },
    { name: '番剧', to: '/bangumi', newTab: true },
    { name: '动画', to: '/donghua' },
    { name: '娱乐', to: '/entertainment' },
    { name: '生活', to: '/lifestyle' },
    { name: '音乐', to: '/music' },
    { name: '舞蹈·偶像', to: '/danceandidol' },
    { name: '游戏', to: 'gaming' },
    { name: '科技', to: '/technology' },
    { name: '影视', to: '/filmandtv' },
    { name: '体育', to: '/sports' },
    { name: '鱼塘', to: '/trending' },
    { name: '文章', to: '/article' }
]
</script>

<template>
    <div class="content">
        <div v-for="item in navigationData" class="left-item">
            <a v-if="item.newTab" :href="item.to" target="_blank">
                {{ item.name }}
            </a>
            <router-link v-else :to="item.to">{{ item.name }}</router-link>
        </div>
        <div class="right-item">
            <Barchart />
            全站排行榜
        </div>
    </div>
</template>

<style scoped>
.content {
    position: sticky;
    top: 52px;
    display: flex;

    background-color: white;

    /* width: 100%; */
    height: 46px;
    padding-left: 50px;
    padding-right: 50px;
    box-shadow: var(--shadow-1);

    z-index: 900;
}
.left-item {
    display: inline-block;
    height: 100%;
    width: 88px;

    box-sizing: border-box;
    padding-bottom: 6px;
}
.left-item > a {
    display: inline-flex;
    color: black;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 14px;
}
.left-item:hover > a {
    color: var(--color-acfun);
}

.right-item {
    margin-left: auto;
    display: flex;
    align-items: center;

    box-sizing: border-box;
    padding-bottom: 6px;
}
.right-item > svg {
    color: var(--color-acfun);
    padding-right: 4px;
}
.right-item:hover {
    cursor: pointer;
    color: var(--color-acfun);
}

.left-item > a.router-link-exact-active {
    color: var(--color-acfun);
    border-bottom: 6px solid var(--color-acfun);
}
</style>
