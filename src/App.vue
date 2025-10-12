<script lang="ts" setup>
import { RouterView } from 'vue-router';
import TitleBar from './components/TitleBar.vue';
import Banner from './components/Banner.vue';
import Navigation from './components/Navigation.vue';
import Test from './components/Test.vue';

</script>

<template>
    <TitleBar/>
    <Banner/>
    <Navigation/>
    <RouterView/>
    <Test/>
</template>

<style scoped></style>