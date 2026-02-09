<script lang="ts" setup>
import { RouterView } from 'vue-router'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import Banner from '@/components/Banner.vue'
import Navigation from '@/components/Navigation.vue'
import Bottom from '@/components/public/Bottom.vue'
</script>

<template>
    <TitleBar />
    <Banner />
    <Navigation />
    <RouterView />
    <Bottom />
</template>

<style scoped></style>
