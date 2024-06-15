<template>
  <el-scrollbar>
    <div class="settings-page">
      <el-card shadow="hover" style="margin-bottom: 20px;">
        <template #header>
          <div class="card-header">
            <el-space>
              <h1>{{ $t("ucenter") }}</h1>
              <!-- <el-button size="small">修改</el-button> -->
            </el-space>

            <div @click="logout" class="logout">
              {{ t("logout") }}
              <svg-icon name="logout" size="18"></svg-icon>
            </div>

          </div>
        </template>
        <el-form>
          <el-form-item :label="$t('avatar')">
            <el-avatar size="large" :src="userinfo.avatar"></el-avatar>
          </el-form-item>
          <el-form-item :label="$t('username')">
            <span>{{ userinfo.username }}</span>
          </el-form-item>
          <el-form-item :label="$t('verified')">
            <span>{{ userinfo.verified }}</span>
          </el-form-item>

          <el-form-item :label="$t('balance')">
            <span>{{ userinfo.num }} Credit</span>
            <el-space>
              <el-button @click="to_wallet" style="margin-left: 20px;" type="primary">{{$t('wallet')}}</el-button>
              <!-- <el-button>计费规则</el-button> -->
            </el-space> 
          </el-form-item>
        </el-form>
      </el-card>
      <!-- <el-card shadow="hover" style="margin-bottom: 20px;">
        <template #header>
          <div class="card-header">
            <h1>充值记录</h1>
            <el-icon>
              <Refresh />
            </el-icon>
          </div>
        </template>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="id" label="订单号" align="center" />
          <el-table-column prop="time" label="时间" align="center" width="180" />
          <el-table-column prop="score" label="充值积分" align="center" />
          <el-table-column prop="money" label="充值金额" align="center" />
        </el-table>
        <div class="pa">
          <el-pagination background layout="prev, pager, next" :total="20" />
        </div>
      </el-card>
      <el-card shadow="hover" style="margin-bottom: 20px;">
        <template #header>
          <div class="card-header">
            <h1>使用记录</h1>
            <el-icon>
              <Refresh />
            </el-icon>
          </div>
        </template>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="time" label="使用时间" align="center" width="180" />
          <el-table-column prop="source" label="来源" align="center" width="180" />
          <el-table-column prop="score" label="类型" align="center" />
          <el-table-column prop="code" label="appCode" align="center" width="180" />
          <el-table-column prop="model" label="底层模型" align="center" width="180" />
          <el-table-column prop="money" label="TOKEN长度" align="center" width="180" />
          <el-table-column prop="score" label="消耗积分" align="center" />
        </el-table>
        <div class="pa">
          <el-pagination background layout="prev, pager, next" :total="20" />
        </div>
      </el-card> -->


  
 

      
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, Ref } from 'vue';
import Mock from 'mockjs';
import { ElMessage, ElMessageBox } from 'element-plus'
import { useI18n } from 'vue-i18n';
import { UserService } from '@/api/api'
import { useRouter } from 'vue-router';


const { locale, t } = useI18n() // 先调用此方法，然后再使用
import {postAgentMyAgentList} from "@/api/controller/agent/postAgentMyAgentList.js";

interface BotListFace {
  assistant_id: string
  name: string
  avatar: string
  description: string
  token: string
  num: number
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
const tableData = reactive(Mock.mock({
  'list|10': [
    {
      'id|+1': 1,
      time: '@datetime',
      score: '@integer(100, 1000)',
      money: '@float(100, 1000, 2, 2)',
      source: "WEB",
      model: "gpt-3.5-turbo-0613",
      code: "interviewer"
    }
  ]
}).list)
const form = reactive({
  name: 'uLink989080',
  avatar: '',
  score: 459
})
interface UserInfo {
  username: string
  avatar: string
  num: number
  uid: string,
  address: string
  verified: boolean
}
onMounted(() => {
  console.log('mounted')
  // getUserInfo();
  
})
const userinfo: Ref<UserInfo> = ref({
  username: '',
  avatar: '',
  num: 0,
  uid: '',
  address: '',
  verified: false,
  pid: "",
  level: 0,
})

const getUserInfo = async () => {
  let ret = await UserService.getUserinfo();
  if (ret.code == 0) {
    userinfo.value = ret.result;
  }
}

const to_wallet = () => {
  router.push('/wallet')
}
const logout = async () => {
  ElMessageBox.confirm(
    t('logout_info'),
    'Warning',
    {
      confirmButtonText: t('confirm'),
      cancelButtonText: t('cancle'),
      type: 'warning',
    }
  )
    .then(async () => {
      await UserService.logout({})
      ElMessage({
        type: 'success',
        message: t('logout_succ'),
      })
      router.push('/')
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: t('logout_fail'),
      })
    })
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
.settings-page {
  @media screen and (max-width:768px) {
    padding: 10px;
  }

  .pa {
    margin-top: 20px;
    display: flex;
    flex-direction: row-reverse;
  }

}

.card-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  i {
    cursor: pointer;
  }
}

.logout {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  svg {
    margin-left: 8px;
  }
}
</style>