<script lang="ts" setup>
import { ref } from 'vue'

import HistoryInfoItem from './TitleBar/History/HistoryInfoItem.vue'
import { HistoryInfo } from '@/types/HistoryInfo'
import {
    historyInfoData,
    hotSearshData,
    searchHistoryData,
    updatesData,
    liveStreamers
} from '@/data/TitleBar'
import { Updates } from '@/types/Updates'
import UpdatesItem from './TitleBar/Updates/UpdatesItem.vue'
import LiveStreamItem from './TitleBar/Updates/LiveStreamItem.vue'
import { ScrollbarInstance } from 'element-plus'

const searchText = ref('')

const searchHistory: string[] = searchHistoryData
const hotSearsh: string[] = hotSearshData
const historyInfo: HistoryInfo[] = historyInfoData
const updates: Updates[] = updatesData

// const liveStreamScrollbarRef = ref<ScrollbarInstance>()
// const scrollLeft = ref<number>(0)
// function handleScrollLiveStream(data){
//     console.log(data)
//     scrollLeft.value = data.scrollLeft as number
// }
// async function handleWheelLiveStream(event: WheelEvent){
//     event.preventDefault()
//     const scrollDistance = Math.sign(event.deltaY) * 64
//     await liveStreamScrollbarRef.value.scrollTo({ left: scrollLeft.value + scrollDistance, behavior: 'auto' })
// }
// shift+滚轮可实现横向滚动
</script>

<template>
    <div class="titlebar-content">
        <!-- 左边 -->
        <div id="left-content">
            <a href="/">
                <img src="/icons/public/acfunLogo.svg" alt="" />
            </a>
            <a
                href="https://shop213417608.taobao.com/"
                target="_blank"
                class="extension"
            >
                <img
                    src="/icons/public/titleBar/Shop.svg"
                    class="extension-icon"
                    id="shop-icon"
                />
                <span class="extension-text">周边商场</span>
            </a>
            <a
                href="https://www.acfun.cn/face-catcher"
                target="_blank"
                class="extension"
            >
                <img
                    src="/icons/public/titleBar/Camera.svg"
                    alt=""
                    class="extension-icon"
                    id="camera-icon"
                />
                <span class="extension-text">AcFun面补助手</span>
            </a>
        </div>

        <!-- 中间 -->
        <div id="center-content">
            <div id="search">
                <ElInput id="input" type="search" v-model="searchText">
                    <template #suffix>
                        <img src="/icons/public/titleBar/Search.svg" alt="" />
                    </template>
                </ElInput>
                <div class="floating-block" id="search-result">
                    <div>
                        <div id="result-history-title">
                            <span>历史记录</span>
                            <span id="result-history-clear-button"
                                >清除历史</span
                            >
                        </div>
                        <hr />
                        <div id="result-history-button-list">
                            <ElButton
                                class="result-history-button"
                                v-for="(value, idx) in searchHistory"
                                :key="idx"
                                size="small"
                                ><span :title="value">{{
                                    value
                                }}</span></ElButton
                            >
                        </div>
                        <div id="result-hotsearch-title">
                            <span>今日热搜</span>
                        </div>
                        <hr />
                        <div id="result-hotsearch-list">
                            <div
                                v-for="(value, idx) in hotSearsh"
                                :key="idx"
                                class="result-hotsearch-item"
                            >
                                <span class="result-hotsearch-item-idx">{{
                                    idx + 1
                                }}</span>
                                <span class="result-hotsearch-item-value">{{
                                    value
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 右边 -->
        <div id="right-content">
            <div id="phone">
                <div>
                    <img
                        src="/icons/public/titleBar/Phone.svg"
                        class="mini-icon"
                    />
                </div>
                <div class="floating-block" id="app-download">
                    <img
                        src="/images/public/titleBar/app-download.png"
                        alt=""
                    />
                </div>
            </div>
            <div id="avatar">
                <img src="/images/public/titleBar/avatar.png" alt="" />
                <div class="floating-block" id="user-info">
                    <div id="user-info-space">
                        <div id="user-info-space-name">七森中の阿卡林</div>
                        <div id="user-info-space-exit">
                            <img src="/icons/public/titleBar/Exit.svg" alt="" />
                            <span>退出</span>
                        </div>
                    </div>
                    <div id="user-info-acbi">
                        <div id="user-info-acbi-left">
                            <img
                                id="user-info-acbi-acbiimg"
                                src="/icons/public/titleBar/acbi.svg"
                                alt=""
                            />
                            <!--display：online-block-->
                            <span id="user-info-acbi-number">233</span>
                        </div>
                        <div id="user-info-acbi-recharge" type="text">充值</div>
                    </div>
                    <div id="user-info-more">查看更多</div>
                </div>
            </div>
            <div id="message">
                <div>
                    <img
                        src="/icons/public/titleBar/Message.svg"
                        class="mini-icon"
                    />
                </div>
                <div class="floating-block" id="message-info">
                    <div>评论</div>
                    <div>赞</div>
                    <div>@我的</div>
                    <div>礼物</div>
                    <div>站内公告</div>
                    <div>系统通知</div>
                    <div>私信</div>
                </div>
            </div>
            <div id="history">
                <div>
                    <img
                        src="/icons/public/titleBar/history/History.svg"
                        class="mini-icon"
                    />
                </div>
                <div class="floating-block" id="history-info">
                    <div id="history-info-list">
                        <ElScrollbar>
                            <HistoryInfoItem
                                v-for="item in historyInfo"
                                :data="item"
                                :id="item.url"
                            />
                            <div id="history-info-view-all">查看全部</div>
                        </ElScrollbar>
                    </div>
                </div>
            </div>
            <div id="updates">
                <div>
                    <img
                        src="/icons/public/titleBar/Updates.svg"
                        class="mini-icon"
                    />
                </div>
                <div class="floating-block" id="updates-info">
                    <ElScrollbar class="live-stream-list-scrollbar">
                        <!-- 
                        @wheel="handleWheelLiveStream" 
                        @scroll="handleScrollLiveStream" 
                        ref="liveStreamScrollbarRef"
                    -->
                        <div id="live-stream-list">
                            <LiveStreamItem
                                v-for="item in liveStreamers"
                                :data="item"
                            />
                        </div>
                    </ElScrollbar>
                    <div id="updates-info-list-header">
                        <div class="fake-line"></div>
                        <span>动态列表</span>
                        <div class="fake-line"></div>
                    </div>
                    <div id="updates-info-list">
                        <ElScrollbar>
                            <UpdatesItem
                                v-for="item in updates"
                                :data="item"
                                :id="item.url"
                            />
                            <div id="updates-info-view-all">查看全部动态</div>
                        </ElScrollbar>
                    </div>
                </div>
            </div>
            <div id="upload">
                <ElButton id="upload-button" color="var(--color-acfun)">
                    <img src="/icons/public/titleBar/Upload.svg" alt="" />
                    <span id="upload-button-text">投稿</span>
                </ElButton>
            </div>
            <div id="uploader">
                <div>
                    <img
                        src="/icons/public/titleBar/Uploader.svg"
                        class="mini-icon"
                    />
                </div>
                <div class="floating-block" id="uploader-info">
                    <div>稿件管理</div>
                    <div>数据中心</div>
                    <div>互动管理</div>
                    <div>阿普学院</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="./TitleBar.css"></style>
