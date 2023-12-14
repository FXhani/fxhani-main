// 全局自定义组件：防止按钮重复点击
export const preventReClick = (app: any) => {
  app.directive('preventReClick', {
    mounted(el: any, options: any) {
      el.addEventListener('click', () => {
        if (!el.disabled) {
          el.disabled = true
          setTimeout(() => {
            el.disabled = false
          }, options.value || 1000)
        }
      })
    },
  })
}
