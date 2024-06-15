<template>
     <div class="chat-header-msg">
        <div class="title" style="font-size:28px;">
          <el-icon @click="$router.go(-1);">
            <Back />
          </el-icon>
        </div>
        <div class="title">{{ title }}</div>
        <div class="chat-settings">
          <el-icon  style="margin-right:1rem;">
            <Share />
          </el-icon>

        </div>
      </div>
</template>
<script  lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent( {
    name:"NavHeader",

    props: {
        title: {
            type: String,
            default: ''
        }
    },

    setup(props: { title: any }) {
        return {
            title: props.title
        }
    }
})
</script>
<style scoped lang="scss">
.chat-header-msg {
    height: 50px;
    position: absolute;
    width: 100%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #3F63F1;
    overflow: hidden;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    @media screen and (max-width: 768px) {
         height: 40px;
    }

    .title {
         color: #f2f2f2;
         margin-left: 12px;
    }

    .chat-settings {
         margin-right: 12px;
         color: #f2f2f2;
         font-size: 20px;
         cursor: pointer;
    }
}
</style>