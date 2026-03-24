<script setup lang="ts">
import TruncatedText from '@/components/public/TruncatedText.vue'

const props = withDefaults(
    defineProps<{
        avatarUrl?: string
        userName?: string
        signature?: string
    }>(),
    {
        avatarUrl: '',
        userName: '',
        signature: ''
    }
)

function handleJumpToUserSpace() {}
</script>

<template>
    <div class="user-space-card">
        <img class="user-avatar" :src="props.avatarUrl" alt="" />
        <div class="user-info">
            <TruncatedText
                class="user-name"
                :text="props.userName"
                :max-line="1"
            />
            <TruncatedText
                class="user-signature"
                :text="props.signature"
                :max-line="1"
            />
            <button class="jump-btn" @click="handleJumpToUserSpace">
                前往TA的个人空间
            </button>
        </div>
    </div>
</template>

<style scoped>
.user-space-card {
    display: flex;
    align-items: center;
    gap: 12px;
}

.user-avatar {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
}

.user-info {
    min-width: 0;
    flex: 1;
}

.user-name {
    font-size: 17px;
    line-height: 1;
    color: var(--color-gray-0);
}

.user-signature {
    font-size: 13px;
    color: var(--color-gray-1);
}

.jump-btn {
    margin-top: 8px;
    border: none;
    padding: 0;
    background: transparent;
    color: var(--color-acfun);
    font-size: 13px;
    line-height: 1;
    cursor: pointer;
}
</style>
