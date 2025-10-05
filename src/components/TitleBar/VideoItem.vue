<script lang="ts" setup>
import { formatRelativeTime } from '@/components/TitleBar/sharedFunctions';
import DeviceMobile from '@/assets/icons/concise/DeviceMobile.vue';
import DevicePC from '@/assets/icons/concise/DevicePC.vue';
import Up from '@/assets/icons/concise/Up.vue';
import { VideoHistoryInfo } from '@/types/HistoryInfo';

const props = defineProps<{
  data: VideoHistoryInfo;
}>();
console.log(props.data)
</script>

<template>
    <div id="content">
        <div id="image">
            <img :src="props.data.imgUrl" alt="测试图片">
        </div>
        <div id="info">
            <div id="title">{{ props.data.title }}</div>
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
    </div>
</template>

<style scoped>
#content {
    display: flex;
    width: 100%;
    padding: 10px;
}
#content:hover {
    cursor: pointer;
    background-color: rgb(227, 229, 231);
}
#content > div {
    height: 63px;
}
#image {
    flex: 4;

    display: flex;
    justify-content:center;
    overflow: hidden;
    width: 112px;
}
#image > img {
    min-width: 100%;
    object-fit: cover;
    border-radius: 5px;
}
#info {
    flex: 6;
    box-sizing: border-box;
    padding-left: 10px;
}
#title {
    /* 控制超出两行自动换行 */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 13px;
    line-height: 16.5px;
}
#title:hover {
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
    color: rgb(253, 76, 93);
}
</style>