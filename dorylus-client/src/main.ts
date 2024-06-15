import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/styles/reset.css"
import "@/assets/styles/global.scss"
import router from '@/router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'
import 'virtual:svg-icons-register'
import svgIcon from '@/components/SvgIcon.vue'
import i18n from '@/i18n'
import { ref, watch } from 'vue';

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


app.config.errorHandler = (err, vm, info) => {
  // 错误处理逻辑
  console.error('Global error:', err, vm, info);
};


const pinia = createPinia()
// 使用持久化插件,现在，你的Pinia store的状态将会在每次发生变化时自动保存到本地存储中，并在页面刷新或重新加载后进行恢复。
pinia.use(createPersistedState())
app.component('svg-icon', svgIcon)
app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.use(ContextMenu)
app.use(i18n)


app.mount('#app')
