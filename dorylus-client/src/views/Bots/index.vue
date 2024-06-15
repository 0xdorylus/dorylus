<template>
  <div class="bots-page">
    <ecl-row>
      <div class="bots-title">
        <el-icon>
          <Operation />
        </el-icon>
        {{ $t("create_op") }}
      </div>
    </ecl-row>

    <el-row :gutter="10">
      <el-col :xl="6" :lg="8" :md="12" :sm="24" >

        <el-button type="primary" @click="createBot">{{$t("create_bot")}}</el-button>
        <!-- <el-button type="primary">{{$t("create_group")}}</el-button>
        <el-button type="primary">{{$t("create_prompt")}}</el-button> -->
        <!-- <el-button type="primary"  @click="mintNft">{{$t("Mint_NFT")}}</el-button> -->

        <!-- <el-button type="primary"  @click="mintDorylusNft">{{$t("mintDorylusNft")}}</el-button> -->
        <!-- <el-button type="primary">{{$t("create_nft")}}</el-button>
        <el-button type="primary">{{$t("create_tradebot")}}</el-button> -->

    
      </el-col>
    </el-row>
    <el-divider />


    <el-row>
      <div class="bots-title">
        <el-icon @click="createBot">
          <Plus />
        </el-icon>
        {{ $t("mybots") }}
      </div>
    </el-row>
    <el-row :gutter="10"  v-loading="loadingBot" element-loading-text="Loading..." :element-loading-spinner="svg"
      element-loading-svg-view-box="-10, -10, 50, 50" element-loading-background="rgba(122, 122, 122, 0.8)">
      <el-col :xl="6" :lg="8" :md="12" :sm="24" v-for="item in botList" :key="item.id">
        <el-card shadow="hover" class="bots-card">
          <div class="card-content">
            <div class="header">
              <div class="t-1-r">
                <div class="icon-box">
                  <img :src="item.avatar" class="icon-box-img">
                </div>
                <div class="item-name">{{ item.username }}</div>
              </div>
              <div class="my-app-content">
         


                <el-icon class="no-inherit" @click="handleCopy(item.share_url)">
                  <Share />
                </el-icon>
                <el-icon class="no-inherit" @click="handleViewBots(item.id)">
                  <Setting />
                </el-icon>
                <el-icon class="no-inherit" @click="handleBotStat(item.id)">
                  <Histogram />
                </el-icon>
              </div>
            </div>
            <div class="code">
              <el-row>
                <el-col :span="6">
                  <el-statistic :title="$t('uv')" :value="item.uv" />
                </el-col>
                <el-col :span="6">
                  <el-statistic :title="$t('ask_num')" :value="item.chat_num" />
                </el-col>
                <el-col :span="6">
                  <el-statistic :title="$t('revenue')" :value="item.revenue" />
                </el-col>
                <el-col :span="6">
                  <el-statistic :title="$t('consumption')" :value="item.consumption" />
                </el-col>
              </el-row>
              <!-- <span>Greeting: {{ item.greeting }}</span>
              <span>Greeting: {{ item.description }}</span>
              <span>Replies: {{ item.num }}</span>
              <span>Replies: {{ item.uv }}</span> -->

            </div>
            <div class="footer">
              <el-space>
                <el-tag>{{ item.main_model }}</el-tag>

                <!-- <el-tag>{{ item.token }}</el-tag> -->

              </el-space>
              <div>
                <el-button size="small"  @click="comingsoon">{{ $t("quick_link") }}</el-button>
                <el-button type="primary" size="small" @click="toCopilot(item.id)">{{ $t('begin_chat')
                }}</el-button>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>




  </div>
</template>

