<template>
  <div class="font-32">Hello World</div>
  <div class="m-t-10">
    <input type="text" placeholder="请输入账号" v-model="loginForm.username" />
  </div>
  <div class="m-t-10 m-b-10">
    <input type="text" placeholder="请输入密码" v-model="loginForm.password" />
  </div>
  <button v-preventReClick @click="login">登录</button>
  <router-link to="/screen">
    <button class="m-l-10">数据大屏</button>
  </router-link>
</template>

<script setup lang="ts">
import { feachMock } from '@/api/user'
import { reactive } from 'vue'

const loginForm = reactive({
  username: 'admin',
  password: '111111',
})

// 测试 mock 数据
const login = async () => {
  const result = await feachMock(loginForm)
  console.log('result', result)
}
</script>

<style lang="scss" scoped></style>
