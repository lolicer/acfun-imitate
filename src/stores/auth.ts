import { defineStore } from 'pinia'
import { ref } from 'vue'

import { check } from '@/utils/request.js'

export const useAuthStore = defineStore('auth', () => {
    const isLoggedIn = ref(false)
    const isChecking = ref(false)
    const lastCheckAt = ref<number | null>(null)
    let checkingPromise: Promise<boolean> | null = null

    /**
     * 向后端确认当前登录状态
     * - statusCode = 200 视为已登录
     * - 其他状态或请求失败视为未登录
     */
    async function confirmLoginStatus() {
        // 并发调用时复用同一个请求，确保所有调用方拿到一致结果
        if (checkingPromise) return checkingPromise

        isChecking.value = true
        checkingPromise = (async () => {
            try {
                const response = await check()
                const statusCode = response?.data?.statusCode
                isLoggedIn.value = statusCode === 200
                return isLoggedIn.value
            } catch {
                isLoggedIn.value = false
                return false
            } finally {
                isChecking.value = false
                lastCheckAt.value = Date.now()
                checkingPromise = null
            }
        })()

        return checkingPromise
    }

    return {
        isLoggedIn,
        isChecking,
        lastCheckAt,
        confirmLoginStatus
    }
})
