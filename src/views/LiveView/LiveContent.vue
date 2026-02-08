<script setup lang="ts">
import { LiveHeaderData } from '@/data/Live'
import { ref } from 'vue'

const activeVideo = ref(0)

function changeVideo(index: number) {
    activeVideo.value = index
}
</script>

<template>
    <div class="live-content">
        <div class="header">
            <div class="header-content">
                <video
                    :src="LiveHeaderData[activeVideo].videoUrl"
                    :poster="LiveHeaderData[activeVideo].coverUrl"
                    controls
                    autoplay
                    muted
                    loop
                ></video>
            </div>
            <div class="header-nav">
                <div
                    class="header-nav-cover"
                    v-for="(item, index) in LiveHeaderData"
                    :key="index"
                    @click="changeVideo(index)"
                    :title="item.title"
                >
                    <img
                        :src="item.coverUrl"
                        :class="{ active: activeVideo === index }"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    box-sizing: border-box;
    padding: 20px 50px;
    display: flex;

    width: 100%;
    aspect-ratio: 2.3;
    min-height: 500px;

    background-image: url('/images/live/header-background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.header-content {
    flex: 8;

    display: flex;
    justify-content: center;
}
.header-content > video {
    height: 100%;
}
.header-nav {
    flex: 2;
    display: flex;
    flex-direction: column;
    height: auto;
}
.header-nav-cover {
    flex: 1;
    height: 20%;
    width: min-content;
    background-color: rgba(0, 0, 0, 0.3);

    box-sizing: border-box;
    padding: 8px;
    cursor: pointer;

    position: relative;
}

.header-nav-cover:first-child {
    border-radius: 8px 8px 0 0;
}
.header-nav-cover:last-child {
    border-radius: 0 0 8px 8px;
}
.header-nav-cover > img {
    height: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;

    box-sizing: border-box;
    border-radius: 4px;
}
.header-nav-cover > img.active {
    border: 4px solid var(--color-acfun);
}
.header-nav-cover:has(img.active)::before {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    top: 50%;
    left: 1px;
    transform: translateY(-50%);
    border-right: 10px solid var(--color-acfun);
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
}
</style>
