<template>
  <el-scrollbar>

  
    <el-row style="height:50px;">
    <div class="chat-header-msg">
        <div class="title" style="font-size:28px;">
          <el-icon @click="$router.go(-1);">
            <Back />
          </el-icon>
        </div>
        <div class="title">{{ copilot.name }}</div>
        <div class="chat-settings">
          <el-icon @click="" style="margin-right:1rem;">
            <Share />
          </el-icon>

        </div>
      </div>
    </el-row>

    <div class="embeddingApp">

   





      <el-form label-position="top" size="large" :model="form" label-width="80">
        <el-row :gutter="10">
          <el-col :xl="12" :lg="12" :md="12" :sm="24" style="margin-bottom: 10px;">
            <el-card shadow="hover">
              <template #header>
                <div class="card-header">
                  <el-space>
                    <h1>{{ $t("base_stat") }}</h1>
                  </el-space>
                  <img src="@/assets/icons/save.svg" class="save-icon" @click="saveCopilot" />

                </div>
              </template>

            </el-card>
          </el-col>



          <el-col :xl="12" :lg="12" :md="12" :sm="24" style="margin-bottom: 10px;">
            <el-card shadow="hover">
              <template #header>
                <div class="card-header">
                  <el-space>
                    <h1>{{ $t("order_stat") }}</h1>
                  </el-space>
                  <img src="@/assets/icons/save.svg" class="save-icon" @click="saveCopilot" />

                </div>
              </template>

            </el-card>
          </el-col>


          <el-col :xl="12" :lg="12" :md="12" :sm="24" style="margin-bottom: 10px;">
            <el-card shadow="hover">
              <template #header>
                <div class="card-header">
                  <el-space>
                    <h1>{{ $t('msg_stat') }}</h1>
                  </el-space>
                  <img src="@/assets/icons/save.svg" class="save-icon" @click="saveCopilot" />

                </div>
              </template>

            </el-card>
          </el-col>

          <el-col :xl="12" :lg="12" :md="12" :sm="24" style="margin-bottom: 10px;">
            <el-card shadow="hover">
              <template #header>
                <div class="card-header">
                  <el-space>
                    <h1>{{ $t("team_stat") }}</h1>
                  </el-space>

                  <img src="@/assets/icons/save.svg" class="save-icon" @click="saveCopilot" />

                </div>
              </template>


            </el-card>
          </el-col>


        </el-row>
      </el-form>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { BotService } from "@/api/api";
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n() // 先调用此方法，然后再使用
import { useClipboard } from "@vueuse/core";
import { ElMessage, ElMessageBox } from 'element-plus';
// import { saveIcon} from "@/assets/icons/save.svg";

const handleCopy = (Key: string) => {
  const source: Ref<string> = ref(Key)
  const { copy, copied, isSupported } = useClipboard({ source })
  if (!isSupported) return ElMessage.error(t('no_brower_support'))
  copy(Key)
  if (copied) {
    ElMessage.success(t('copy_success'))
  }
}
import { useAuthStore } from '@/store/common'

const authStore = useAuthStore()

const customHeaders = {
  "x-app": authStore.app,
  "x-auth": authStore.token
}

interface CopliotFace {
  assistant_id: string
  name: string
  description: string
  greeting: string
  tempeature: Number
  avatar: string
  code: string
  share_url: string
  visiablity: boolean
  user_prompt: string
  temperature: Number,


}
const copilot: Ref<CopliotFace> = ref(
  {
    assistant_id: '',
    name: '',
    description: '',
    greeting: '',
    tempeature: 0,
    avatar: '',
    code: '',
    share_url: '',
    visiablity: false,
    user_prompt: "",
    temperature: 60,
  }
);


const toggleBotVisiablity = async (assistant_id: string) => {

}
const dealUrl = async () => {

}
const upload = async () => {

}

const handleImageUploadSuccess = (response: any, file: any, fileList: any) => {
  // 上传成功后的回调函数
  // response 是服务器返回的响应数据
  // file 是当前上传的文件对象
  // fileList 是当前已上传的文件列表

  // 假设服务器返回的响应数据中包含图片地址字段 imageUrl
  console.log(response)
  copilot.value.avatar = response.result.url;
}

const router = useRouter()
const assistantId = router.currentRoute.value.query.code

const formatTooltip = (val: number) => {
  return val / 100
}

const saveCopilot = async () => {
  let ret = await BotService.saveCopilot(copilot.value);
  console.log(ret)
  if (ret.code === 0) {
    ElMessage.success(t("success"))
  } else {
    ElMessage.success(t("fail"))
  }

}


onMounted(() => {
  getCopilot(assistantId);
});
const getCopilot = async (assistant_id: string) => {

  let params = { assistant_id: assistant_id }
  let ret = await BotService.getCopilot(params);
  console.log(ret)
  if (ret.code === 0) {
    copilot.value = ret.result
  } else {

  }
}
const generateForm = () => {
  return {
    apply_name: "",
    apply_desc: "",
    apply_category: "",
    intro: "",
    apply_avatar: "https://s.dorylus.ai/s/bot.png",
    apply_type: "",
    disclosure: false,
    desc: "",
    code: "",
    temperature: 50,
  }
}
const form = reactive(generateForm())
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


.embeddingApp {
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
}

.save-icon {
  --color: inherit;
  height: 1em;
  width: 1em;
  line-height: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  color: var(--color);
  font-size: inherit;
  float: right;
}

.input-edit-app-name {
  max-width: 300px;
}

.avatar-uploader .avatar {
  width: 100px;
  height: 100px;
  display: block;
}

.el-card {
  min-height: 100% !important;
}

.temperature {
  display: flex;
  align-items: center;

  i {
    font-size: 14px;
    margin-left: 10px;
    color: #000;
  }
}

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  text-align: center;
}

.slider-wi {
  width: 60%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
</style>