import axios from 'axios'

const request = axios.create({
    baseURL: '/api',
    timeout: 10000
})

export interface AuthPayload {
    /** 用户邮箱 */
    email: string
    /** 用户密码 */
    password: string
}

/**
 * 用户登录
 *
 * @param payload 登录凭据
 * @returns 登录请求 Promise
 * @remarks 后端可能返回：
 * - 200：登录成功
 * - 409：邮箱或密码不正确
 * - 400：请求体不合法
 * - 500：服务器发生内部错误
 */
export function login(payload: AuthPayload) {
    return request.post('/auth/login', payload)
}

/**
 * 用户注册
 *
 * @param payload 注册凭据
 * @returns 注册请求 Promise
 * @remarks 后端可能返回：
 * - 201：注册成功
 * - 409：邮箱已存在
 * - 400：请求体不合法
 * - 500：服务器发生内部错误
 */
export function signup(payload: AuthPayload) {
    return request.post('/auth/signup', payload)
}

/**
 * 校验登录状态
 *
 * @returns 状态校验请求 Promise
 * @remarks 后端可能返回：
 * - 200：登录状态有效
 * - 401：登录状态已过期 / 未登录或登录状态不存在
 * - 500：服务器发生内部错误
 */
export function check() {
    return request.get('/auth/check')
}
