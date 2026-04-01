<script setup lang="ts">
import { computed, ref } from 'vue'
import { check, login, signup } from '@/utils/request'

type PanelMode = 'login' | 'signup'

const mode = ref<PanelMode>('login')

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// 登录表单
const loginEmail = ref('')
const loginPassword = ref('')
const loginEmailError = ref<string | null>(null)
const loginPasswordError = ref<string | null>(null)

// 注册表单
const signupEmail = ref('')
const signupPassword = ref('')
const signupConfirmPassword = ref('')
const signupEmailError = ref<string | null>(null)
const signupPasswordError = ref<string | null>(null)
const signupConfirmError = ref<string | null>(null)

const isLoginEmailValid = computed(() =>
    emailPattern.test(loginEmail.value.trim())
)
const isSignupEmailValid = computed(() =>
    emailPattern.test(signupEmail.value.trim())
)

function goSignup() {
    mode.value = 'signup'
    // 切换面板时清理错误，避免残留提示
    loginEmailError.value = null
    loginPasswordError.value = null
    signupEmailError.value = null
    signupPasswordError.value = null
    signupConfirmError.value = null
}

function goLogin() {
    mode.value = 'login'
    signupEmailError.value = null
    signupPasswordError.value = null
    signupConfirmError.value = null
}

function validateLoginEmail() {
    const v = loginEmail.value.trim()
    loginEmailError.value =
        v.length === 0
            ? '请输入邮箱'
            : isLoginEmailValid.value
              ? null
              : '邮箱格式不正确'
    return loginEmailError.value === null
}

function validateSignupEmail() {
    const v = signupEmail.value.trim()
    signupEmailError.value =
        v.length === 0
            ? '请输入邮箱'
            : isSignupEmailValid.value
              ? null
              : '邮箱格式不正确'
    return signupEmailError.value === null
}

function validateSignupConfirm() {
    const confirm = signupConfirmPassword.value
    const password = signupPassword.value

    if (confirm.length === 0) {
        signupConfirmError.value = '请输入确认密码'
        return false
    }
    if (password.length === 0) {
        signupConfirmError.value = '请先输入密码'
        return false
    }
    signupConfirmError.value =
        confirm === password ? null : '两次输入的密码不一致'
    return signupConfirmError.value === null
}

function validateLoginPassword() {
    const v = loginPassword.value
    loginPasswordError.value = v.length === 0 ? '请输入密码' : null
    return loginPasswordError.value === null
}

function validateSignupPassword() {
    const v = signupPassword.value
    signupPasswordError.value = v.length === 0 ? '请输入密码' : null
    return signupPasswordError.value === null
}

function submitLogin() {
    const ok = validateLoginEmail()
    const ok2 = validateLoginPassword()
    if (!ok || !ok2) return

    // 登录请求
    const payload = {
        email: loginEmail.value.trim(),
        password: loginPassword.value
    }

    login(payload)
        .then((res) => {
            // 先把后端返回结果打印到控制台
            console.log('login response:', res.data)
        })
        .catch((err) => {
            console.error('login request error:', err.response?.data ?? err)
        })
}

function submitSignup() {
    const ok1 = validateSignupEmail()
    const ok2 = validateSignupPassword()
    const ok3 = validateSignupConfirm()
    if (!ok1 || !ok2 || !ok3) return

    // 这里请求本机后端注册接口（使用 PUT）
    // 注意：具体请求字段名需和后端接口约定保持一致
    const payload = {
        email: signupEmail.value.trim(),
        password: signupPassword.value
    }

    signup(payload)
        .then((res) => {
            // 先把后端返回结果打印到控制台
            console.log('signup response:', res.data)
        })
        .catch((err) => {
            console.error('signup request error:', err.response?.data ?? err)
        })
}

function checkTest() {
    check()
        .then((res) => {
            // 先把后端返回结果打印到控制台
            console.log('check response:', res.data)
        })
        .catch((err) => {
            console.error('check request error:', err.response?.data ?? err)
        })
}
</script>

