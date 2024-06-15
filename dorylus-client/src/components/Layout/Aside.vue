<template>
  <div class="home-left-theme">
    <div class="home-left-icon">
      <img src="@/assets/images/logo.png" class="home-left-avatar">
    </div>
    <div class="home-left-title">dorylus.ai
    </div>
  </div>
  <div class="home-left-box">
    <router-link custom :to="resolveTo(item.router)" exact-active-class="active" v-for="item, index in  menuRouter "
      :key="item.title" v-slot="{ isActive, navigate }">

      <div class="home-left-box-select" v-if="!item.needAuth || isLoggedIn" :class="isActive ? 'home-left-is-select' : ''"
        @click="handleClidkMenuItem(item.router, navigate)">

        <div class="home-left-box-select-icon">
          <el-icon>
            <component :is="item.icon" />
          </el-icon>
        </div>

        <div class="home-left-box-select-title">
          {{ item.title }}
        </div>
      </div>
      <!-- <div>
      <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <img class="lang-img" src="@/assets/images/lang/en.png" alt="" @click="changeLang('en')" />
            </el-dropdown-item>

            <el-dropdown-item>
              <img class="lang-img" src="@/assets/images/lang/zh.png" alt="" @click="changeLang('zh')" />
            </el-dropdown-item>

          </el-dropdown-menu>


        </template>
        </div> -->

      <!-- </div> -->

    </router-link>

  </div>
</template>

<script setup lang="ts">

import { useAuthStore, useCommonStore } from '@/store/common';
import { useRouter } from 'vue-router';
import { RemovableRef, useStorage } from "@vueuse/core"
import { ComputedRef, computed } from 'vue';
const router = useRouter()
import { ElMessage } from 'element-plus'
const commonStore = useCommonStore()
const menuRouter = commonStore.menuRouter
const select: RemovableRef<string> = useStorage('nowSelect', '')
import { UserService } from '@/api/api.ts'
import { useI18n } from 'vue-i18n'
import zhLangIcon from "@/assets/images/lang/zh.png"
import enLangIcon from "@/assets/images/lang/en.png"
import { ref, h, nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ethers } from 'ethers'
import type { Ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
const authStore = useAuthStore()

const token = authStore.token
const wsUrl = `wss://api.dorylus.ai/wss?token=${token}`

const route = useRoute()





// Access query parameters
const { locale, t } = useI18n() // 先调用此方法，然后再使用

const currentLangIcon = ref(zhLangIcon);
const dialogWidth: Ref<string> = ref('30%')
const dialogVisible: Ref<boolean> = ref(false)
const connected = ref(false)



const handleShowMobileMenu = () => {
  commonStore.showMobileMenu = true
}
const handleShowMobileChat = () => {
  console.log('====================================');
  console.log(1);
  console.log('====================================');
  commonStore.showMobileChat = true
}

const isLoggedIn: ComputedRef<boolean> = computed(() => {
  return authStore.token !== null
})
import { formatAddress } from '@/utils/str'

const accountName: ComputedRef<string> = computed(() => {
  const account: string | null = authStore.token ? authStore.account : ''
  return formatAddress(account, 5)
})



const showLoginBox = () => {
  dialogVisible.value = true
}
const logout = async () => {


  const ret = await UserService.logout({})
  console.log(ret)
}
const showSetting = () => {
  router.push("/wallet")
}






const loginWithGuest = async () => {
  const ret = await UserService.loginwithGuest({})

  console.log(ret);
  if (ret.code == 0) {

    authStore.setToken(ret.result.token)
    authStore.setAccount(ret.result.username)
    authStore.setApp(ret.result.app)
    const token = authStore.token

    dialogVisible.value = false

  } else {
    ElMessage({
      message: ret.msg,
      type: 'warning'
    })
  }
}
const loginWithSign = async () => {


  if (window.ethereum) {
    const provider = window.ethereum;
    try {
      await window.ethereum.enable();
      connected.value = true

      provider.on('accountsChanged', () => {
        logout()
      })


    } catch (error) {
      connected.value = false
      ElMessage({
        message: "Wallet Error",
        type: 'warning'
      })
      return
    }
    const web3Provider = new ethers.providers.Web3Provider(
      provider
    )
    let account = await web3Provider
      .getSigner()
      .getAddress()


    const refcode = route.query.refcode
    const nonce = crypto.getRandomValues(new Uint32Array(1))[0]+""
    const message = `Login to dorylus engine factory\n\nNonce: ${nonce}`
    const signature = await web3Provider.getSigner().signMessage(message)
    let params = {
      sig: signature,
      nonce: nonce,
      msg: message,
      address: account,
      refcode: refcode,
    }
    const ret = await UserService.loginwithsign(params)

    console.log(ret);
    if (ret.code == 0) {
      localStorage.xauth = ret.result.token
      localStorage.setItem("userInfo", JSON.stringify(ret.result))

      authStore.setToken(ret.result.token)
      authStore.setAccount(account)
      // authStore.setApp(ret.result.app)

      const token = authStore.token


      dialogVisible.value = false

    } else {
      ElMessage({
        message: ret.msg,
        type: 'warning'
      })
    }




  } else {
    ElMessage({
      message: "Please install Metamask wallet",
      type: 'warning'
    })
    return
  }


}


// langIcon
const changeLang = async (lang: string) => {
  locale.value = lang
  localStorage.setItem('language', lang)
  if (lang == "en") {
    currentLangIcon.value = enLangIcon;
  } else {
    currentLangIcon.value = zhLangIcon;
  }
  let r = await UserService.setLang({ lang: lang });
  console.log(r);
}

const getCurrentLang = computed(() => {
  return locale.value
})


const showDoc = () => {
  router.push("/wp")
}


const resolveTo = (path: string) => {
  const resolved = router.resolve({ path });
  // if()
  const { href } = resolved

  // 找到缓存中当前选择的聊天用户
  if (href == '/chat') {
    return '/chat/' + select.value
  }
  return resolved.href;
}

/**
 * 点击菜单项
 * @param router
 * @param navigate
 * @returns
 */
const handleClidkMenuItem = (router: string, navigate: () => void) => {
  if (router == '/chat' && select.value == '') {
    return ElMessage.warning("请先选择聊天对象")
  }

  navigate()
}
</script>

<style lang="scss" scoped>
.home-left-theme {
  display: flex;
  height: 45px;
  border-bottom: 1px solid #eff0f0;
  color: #000;
  align-items: center;
  padding-right: 15px;
  cursor: pointer;

  .home-left-icon {

    .home-left-avatar {
      width: 40px;
      height: 40px;
      border-radius: 10%;
    }
  }

  .home-left-title {
    margin-left: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;

    span {}

  }
}

.home-left-box {
  margin-top: 20px;

  .home-left-box-select {
    display: flex;
    padding: 12px 15px;
    color: #000;
    cursor: pointer;
    align-items: center;
    transition: all .1s ease-in-out;

    .home-left-box-select-icon {
      display: flex;
      align-items: center;
    }

    .home-left-box-select-title {
      margin-left: 20px;
      font-size: 15px;
      margin-top: 3px;
    }
  }

  .home-left-is-select {
    background-color: #3F63F1;
    border-radius: 8px;
    color: #fff;

    &:hover {
      background-color: #175ceb;

    }
  }


}
</style>