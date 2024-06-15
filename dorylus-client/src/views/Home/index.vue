<template>
  <el-scrollbar wrap-class="app-main-scroll-wrap">
    <div class="home-page" id="home-page">
      <!-- <h1 class="intro">
        {{ $t("welcome") }}
      </h1> -->
      <div class="desc">
        {{ $t("slogon") }}
        <!-- <el-carousel height="50px">
          <el-carousel-item v-for="item in slogonList" :key="item">
            <h3 class="small justify-center" text="2xl">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel> -->
      </div>
     <div class="home-category">
        <div class="home-all-header">
          <button @click="activeTag(index)" class="el-button home-all-header-btn"
            :class="index == activeIndex ? 'is-select' : ''" v-for="item, index in categorys">
            <span>{{ item.name }}</span>
          </button>
        </div>
      </div> 


      <div class="home-category">
        <div class="home-all-header">

          <h2 class="subTitle">
            {{ $t("agents") }} </h2>
        </div>
        <div style="margin-right:3rem;">
          <el-icon @click="registerAgent">
            <Plus />
          </el-icon>
        </div>
      </div>

      <div class="home-all-content-max" v-loading="loadingBot" element-loading-text="Loading..."
        element-loading-spinner="svg"
        element-loading-svg-view-box="-10, -10, 50, 50"
        element-loading-background="rgba(122, 122, 122, 0.8)">
        <div class="home-all-content">
          <div class="home-all-content-box" v-for="bot in agentList" :key="bot.id" @click="toCopilot(bot.id)">
            <div class="home-content-img">
              <div class="home-content-img-box">
                <img class="home-all-content-box-img" :src="bot.avatar">
              </div>
            </div>
            <div class="home-content-discrpit">
              <p class="home-content-discrpit-title"></p>
              <el-tooltip :content="bot.intro" placement="top-start">
                <p class="home-content-prompt-one">
                  {{bot.intro}}          
                  <!-- <el-tag v-for="tag in bot.tag_list"> {{ tag }} </el-tag> -->
                </p>
              </el-tooltip>
              <div class="home-content-name">
                <div class="home-content-name-content">

                  <div>@{{ bot.username }}</div>

                </div>
                <div>{{ bot.ask_counter }}</div>
                <div v-if="bot.is_remote">
                  <el-tag>Remote</el-tag>
                </div>
                <div v-else>
                  
                  <el-tag>Local</el-tag>
                </div>


              </div>
            </div>
          </div>
        </div>
        <!-- <div class="more-btn">
          <div class="pa">
            <el-button type="primary" @click="isLoading = true" text :loading="isLoading">
              {{ isLoading ? 'Loading' : 'Load more' }}
            </el-button>
          </div>
        </div> -->
      </div>






    </div>
    <el-backtop :visibility-height="100" target=".app-main-scroll-wrap" />
  </el-scrollbar>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';

import { reactive, ref, onMounted } from 'vue';
import { useClipboard } from '@vueuse/core';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
const activeIndex = ref(0)

const loadingBot = ref(true)


const handleCopy = (Key: string) => {
  const source: Ref<string> = ref(Key)
  const { copy, copied, isSupported } = useClipboard({ source })
  if (!isSupported) return ElMessage.error('浏览器不支持复制')
  copy(Key)
  if (copied) {
    ElMessage.success('复制成功')
  }
}

const registerAgent = () => {
  router.push("/registerAgent")
}
const createDataset = () => {
  router.push("/dataset")
}

onMounted(() => {
  getHomeBotList();

});

interface BotListFace {
  id: string
  username: string
  avatar: string
  intro: string
  tag: string
  type: string
  ask_counter: number
  share_url: string
  tag_list: string[]
  is_remote :boolean
}


const agentList: Ref<BotListFace[]> = ref([])



import { postAgentAgentList } from '@/api/controller/agent/postAgentAgentList';
const getHomeBotList = async () => {
  let params = {
    "page":1
  }
  let ret = await postAgentAgentList(params);

  if (ret.code == 0) {
    agentList.value = ret.result.list;
    loadingBot.value = false
  }
  else {
    agentList.value = [];
    loadingBot.value = false
  }

  console.log(agentList.value)
}



const categorys = reactive([
  // {
  //   name: "All",
  //   value: 'all'
  // },
  // {
  //   name: "Tools",
  //   value: 'tools'
  // },
  // {
  //   name: "Dataset",
  //   value: 'dataset'
  // },
  // {
  //   name: "Prompts",
  //   value: 'prompt'
  // },
])
const activeTag = (index: number) => {
  console.log(index)
  activeIndex.value = index;
}
const router = useRouter()

const toCopilot = (id: string) => {
  router.push("/copilot/"+id)

}

</script>

<style scoped lang="scss">
.home-page {
  .intro {
    text-align: center;
    font-size: 40px;
    font-family: 'Staatliches', cursive;
    margin: 16px 0;
  }

  .subTitle {
    text-align: center;
    font-size: 40px;
    font-family: 'Staatliches', cursive;
    margin: 16px 0;
  }


  .desc {
    text-align: center;
    font-size: 32px;
    font-family: 'Staatliches', cursive;
    margin: 16px 0;
  }

  .home-category {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 20px;
    align-items: center;

    .home-all-header {
      /* height: 40px; */
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 10px;
      width: 100%;
      margin: 0 auto;

      .el-button {
        margin-right: 12px !important;
        margin-left: 0 !important;

        span {}

        &:last-child {
          margin-right: 0 !important;
        }
      }

      .home-all-header-btn {
        color: #000;
        background-color: #fafafa;
        border: 1px solid #eff0f0;
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 10px;

        span {
          display: inline-flex;
          align-items: center;
        }
      }

      .is-select {
        background-color: #eff0f0 !important;
      }

    }
  }

  .home-all-content-max {

    .home-all-content {
      display: grid;
      grid-template-columns: repeat(7, 1fr);

      @media screen and (max-width: 1536px) {
        grid-template-columns: repeat(5, 1fr);
      }

      @media screen and (max-width: 1280px) {
        grid-template-columns: repeat(4, 1fr);
      }

      @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media screen and (max-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
      }


      gap: 20px;

      .home-all-content-box {
        border-radius: 15px;
        overflow: hidden;
        position: relative;
        border: 1px solid #eff0f0;

        .home-content-img {
          width: 100%;
          overflow: hidden;
          display: flex;
          height: 170px;
          align-items: center;
          justify-content: center;

          .home-content-img-box {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            .home-all-content-box-img {
              margin:0.5rem;
              width: 80%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.3s ease;

              &:hover {
                transform: scale(1.2);
                transition: all .3s ease-in-out;
              }
            }
          }
        }

        .home-content-discrpit {
          width: 100%;
          height: 100px;
          background-color: #fff;
          box-sizing: border-box;
          padding: 8px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-around;

          .home-content-discrpit-title {
            font-size: 20px;
            font-weight: 700;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .home-content-prompt-one {
            font-size: .8rem;
            width: 130px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            -o-text-overflow: ellipsis;
            color: #878786;
            line-height: 24px;
          }


          .home-content-name {
            width: 100%;
            display: flex;
            align-items: center;
            font-size: 1rem;
            justify-content: space-between;

            .home-content-name-content {
            
              width: 100px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              -o-text-overflow: ellipsis;
         
            }
          }
        }
      }
    }
  }

}

.more-btn {
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: center;

  .pa {
    display: flex;
    align-items: center;
  }
}
</style>