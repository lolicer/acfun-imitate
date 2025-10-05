<script lang="ts" setup>
import { ref } from 'vue'
import Camera from '@/assets/icons/concise/Camera.vue'
import Shop from '@/assets/icons/concise/Shop.vue'
import Search from '@/assets/icons/concise/Search.vue'
import Phone from '@/assets/icons/concise/Phone.vue'
import Message from '@/assets/icons/concise/Message.vue'
import History from '@/assets/icons/concise/History.vue'
import Updates from '@/assets/icons/concise/Updates.vue'
import Upload from '@/assets/icons/concise/Upload.vue'
import Uploader from '@/assets/icons/concise/Uploader.vue'
import { ElText } from 'element-plus'
import Exit from '@/assets/icons/concise/Exit.vue'
import HistoryInfoItem from './TitleBar/HistoryInfoItem.vue'
import { HistoryInfo } from '@/types/HistoryInfo'

const searchText = ref('')

const searchHistory: string[] = ['Ciallo是什么意思', '秦泊夜', '绫地宁宁', '阿姆斯特朗回旋加速喷气式阿姆斯特朗炮', '萝莉神的安魂曲'] 
const hotSearsh: string[] = [
    '因幡巡是真实存在的吗',
    'MHRS盾斧配装教程',
    '游戏人生第二季制作决定',
    '八幡语录',
    '春物游戏材木座线',
    '200多年前文火煮尿',
    '原神新角色PV 刻晴',
    '魔族人形香草杯',
    '中国绊爱每天和你说晚安',
    'hhsdd是什么梗'
]
const historyInfo: HistoryInfo[] = [
    {
        imgUrl: '/images/history-video.png',
        url: '',
        title: '“原来我们还是不适合”/MeUmy双女声翻唱【在加纳共和国离婚】',
        time: 1759543328000, // 2025-10-04 10:02:08
        device: 'pc',
        uploader: '呜米',
        duration: 3600,
        position: 1200
    },
    {
        imgUrl: '/images/history-live.png',
        url: '',
        title: '假期快乐~',
        time: 1759446714000, // 2025-10-03 07:11:54
        device: 'pc',
        uploader: '星海玲奈',
        isLiveOn: false
    },
    {
        imgUrl: '/images/history-article.png',
        url: '',
        title: '【动画评价】里世界郊游——轻快的怪谈冒险动画',
        time: 1759080191000, // 2025-09-29 01:23:11
        device: 'mobile',
        uploader: '雨后折木'
    }
]

</script>

<template>
    <div class="titlebar-content">
        <!-- 左边 -->
        <div id="left-content">
            <a href="/">
                <img src="../assets/icons/acfunlogo.svg" alt="">
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
                        <div id="result-history-title">
                            <span>历史记录</span>
                            <span id="result-history-clear-button">清除历史</span>
                        </div>
                        <hr>
                        <div id="result-history-button-list">
                            <ElButton 
                                class="result-history-button"
                                v-for="(value, idx) in searchHistory"
                                :key="idx"
                                size=small
                            ><span :title="value">{{ value }}</span></ElButton>
                        </div>
                        <div id="result-hotsearch-title">
                            <span>今日热搜</span>
                        </div>
                        <hr>
                        <div id="result-hotsearch-list">
                            <div 
                                v-for="(value, idx) in hotSearsh" 
                                :key="idx"
                                class="result-hotsearch-item"
                            >
                            <span class="result-hotsearch-item-idx">{{ idx+1 }}</span>
                            <span class="result-hotsearch-item-value">{{ value }}</span>
                            </div>
                        </div>
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
                    <div id="user-info-space">
                        <div id="user-info-space-name">
                            七森中の阿卡林
                        </div>
                        <div id="user-info-space-exit">
                            <Exit/>
                            <span>退出</span>
                        </div>
                    </div>
                    <div id="user-info-acbi">
                        <div id="user-info-acbi-left">
                            <img id="user-info-acbi-acbiimg" src="../assets/icons/acbi.svg" alt=""> <!--display：online-block-->
                            <span id="user-info-acbi-number">233</span>
                        </div>
                        <div id="user-info-acbi-recharge" type="text">
                            充值
                        </div>
                    </div>
                    <div id="user-info-more">
                        查看更多
                    </div>
                </div>
            </div>
            <div id="message">
                <div><Message class="mini-icon"/></div>
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
                <div><History class="mini-icon"/></div>
                <div class="floating-block" id="history-info">
                    <HistoryInfoItem v-for="item in historyInfo" :data="item" :id="item.url"/>
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