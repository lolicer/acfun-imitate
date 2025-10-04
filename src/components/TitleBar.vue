<script lang="ts" setup>
import { ref } from 'vue'
import Camera from '../icons/concise/Camera.vue'
import Shop from '../icons/concise/Shop.vue'
import Search from '../icons/concise/Search.vue'
import Phone from '../icons/concise/Phone.vue'
import Message from '../icons/concise/Message.vue'
import History from '../icons/concise/History.vue'
import Updates from '../icons/concise/Updates.vue'
import Upload from '../icons/concise/Upload.vue'
import Uploader from '../icons/concise/Uploader.vue'

const searchText = ref('')

</script>

<template>
    <div id="content">
        <!-- 左边 -->
        <div id="left-content">
            <a href="/">
                <img src="@/icons/acfunlogo.svg" alt="">
            </a>
            <a href="https://shop213417608.taobao.com/" target="_blank" class="extension">
                <Shop class="extension-icon" id="shop-icon" />
                <span class="extension-text">周边商场</span>
            </a>
            <a href="https://www.acfun.cn/face-catcher" target="_blank" class="extension">
                <Camera class="extension-icon" id="camera-icon" />
                <span class="extension-text">AcFun面补助手</span>
            </a>
        </div>

        <!-- 中间 -->
        <div id="center-content">
            <div id="search">
                <ElInput
                    id="input"
                    type="search"
                    v-model="searchText" 
                    :suffix-icon="Search"
                />
                <!-- <div class="input">
                    <input class="input-area" type="search" v-model="searchText">
                    <button class="input-button"><Search class="input-button-icon"/></button>
                </div> -->
                <div class="floating-block" id="search-result">
                    <div>
                        历史记录 清除历史
                        <hr>
                        <ElButton></ElButton>
                    </div>
                </div>
            </div>
        </div>

        <!-- 右边 -->
        <div id="right-content">
            <div id="phone">
                <div><Phone class="mini-icon"/></div>
                <div class="floating-block" id="app-download">
                    <img src="../assets/images/app-download.png" alt="">
                </div>
            </div>
            <div id="avatar">
                <img src="../assets/images/avatar.png" alt="">
                <div class="floating-block" id="user-info">
                    <ul style="list-style: none;">
                        <li>赤座灯里 退出</li>
                        <li>AC币 充值</li>
                        <li>查看更多</li>
                    </ul>
                </div>
            </div>
            <div id="message">
                <div><Message class="mini-icon"/></div>
                <div class="floating-block" id="message-info">
                    <ul style="list-style: none;">
                        <li>评论</li>
                        <li>赞</li>
                        <li>@我的</li>
                        <li>礼物</li>
                        <li>站内公告</li>
                        <li>系统通知</li>
                        <li>私信</li>
                    </ul>
                </div>
            </div>
            <div id="history">
                <div><History class="mini-icon"/></div>
                <div class="floating-block" id="history-info">
                    <ul style="list-style: none;">
                        <li>看过的</li>
                        <li>看过的</li>
                        <li>看过的</li>
                        <li>看过的</li>
                        <li>看过的</li>
                        <li>看过的</li>
                        <li>看过的</li>
                        <li>看过的</li>
                    </ul>
                </div>
            </div>
            <div id="updates">
                <div><Updates class="mini-icon"/></div>
                <div class="floating-block" id="updates-info">
                    <ul style="list-style: none;">
                        <li>关注者动态</li>
                        <li>关注者动态</li>
                        <li>关注者动态</li>
                        <li>关注者动态</li>
                        <li>关注者动态</li>
                        <li>关注者动态</li>
                    </ul>
                </div>
            </div>
            <div id="upload">
                <ElButton id="upload-button" color="rgb(253, 76, 93)">
                    <Upload/>
                    <span id="upload-button-text">投稿</span>
                </ElButton>
            </div>
            <div id="uploader">
                <div><Uploader class="mini-icon"/></div>
                <div class="floating-block" id="uploader-info">
                    <ul style="list-style: none;">
                        <li>稿件管理</li>
                        <li>数据中心</li>
                        <li>互动管理</li>
                        <li>阿普学院</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="./TitleBar.css"></style>