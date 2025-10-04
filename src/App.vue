<script lang="ts" setup>
import { RouterView } from 'vue-router';
import TitleBar from './components/TitleBar.vue';
import Banner from './components/Banner.vue';

</script>

<template>
    <TitleBar/>
    <Banner/>
    <RouterView/>
</template>

<style scoped></style>