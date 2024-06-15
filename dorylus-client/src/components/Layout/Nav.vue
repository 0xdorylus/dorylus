<template>
  <div class="bots-header">
    <!-- logo -->
    <div class="bots-name">
      <img src="@/assets/images/small_bot.png" style="width:48px;" alt="">
      <span>You Agent Engine </span>
    </div>
    <!-- menu -->
    <div class="menu-icon">
      <!-- <el-icon>
        <Expand @click="handleShowMobileMenu" />
      </el-icon> -->
      <el-icon class="chat-list">
        <ChatLineRound @click="handleShowMobileChat" />
      </el-icon>
    </div>
    <div class="header-tool">

      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="lang" :src="currentLangIcon" alt="">
          <!-- <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon> -->
        </span>


        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <img class="lang-img" src="@/assets/images/lang/en.png" alt="" @click="changeLang('en')" />
            </el-dropdown-item>

            <!-- <el-dropdown-item>
              <img class="lang-img" src="@/assets/images/lang/zh.png" alt="" @click="changeLang('zh')" />
            </el-dropdown-item> -->

          </el-dropdown-menu>


        </template>


      </el-dropdown>

      <span class="link-wallet" v-if="isLoggedIn" @click="showSetting">{{ accountName }}</span>
      <span class="link-wallet" v-else @click="showLoginBox">{{ t("SignIn") }}</span>

      <span class="link-doc" @click="showDoc"><el-icon>
          <Notebook />
        </el-icon></span>


    </div>

    <!-- 设置面板 -->
    <el-dialog v-model="dialogVisible" :title="t('login')" :width="dialogWidth">
      <div class="share-bot">
        <div class="title">
          {{ t("LoginWithWallet") }}
        </div>
        <div class="copy-link">
          ETH、BSC、Polygon...
        </div>
        <div class="copy-link-btn">
          <button class="link-btn" @click="loginWithSign">{{ t("signwithwallet") }}</button>
        </div>
      </div>
      <el-divider />

      <div class="share-bot">
        <div class="title">
          {{ t("email_login") }}
        </div>
        <div class="copy-link">
          {{ t("coming soon") }}
        </div>
        <div class="copy-link-btn">
          <button class="link-btn" @click="loginWithEmail">{{ t("email_login") }}</button>
        </div>
      </div>
      <el-divider />

<!-- 
      <div class="connect-bot">
        <div class="title">
          {{ t("community") }}
        </div>

        <div class="connect-media">
          <el-button>Discord</el-button>
          <el-button>Telegram</el-button>
          <el-button>Help</el-button>
        </div>
      </div> -->
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import { useCommonStore, useAuthStore } from '@/store/common'
import { UserService } from '@/api/api'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import zhLangIcon from "@/assets/images/lang/zh.png"
import enLangIcon from "@/assets/images/lang/en.png"
import { ref, h, nextTick, onMounted, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { useRoute } from 'vue-router'
import { ethers } from 'ethers'
import type { ComputedRef, Ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { useWebSocket } from '@vueuse/core'
import { formatAddress } from '@/utils/str'

const authStore = useAuthStore()
const token = authStore.token
const wsUrl = `wss://app.dorylus.ai/wss?token=${token}`

const route = useRoute()





// Access query parameters
const { locale, t } = useI18n() // 先调用此方法，然后再使用

const currentLangIcon = ref(enLangIcon);
const dialogWidth: Ref<string> = ref('30%')
const dialogVisible: Ref<boolean> = ref(false)
const commonStore = useCommonStore()
const connected = ref(false)

const router = useRouter()


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
    const message = ` dorylus engine factory\n\nNonce: ${nonce}`
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
const loginWithEmail = async()=>{

}

// 监听浏览器宽度实现dialog动态宽度
const { width: windowsWidth } = useWindowSize()
const handleResize = (newVal: number) => {
  if (newVal < 768) {
    dialogWidth.value = '90%'
  } else if (newVal < 1280) {
    dialogWidth.value = '50%'
  } else {
    dialogWidth.value = '30%'
  }
}
watch(windowsWidth, (newVal) => {
  handleResize(newVal)
})
onMounted(async () => {
  handleResize(windowsWidth.value)
  window.addEventListener("resize", () => {
    handleResize(windowsWidth.value)
  });


});



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


</script>

<style scoped lang="scss">
.bots-header {
  background-color: #fafafa;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #eff0f0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .bots-name {
    font-size: 24px;
    font-weight: bold;
    font-family: 'Staatliches', cursive;
    display: flex;
    align-items: center;

    img {
      margin-right: 8px;
    }

    span {}

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .menu-icon {
    font-size: 22px;

    @media screen and (min-width: 769px) {
      display: none;
    }

    .chat-list {
      /* margin-left: 1rem; */
    }
  }

  .header-tool {
    display: flex;
    align-items: center;
    font-family: 'Montserrat', sans-serif;

    .lang {
      border-radius: 100%;
      width: 32px;
      height: 32px;
      text-align: center;
      cursor: pointer;
    }

    .link-doc {
      font-size: 30px;
      margin-right: 10px;
      margin-left: 10px;
      margin-top: 3px;

    }

    .link-wallet {
      background-color: #3F63F1;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 32px;
      border-radius: 4px;
      cursor: pointer;
      user-select: none;
      padding: 0 17px;
      font-size: 12px;
      transition: all .3s ease-in-out;
      margin-left: 16px;

      &:hover {
        background-color: #175ceb;
      }
    }
  }
}


.share-bot {

  .title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .copy-link {
    background-color: #f9fafb;
    width: 100%;
    margin: 20px 0;
    padding: 10px;
    box-sizing: border-box;
    color: #409eff;
  }

  .copy-link-btn {
    display: flex;
    justify-content: flex-end;


  }
}

.connect-bot {
  .title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .connect-code {
    display: flex;
    align-items: center;

    .code-content {
      flex: 1;
      background-color: #f9fafb;
      width: 100%;
      margin: 20px 10px;
      padding: 10px;
      box-sizing: border-box;
      color: #409eff;
    }

  }
}

.link-btn {
  outline: none;
  border: none;
  background-color: #3F63F1;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  padding: 0 17px;
  font-size: 14px;
  transition: all .3s ease-in-out;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    background-color: #175ceb;
  }
}

.lang-img {
  width: 32px;
  height: 32px;
}

/* dropdown边框问题 */
.el-dropdown-link:focus {
  outline: none;
}
</style>