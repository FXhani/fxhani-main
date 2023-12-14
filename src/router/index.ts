import { createRouter, createWebHashHistory } from 'vue-router'

const routes: [] = []

//创建路由器
const router = createRouter({
  //路由模式hash
  history: createWebHashHistory(),
  routes,
  //滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
