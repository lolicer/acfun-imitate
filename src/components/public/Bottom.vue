<script setup lang="ts"></script>

<template>
    <div class="bottom">
        <img src="/src/assets/icons/acfunlogo.svg" alt="" />
        <div class="bottom-text">Copyright © 2007-2022 AcFun. 保留所有权利</div>
    </div>
</template>

<style scoped>
.bottom {
    width: 100%;
    height: 120px;
    margin: 50px 0 0 0;
    background-color: var(--color-gray-4);
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.bottom > img {
    height: 40px;
    padding-top: 26px;
    color: var(--color-gray-1);
}
.bottom-text {
    padding-top: 10px;
    color: var(--color-gray-1);
    text-align: center;
}
</style>
