<template>
  <el-scrollbar wrap-class="app-main-scroll-wrap">
    <div class="home-page" id="home-page">
      <h1 class="intro">
        <h3>{{ $t("bot_book_title") }}</h3>
      </h1>
      <iframe
	ref="iframeRef"
	allowfullscreen="true"
	webkitallowfullscreen="true"
	mozallowfullscreen="true"
	:src="bookUrl"
	style="width: 100%; height: 100vh"
	scrolling="auto"
	frameborder="0"
	id="iframe"
>
</iframe>




      <!-- <div class="desc">
        <p>你可以在平台上快速创建基于AI和NFT的智能角色，作为您在赛博空间的数字分身</p>

        <p>你可以和AI智能角色进行对话，让AI替您舒解压力</p>

        <p> 你可以让AI角色代替你完成工作，解放自己的双手</p>

        <p> 你可以不断用自己的个性化资料训练自己的角色，让他更像您，甚至让他替您进行社交，回答各种各样的问题</p>

        <p>你可以在这里定制特定的功能，来装备的的AI角色</p>

      </div> -->

    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const bookUrl = 'https://doc.dorylus.ai/';

    
    onMounted(() => {
  
    })
</script>

<style scoped lang="scss">
.home-page {
  .intro {
    text-align: center;
    font-size: 30px;
    font-family: 'Staatliches', cursive;
    margin: 16px 0;
  }

  .subTitle {
    text-align: center;
    font-size: 40px;
    font-family: 'Staatliches', cursive;
    margin: 16px 0;
  }
}
</style>