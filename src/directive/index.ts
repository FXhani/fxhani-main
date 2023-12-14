// 此文件用于注册全局自定义指令
// 使用方法：在标签内加上 v-preventReClick
import { preventReClick } from './preventReClick'

export default function directives(app: any) {
  preventReClick(app)
}
