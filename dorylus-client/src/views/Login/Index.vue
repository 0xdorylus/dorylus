<template>
  <!-- 设置面板 -->
  <div class="login-container">
    <div class="logo">
      <h1>Welcome to dorylus</h1>
      <img :src="logo" alt="logo" />
    </div>
    <div class="login-div">
      <div class="title">An elastic self-hosted agent.</div>
      <div class="copy-link"></div>
      <div class="link-btn">
        <button class="wallet-btn" @click="loginWithSign">
          {{ t("signwithwallet") }}
        </button>
      </div>
    </div>
  </div>

  <!-- <div class="share-bot">
        <div class="title">
          {{ t("email_login") }}
        </div>
        <div class="copy-link">
          {{ t("coming soon") }}
        </div>
        <div class="copy-link-btn">
          <button class="link-btn" @click="loginWithEmail">{{ t("email_login") }}</button>
        </div>
      </div> -->

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
</template>


<script setup lang="ts">
import { useCommonStore, useAuthStore } from "@/store/common";
import { UserService } from "@/api/api";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import zhLangIcon from "@/assets/images/lang/zh.png";
import enLangIcon from "@/assets/images/lang/en.png";
import logo from "@/assets/images/logo.png";

import { ref, h, nextTick, onMounted, watch } from "vue";
import { ElMessage } from "element-plus";
import { useRoute } from "vue-router";
import { ethers } from "ethers";
import type { ComputedRef, Ref } from "vue";
import { useWindowSize } from "@vueuse/core";
import { useRouter } from "vue-router";
import { useWebSocket } from "@vueuse/core";
import { formatAddress } from "@/utils/str";

const authStore = useAuthStore();
const token = authStore.token;

const route = useRoute();

// Access query parameters
const { locale, t } = useI18n(); // 先调用此方法，然后再使用

const currentLangIcon = ref(zhLangIcon);

const commonStore = useCommonStore();
const connected = ref(false);

const router = useRouter();

const handleShowMobileMenu = () => {
  commonStore.showMobileMenu = true;
};
const handleShowMobileChat = () => {
  console.log("====================================");
  console.log(1);
  console.log("====================================");
  commonStore.showMobileChat = true;
};

const isLoggedIn: ComputedRef<boolean> = computed(() => {
  return authStore.token !== null;
});
const accountName: ComputedRef<string> = computed(() => {
  const account: string | null = authStore.token ? authStore.account : "";
  return formatAddress(account, 5);
});

const logout = async () => {
  const ret = await UserService.logout({});
  console.log(ret);
};
const showSetting = () => {
  router.push("/wallet");
};


const loginWithSign = async () => {
  if (window.ethereum) {
    const provider = window.ethereum;
    try {
      await window.ethereum.enable();
      connected.value = true;

      provider.on("accountsChanged", () => {
        logout();
      });
    } catch (error) {
      connected.value = false;
      ElMessage({
        message: "Wallet Error",
        type: "warning",
      });
      return;
    }
    const web3Provider = new ethers.providers.Web3Provider(provider);
    let account = await web3Provider.getSigner().getAddress();

    const refcode = route.query.refcode;
    const nonce = crypto.getRandomValues(new Uint32Array(1))[0] + "";
    const message = ` dorylus engine factory\n\nNonce: ${nonce}`;
    const signature = await web3Provider.getSigner().signMessage(message);
    let params = {
      sig: signature,
      nonce: nonce,
      msg: message,
      address: account,
      refcode: refcode,
    };
    const ret = await UserService.loginwithsign(params);

    console.log(ret);
    if (ret.code == 0) {
      localStorage.xauth = ret.result.token;
      localStorage.setItem("userInfo", JSON.stringify(ret.result));

      authStore.setToken(ret.result.token);
      authStore.setAccount(account);
      // authStore.setApp(ret.result.app)

      router.push("/home");
    } else {
      ElMessage({
        message: ret.msg,
        type: "warning",
      });
    }
  } else {
    ElMessage({
      message: "Please install Metamask wallet",
      type: "warning",
    });
    return;
  }
};
const loginWithEmail = async () => {};

// 监听浏览器宽度实现dialog动态宽度
const { width: windowsWidth } = useWindowSize();
const handleResize = (newVal: number) => {
  if (newVal < 768) {
  } else if (newVal < 1280) {
  } else {
  }
};
watch(windowsWidth, (newVal) => {
  handleResize(newVal);
});
onMounted(async () => {
  handleResize(windowsWidth.value);
  window.addEventListener("resize", () => {
    handleResize(windowsWidth.value);
  });
});

// langIcon
const changeLang = async (lang: string) => {
  locale.value = lang;
  localStorage.setItem("language", lang);
  if (lang == "en") {
    currentLangIcon.value = enLangIcon;
  } else {
    currentLangIcon.value = zhLangIcon;
  }
  let r = await UserService.setLang({ lang: lang });
  console.log(r);
};

const getCurrentLang = computed(() => {
  return locale.value;
});

const showDoc = () => {
  router.push("/wp");
};
</script>
  
  <style scoped lang="scss">
.login-container {
  width: 80%; /* 或者具体的宽度值 */
  margin: 0 auto;

  .logo {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
    font-family: "Staatliches", cursive;
    margin-top: 10rem;
  }
  .login-div {
    width: 80%; /* 或者具体的宽度值 */
    margin: 0 auto;
    .title {
      text-align: center;
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: bold;
      margin-top: 3rem;
    }
    .link-btn {
      text-align: center;
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: bold;
      margin-top: 3rem;
      .wallet-btn {
        width: 100%;
        height: 50px;
        background-color: #1c64f2;
        color: white;

        border: 1px solid #1c64f2 !important;

        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 20px;
        margin-top: 20px;
      }
    }
  }
}
</style>