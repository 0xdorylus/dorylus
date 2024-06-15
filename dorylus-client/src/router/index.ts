import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Index from '@/views/Index/index.vue';
import { useAuthStore } from "@/store/common"
import { ElMessage } from 'element-plus';
// import { useI18n } from 'vue-i18n';
// const {  locale,t } = useI18n() // 先调用此方法，然后再使用

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
          needAuth: false
        }
      },
      {
        path: '/registerAgent',
        name: 'registerAgent',
        component: () => import('@/views/Home/registerAgent.vue'),
        meta: {
          needAuth: false
        }
      },


    

   


   
   


    
     


   
    


      {
        path: '/chatpanel',
        name: 'chatpanel',
        component: () => import('@/components/ChatPanel.vue'),
        meta: {
          needAuth: true
        }
      },

      {
        path: '/mybots',
        name: 'mybots',
        component: () => import('@/views/Bots/index.vue'),
        meta: {
          needAuth: true
        }
      },
   
      {
        path: '/createAgent',
        name: 'createAgent',
        component: () => import('@/views/Bots/createBot.vue'),
        meta: {
          needAuth: true
        }
      },
  

      {
        path: '/settings',
        name: 'settings',
        component: () => import('@/views/Settings/index.vue'),
        meta: {
          needAuth: true
        }
      },
      {
        path: '/me',
        name: 'me',
        component: () => import('@/views/Me/index.vue'),
        meta: {
          needAuth: true
        }
      },
      {
        path: '/contacts',
        name: 'contacts',
        component: () => import('@/views/Contacts/index.vue'),
        meta: {
          needAuth: true
        }
      },
 
    
 
      {
        path: '/setupCopilot',
        name: 'setupCopilot',
        component: () => import('@/views/Bots/setupCopilot.vue'),
        meta: {
          needAuth: true
        }
      },
      {
        path: '/store',
        name: 'store',
        component: () => import('@/views/Store/index.vue'),
        meta: {
          needAuth: true
        }
      },    
  
      {
        path: '/wp',
        name: 'wp',
        component: () => import('@/views/Docs/index.vue'),
        meta: {
          needAuth: false
        }
      },
      {
        path: '/wallet',
        name: 'wallet',
        component: () => import('@/views/Wallet/index.vue'),
        meta: {
          needAuth: true
        }
      },
      {
        path: '/stat',
        name: 'stat',
        component: () => import('@/views/Bots/stat.vue'),
        meta: {
          needAuth: true
        }
      },

      

    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Index.vue'),
    meta: {
      needAuth: false
    }
  },

  {
    path: '/copilot/:id',
    name: 'copilot',
    component: () => import('@/views/Chat/copilot.vue'),
    meta: {
      needAuth: true
    }
  },



];

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes
});
// 判断是否授权登录
router.beforeEach((to, from, next) => {
  const isLoggedin = () => {
    // 判断是否已登录
    // store里面的token是否存在
    const authStore = useAuthStore()
    return authStore.token ? true : false
  }
  // 判断目标路由是否需要进行授权登录
  if (to.meta.needAuth) {
    // 判断是否已登录
    if (isLoggedin()) {
      // 已登录，允许跳转
      next();
    } else {
      // 未登录，禁止跳转并重定向到登录页面
      ElMessage.warning("Please Sign In(请先登录)");
      next({ path: '/login' });
    }
  } else {
    // 不需要授权登录，允许跳转
    next();
  }
});
export default router;
