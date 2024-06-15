<template>
  <router-view></router-view>
</template>

<script  lang="ts">
import { defineComponent } from "vue";
import ReloadPWA from "./components/ReloadPWA.vue";

export default defineComponent({
  name: "App",
  components: {
    ReloadPWA,
  },
});

import { logout } from "@/utils/index"
import { useRouter } from "vue-router"
const router = useRouter()

const accountMonitor = ()=> {
  if (window.ethereum) {
    window.ethereum.on("accountsChanged",  function (accounts) {
    logout().then(()=>{{
      router.push("/login")
    }})
  });
  }
    
}
accountMonitor();

</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>