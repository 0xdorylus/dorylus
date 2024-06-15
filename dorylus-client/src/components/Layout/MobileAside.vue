<template>
  <el-drawer class="popup-dialog" v-model="commonStore.showMobileMenu" :with-header="false" width="100%" direction="ltr">
    <div class="directory">
      <router-link custom :to="resolveTo(item.router)" v-for="item, index in  menuRouter " :key="item.title"
        exact-active-class="active" v-slot="{ isActive, navigate }">
        <div class="navigation" :class="isActive ? 'home-left-is-select-phone' : ''"
          @click="handleClidkMenuItem(item.router, navigate)">
          <div class="navigation-head">
            <el-icon>
              <component :is="item.icon" />
            </el-icon>
          </div>
          <div class="navigation-title">
            {{ item.title }}
          </div>
        </div>
      </router-link>

    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/store/common'
import { RemovableRef, useStorage } from '@vueuse/core';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus'
const commonStore = useCommonStore()
const menuRouter = commonStore.menuRouter
const router = useRouter()
const select: RemovableRef<string> = useStorage('nowSelect', '')

const resolveTo = (path: string) => {
  const resolved = router.resolve({ path });
  const { href } = resolved

  // 找到缓存中当前选择的聊天用户
  if (href == '/chat') {
    return '/chat/' + select.value
  }
  return resolved.href;
}
const handleClidkMenuItem = (router: string, navigate: () => void) => {
  commonStore.showMobileMenu = false
  if (router == '/chat' && select.value == '') {
    return ElMessage.warning("请先选择聊天对象")
  }
  navigate()
}
</script>

<style scoped lang="scss">
.popup-dialog {
  .directory {
    .navigation {
      width: 100%;
      font-family: 'Montserrat', sans-serif;
      padding: 5px 10px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      margin-bottom: 16px;

      .navigation-head {
        width: 35px;
        height: 35px;
        border-radius: 999px;
        overflow: hidden;
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        i {
          font-size: 20px;
        }
      }

      .navigation-title {
        font-size: 14px;
      }
    }

    .home-left-is-select-phone {
      background-color: #3F63F1;
      color: #fff;
      border: none;

      &:hover {
        background-color: #175ceb;

      }
    }
  }
}
</style>