<template>
    <div class="login-layout">
        <div class="panel-viewport" :data-mode="mode">
            <section class="panel" aria-label="登录/注册">
                <div class="panel__title">
                    <transition name="title-switch" mode="out-in">
                        <span :key="mode">{{
                            mode === 'login' ? '登录' : '注册'
                        }}</span>
                    </transition>
                </div>

                <div class="panel__body">
                    <!-- 登录表单（无动画直接切换） -->
                    <div v-if="mode === 'login'">
                        <div class="field">
                            <label class="field__label" for="login-email"
                                >邮箱</label
                            >
                            <input
                                id="login-email"
                                v-model="loginEmail"
                                class="field__input"
                                :class="{
                                    'field__input--error': loginEmailError
                                }"
                                placeholder="请输入"
                                inputmode="email"
                                autocomplete="email"
                                @blur="validateLoginEmail"
                            />
                            <div v-if="loginEmailError" class="field__error">
                                {{ loginEmailError }}
                            </div>
                        </div>

                        <div class="field">
                            <label class="field__label" for="login-password"
                                >密码</label
                            >
                            <input
                                id="login-password"
                                v-model="loginPassword"
                                class="field__input"
                                :class="{
                                    'field__input--error': loginPasswordError
                                }"
                                type="password"
                                placeholder="请输入"
                                autocomplete="current-password"
                                @blur="validateLoginPassword"
                            />
                            <div v-if="loginPasswordError" class="field__error">
                                {{ loginPasswordError }}
                            </div>
                        </div>
                    </div>

                    <!-- 注册表单（无动画直接切换） -->
                    <div v-else>
                        <div class="field">
                            <label class="field__label" for="signup-email"
                                >邮箱</label
                            >
                            <input
                                id="signup-email"
                                v-model="signupEmail"
                                class="field__input"
                                :class="{
                                    'field__input--error': signupEmailError
                                }"
                                placeholder="请输入"
                                inputmode="email"
                                autocomplete="email"
                                @blur="validateSignupEmail"
                            />
                            <div v-if="signupEmailError" class="field__error">
                                {{ signupEmailError }}
                            </div>
                        </div>

                        <div class="field">
                            <label class="field__label" for="signup-password"
                                >设置密码</label
                            >
                            <input
                                id="signup-password"
                                v-model="signupPassword"
                                class="field__input"
                                :class="{
                                    'field__input--error': signupPasswordError
                                }"
                                type="password"
                                placeholder="请输入"
                                autocomplete="new-password"
                                @blur="validateSignupPassword"
                            />
                            <div
                                v-if="signupPasswordError"
                                class="field__error"
                            >
                                {{ signupPasswordError }}
                            </div>
                        </div>

                        <div class="field">
                            <label class="field__label" for="signup-confirm"
                                >确认密码</label
                            >
                            <input
                                id="signup-confirm"
                                v-model="signupConfirmPassword"
                                class="field__input"
                                :class="{
                                    'field__input--error': signupConfirmError
                                }"
                                type="password"
                                placeholder="请输入"
                                autocomplete="new-password"
                                @blur="validateSignupConfirm"
                            />
                            <div v-if="signupConfirmError" class="field__error">
                                {{ signupConfirmError }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="panel__footer">
                    <button
                        v-if="mode === 'login'"
                        class="btn"
                        type="button"
                        @click="submitLogin"
                    >
                        登录
                    </button>
                    <button
                        v-else
                        class="btn"
                        type="button"
                        @click="submitSignup"
                    >
                        注册
                    </button>

                    <div class="panel__switch">
                        <button
                            v-if="mode === 'login'"
                            class="hint__link"
                            type="button"
                            @click="goSignup"
                            aria-label="切换到注册"
                        >
                            没有账号？点击注册
                        </button>
                        <button
                            v-else
                            class="hint__link"
                            type="button"
                            @click="goLogin"
                            aria-label="切换到登录"
                        >
                            已有账号？点击登录
                        </button>
                    </div>
                </div>
            </section>
        </div>

        // check测试
        <button @click="checkTest">测试</button>
    </div>
</template>

<style scoped>
.login-layout {
    width: 100%;
    box-sizing: border-box;
    padding: 16px;
    background: transparent;
}

.panel-viewport {
    width: min(440px, 100%);
    position: relative;
    border-radius: 16px;
    height: 520px;
    min-height: 520px;
    overflow: hidden; /* 防止滑动动画时内容溢出卡片边界 */
}

.panel {
    height: 100%;
    padding: 26px 22px;
    box-sizing: border-box;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.98);
    border: 1px solid rgba(17, 24, 39, 0.1);
    backdrop-filter: blur(6px);
    box-shadow: 0 16px 40px rgba(17, 24, 39, 0.08);

    display: flex;
    flex-direction: column;
}

.panel__title {
    font-size: 20px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 18px;
}

.panel__body {
    flex: 1;
    overflow: auto;
}

/* 仅标题有动画：淡入淡出 */
.title-switch-enter-active,
.title-switch-leave-active {
    transition: opacity 220ms ease;
}
.title-switch-enter-from {
    opacity: 0;
}
.title-switch-enter-to {
    opacity: 1;
}
.title-switch-leave-from {
    opacity: 1;
}
.title-switch-leave-to {
    opacity: 0;
}

.field {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 14px;
}

.field__label {
    font-size: 13px;
    color: rgba(17, 24, 39, 0.72);
}

.field__input {
    height: 42px;
    border-radius: 10px;
    padding: 0 12px;
    border: 1px solid rgba(17, 24, 39, 0.12);
    background: #f9fafb;
    color: #111827;
    outline: none;
    box-sizing: border-box;
}

.field__input--error {
    border-color: rgba(239, 68, 68, 0.45);
    box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);
}

.field__error {
    margin-top: -6px;
    font-size: 12px;
    color: rgba(220, 38, 38, 0.9);
}

.field__input::placeholder {
    color: rgba(17, 24, 39, 0.4);
}

.field__input:focus {
    border-color: rgba(17, 24, 39, 0.25);
    box-shadow: 0 0 0 4px rgba(17, 24, 39, 0.08);
}

.btn {
    width: 100%;
    height: 44px;
    border-radius: 12px;
    border: 1px solid rgba(17, 24, 39, 0.14);
    background: #ffffff;
    color: #111827;
    font-weight: 700;
    cursor: pointer;
    margin-top: 10px;
}

/* 底部小字 */
.panel__footer {
    flex: 0 0 auto;
    margin-top: 0;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
}

.panel__footer .btn {
    margin-top: 0;
}

.panel__switch {
    display: flex;
    justify-content: center;
}

.hint__link {
    border: none;
    background: transparent;
    color: rgba(17, 24, 39, 0.72);
    cursor: pointer;
    font-size: 13px;
    padding: 8px 0;
}

.hint__link:hover {
    color: rgba(17, 24, 39, 1);
    text-decoration: underline;
}
</style>
