<template>
  <el-config-provider :locale="locale">
    <div class="common-layout">
      <el-container>
        <el-aside width="200px">
          <Aside />
        </el-aside>
        <MobileAside />
        <MobileChat />
        <el-container>
          <el-header>
            <Nav />
          </el-header>
          <el-main>
            <router-view />
          </el-main>
          <MobileBottomMenu />
        </el-container>
      </el-container>
    </div>
  </el-config-provider>
</template>
<script setup lang="ts">
import { ref } from "vue"
import Nav from "@/components/Layout/Nav.vue";
import Aside from "@/components/Layout/Aside.vue";
import MobileAside from "@/components/Layout/MobileAside.vue"
import MobileBottomMenu from "@/components/Layout/MobileBottomMenu.vue"
import MobileChat from "@/components/Layout/MobileChat.vue"
import en from 'element-plus/dist/locale/en.mjs'

const locale = ref(en)

</script>
<style scoped lang="scss">
.common-layout {
  background-color: #fff;
  height: 100%;
}

.el-container {
  height: 100%;
}

.el-aside {
  background-color: #fafafa;
  margin: 12px;
  border: 1px solid #eff0f0;
  border-radius: 8px;
  padding: 15px;
  box-sizing: border-box;
  margin-right: 0;
  width: 220px;

  @media screen and (max-width: 768px) {
    display: none;
  }
}

.el-header {
  margin: 12px;
  padding: 0;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
}

.el-main {
  background-color: #fafafa;
  border: 1px solid #eff0f0;
  padding: 15px;
  margin: 12px;
  margin-bottom: 0;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    padding: 0;
    border: none;
  }

}
</style>