<script setup lang="ts">
import { BotService } from "@/api/api";
import Mock from "mockjs"
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { ref, onMounted } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import type { Ref } from 'vue';
import { useI18n } from 'vue-i18n'
import { useClipboard } from "@vueuse/core";
const handleCopy = (Key: string) => {
  const source: Ref<string> = ref(Key)
  const { copy, copied, isSupported } = useClipboard({ source })
  if (!isSupported) return ElMessage.error(t('no_brower_support'))
  copy(Key)
  if (copied) {
    ElMessage.success(t('copy_success'))
  }
}
const { locale, t } = useI18n() // 先调用此方法，然后再使用
import {postAgentMyAgentList} from "@/api/controller/agent/postAgentMyAgentList.js";

interface BotListFace {
  id: string
  username: string
  avatar: string
  description: string
  token: string
  chat_num: number
  consumption: number
  visiablity: boolean
  revenue: number
  uv: number
  main_model: string
  code: string
  share_url: string
}

const value1 = ref(true)

const BotsData = reactive(Mock.mock({
  "list|10": [
    {
      "name": "@name",
      "img": "@image('200x100', '#50B347', '#FFF', 'Mock.js')",
      "code": "@string('lower', 5, 10)",
      'id|+1': 1,
      'public': '@boolean'
    }
  ]
}).list)
    const botList: Ref<BotListFace[]> = ref([])

const loadingBot = ref(true)

const router = useRouter()
const handleViewBots = (code: string) => {
  router.push('/setupCopilot?code=' + code)
}
const handleBotStat = (code: string) => {
  router.push('/stat?code=' + code)
}
const mintDorylusNft = ()=>{
  router.push('/mintDorylusNft')
}

const comingsoon=()=>{
  ElMessage({
    message: 'Coming soon',
    type: 'info'
  });

}
const toggleBotVisiablity = async (id: string) => {
  let params = {
    assistant_id: id
  }

  ElMessageBox.confirm(
    t("toggleBotVisiablity"),
    'Warning',
    {
      confirmButtonText: t("confirm"),
      cancelButtonText: t("cancle"),
      type: 'warning',
    }
  )
    .then(async () => {
      let ret = await BotService.toggleBotVisiablity(params);
      if (ret.code == 0) {
        ElMessage.success(t("success"))
      } else {
        ElMessage.error(t("fail"))
      }
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: t("cancle"),
      })
    })


}
onMounted(() => {
  getMyBots();
});

const createBot = () => {
  router.push('/createAgent')
}
const mintNft = ()=>{
  router.push('/mintNft')

}
const getMyBots = async () => {

  let params = {}
  let ret = await postAgentMyAgentList(params);
  if (ret.code == 0) {
    botList.value = ret.result.list
    loadingBot.value = false

  } else {
    botList.value = []
    loadingBot.value = false

  }

}
const toCopilot = (assistant_id:string) => {
  router.push('/copilot/' + assistant_id)
}


</script>

<style scoped lang="scss">
.bots-page {
  overflow-x: hidden;

  @media screen and (max-width:768px) {
    padding: 10px;
  }

  .bots-title {
    font-size: 18px;
    padding: 0.2rem;
    font-weight: bold;
    margin: 1rem;
  }

  .bots-card {
    margin-bottom: 10px;
    cursor: pointer;



    .card-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: 225px;

      .header {
        align-items: center;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .t-1-r {
          display: flex;
          align-items: center;
          font-size: 1.1rem;
          font-weight: 700;

          .icon-box {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgb(204, 251, 241);
            border-radius: 8px;
            margin-right: 10px;
            overflow: hidden;

            .icon-box-img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .item-name {
            width: 6rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }

        .my-app-content {
          display: flex;
          align-items: center;

          .no-inherit {
            font-size: 1.6rem;
            color: rgba(99, 98, 98, 0.945);
            margin: 0px 8px;
            cursor: pointer;
          }
        }
      }

      .code {
        color: rgb(154, 151, 151);
        font-size: 0.9rem;
        cursor: pointer;

        span {}
      }

      .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 12px;

        div {}
      }
    }
  }
}
</style>