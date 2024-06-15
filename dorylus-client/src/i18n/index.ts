
import { createI18n } from 'vue-i18n'

// 1.引入语言包
import zh from './lang/zh-CN'
import en from './lang/en-US'


// 2.创建一个实例
const i18n = createI18n({
  locale: localStorage.getItem('language') || 'en',
  legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
  globalInjection: true, // 全局注册$t方法
  messages: {
    zh,
    en,
  },
})
export default i18n