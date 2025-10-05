<script lang="ts" setup>
import { formatRelativeTime } from '@/components/TitleBar/sharedFunctions';
import DeviceMobile from '@/assets/icons/concise/DeviceMobile.vue';
import DevicePC from '@/assets/icons/concise/DevicePC.vue';
import Up from '@/assets/icons/concise/Up.vue';
import { ArticleHistoryInfo } from '@/types/HistoryInfo';
import { nextTick, onMounted, ref } from 'vue';

const props = defineProps<{
  data: ArticleHistoryInfo;
}>();

const tooltip = ref('')

const checkOverflow = () => {
  const titleEl = document.getElementById('title')
  if (titleEl) {
    // 判断文本是否溢出
    if(titleEl.scrollHeight > titleEl.clientHeight) {
        tooltip.value = props.data.title
    }
  }
}

onMounted(() => {
    nextTick(() => {
        checkOverflow()
    })
})
</script>

<template>
    <div class="article-item-content">
        <div id="info">
            <div id="title" :title="tooltip">{{ props.data.title }}</div>
            <div id="line-2">
                <DevicePC class="device-icon" v-if="props.data.device === 'pc'"/>
                <DeviceMobile class="device-icon" v-if="props.data.device === 'mobile'"/>
                <span id="watching-time">{{ formatRelativeTime(props.data.time) }}</span>
            </div>
            <div id="line-3">
                <Up id="uploader-icon"/>
                <span id="uploader-name">{{ props.data.uploader }}</span>
            </div>
        </div>
        <div id="cover">
            <img :src="props.data.imgUrl" alt="测试图片">
        </div>
    </div>
</template>

<style scoped>
.article-item-content {
    display: flex;
    padding: 10px;
}
.article-item-content > div {
    height: 63px;
}
#cover {
    flex: 4;

    display: flex;
    justify-content:center;
    overflow: hidden;
    width: 112px;
    padding-left: 10px;

    position: relative;
}
#cover:hover {
    cursor: pointer;
}
#cover > img {
    min-width: 100%;
    object-fit: cover;
    border-radius: 5px;
}

#info {
    flex: 6;
    box-sizing: border-box;
}
#title {
    /* 控制超出两行自动省略 */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 13px;
    line-height: 16.5px;
    height: 33px;
}
#title:hover {
    cursor: pointer;
    color: rgb(253, 76, 93);
}

#line-2 {
    height: 15px;
    display: flex;
    align-items: center;
}
.device-icon {
    width: 14px;
    height: 14px;
    color: rgb(153, 153, 153);
}
#watching-time {
    font-size: 11px;
    line-height: 15px;
    transform: translateY(-1px);
    margin-left: 4px;
    color: rgb(153, 153, 153);
}
#watching-time:hover {
    cursor: default;
}

#line-3 {
    height: 15px;
    display: flex;
    align-items: center;
}   
#uploader-icon {
    width: 15px;
    height: 15px;
    color: rgb(153, 153, 153);
}
#uploader-name {
    font-size: 12px;
    line-height: 15px;
    transform: translateY(-1px);
    margin-left: 4px;
    color: rgb(153, 153, 153);
}
#uploader-name:hover {
    cursor: pointer;
    color: rgb(253, 76, 93);
}
</style>