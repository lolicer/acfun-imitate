<script setup lang="ts">
import { SeasonalBangumi } from '@/types/BangumiItem'
import TruncatedText from '@/components/public/TruncatedText.vue'

const props = defineProps<{
    data: SeasonalBangumi
}>()

const BackgroundColors = {
    1: '#FDF0E6',
    2: '#FCEBEC',
    3: '#FCEBF8',
    4: '#FDEBE9',
    5: '#FCEBF8',
    6: '#FDEBEA'
}
const IndexColors = {
    1: '#f8c9a3',
    2: '#f6b7bb',
    3: '#f6b7e6',
    4: '#fab6b0',
    5: '#f6b7e6',
    6: '#fab5b2'
}
const bgColor = BackgroundColors[props.data.rank]
const indexColor = IndexColors[props.data.rank]
</script>

<template>
    <div
        class="bangumi-content"
        :style="{
            'background-color': bgColor
        }"
    >
        <img :src="data.imgUrl" alt="" />
        <div class="bangumi-content-info">
            <div
                class="bangumi-content-info-index"
                :style="{
                    color: indexColor
                }"
            >
                {{ props.data.rank }}
            </div>
            <div>
                <TruncatedText :text="props.data.title" :max-line="1" />
                <div class="bangumi-content-info-air-weekday">
                    周{{ props.data.airSchedule.airWeekday }}&nbsp;{{
                        props.data.airSchedule.airTime
                    }}
                </div>
                <div class="bangumi-content-info-latest-episode">
                    更新至第{{ props.data.latestEpisode }}话
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bangumi-content {
    flex: 1;
    box-sizing: border-box;
    aspect-ratio: 9 / 16;
    border-radius: 8px;
    overflow: hidden;

    display: flex;
    flex-direction: column;

    cursor: pointer;
    transition:
        transform 0.2s ease,
        margin 0.2s ease;
}

.bangumi-content:hover {
    transform: scale(1.07);
}

.bangumi-content > img {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;

    border-radius: 0 0 8px 8px;

    flex: 13;
}

.bangumi-content-info {
    flex: 3;
    display: flex;
}
.bangumi-content-info-index {
    font-size: 4vw;
    font-weight: 600;
    font-style: italic;
    padding: 0 16px 0 6px;
    line-height: 1;
}

.bangumi-content-info-air-weekday {
    font-size: smaller;
}
.bangumi-content-info-latest-episode {
    color: var(--color-gray-0);
    font-size: small;
}
</style>
