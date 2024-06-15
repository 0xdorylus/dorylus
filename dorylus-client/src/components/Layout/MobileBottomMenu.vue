<template>
  <div class="fixed-menu">
    <div class="directory" :style="{ gridTemplateColumns: `repeat(${gridNum},1fr)` }">
      <router-link custom :to="resolveTo(item.router)" v-for="item, index in  showMenuRouter" :key="item.title"
        exact-active-class="active" v-slot="{ isActive, navigate }">
        <div class="navigation" @click="handleClidkMenuItem(item.router, navigate)"
          :class="isActive ? 'home-left-is-select-phone' : ''">
          <div class="navigation-head">
            <el-icon style="margin-right: 0;">
              <component :is="item.icon" />
            </el-icon>
          </div>
          <div class="navigation-title">
            {{ item.title }}
          </div>
        </div>
      </router-link>
      <!-- 展示更多 -->
      <div v-if="showMenuRouter2.length !== 0">
        <div class="navigation" @click="handleMenuMore">
          <div class="navigation-head">
            <el-icon style="margin-right: 0;">
              <More />
            </el-icon>
          </div>
          <div class="navigation-title">
            More
          </div>
        </div>
      </div>
    </div>
    <div @click="showMore = false" :class="showMore ? 'show-menu-fixed' : ''">
      <div class="more-menu" :class="showMore ? 'show' : ''">
        <router-link custom :to="resolveTo(item.router)" v-for="item, index in  showMenuRouter2" :key="item.title"
          exact-active-class="active" v-slot="{ isActive, navigate }">
          <div class="navigation" @click="handleClidkMenuItem(item.router, navigate)"
            :class="isActive ? 'home-left-is-select-phone' : ''">
            <div class="navigation-head">
              <el-icon style="margin-right: 0;">
                <component :is="item.icon" />
              </el-icon>
            </div>
            <div class="navigation-title">
              {{ item.title }}
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from "@/store/common"
import { RemovableRef, useStorage } from "@vueuse/core";
import { useRouter } from "vue-router";
import { ElMessage } from 'element-plus'
import { ref, computed } from "vue";
const commonStore = useCommonStore()
const router = useRouter()
const select: RemovableRef<string> = useStorage('nowSelect', '')
const menuRouter = commonStore.menuRouter
const showMenuNum = ref<number>(5) //需要展示的菜单数量
const showMenuRouter = ref(menuRouter.slice(0, showMenuNum.value))
const showMenuRouter2 = ref(menuRouter.slice(showMenuNum.value))
const showMore = ref(false)


const gridNum = computed(() => {
  if (showMenuRouter.value.length + 1 > menuRouter.length) {
    return menuRouter.length
  } else {
    return showMenuNum.value + 1
  }
})

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
  showMore.value = false
  navigate()
}
const handleMenuMore = () => {
  showMore.value = !showMore.value
}
</script>

<style scoped lang="scss">
/*  */
.fixed-menu {
  display: none;
  position: relative;
  z-index: 999 !important;
  background-color: white;

  @media screen and (max-width: 768px) {
    display: block;
  }

  .directory {
    display: grid;
    grid-gap: 8px;
    padding: 10px;

    .navigation {
      width: 100%;
      font-family: 'Montserrat', sans-serif;
      padding: 10px;
      box-sizing: border-box;
      align-items: center;
      border-radius: 8px;

      .navigation-head {
        overflow: hidden;
        display: flex;
        justify-content: center;
        margin: 0;

        i {
          font-size: 16px;
        }
      }

      .navigation-title {
        margin-top: 8px;
        font-size: 13px;
        text-align: center;
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

.more-menu {
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }

  width: 60%;
  right: 0;
  background-color: white;
  position: fixed;
  bottom: 77px;
  height: auto;
  padding: 10px;
  transform: translateY(150%);
  z-index: 9 !important;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

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

    &:last-child {
      margin-bottom: 0;
    }

    .navigation-head {
      width: 35px;
      height: 35px;
      border-radius: 999px;
      overflow: hidden;
      margin-right: 10px;
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

.show {
  transform: translateY(0);
}

.directory {
  background-color: white;
  position: relative;
  z-index: 10 !important;
}

.show-menu-fixed {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0 0 0 / 0.5);
}
</style>