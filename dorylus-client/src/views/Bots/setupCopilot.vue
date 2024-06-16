<template>
  <el-scrollbar>
    <el-row style="height:50px;">
    <div class="chat-header-msg">
        <div class="title" style="font-size:28px;">
          <el-icon @click="$router.go(-1);">
            <Back />
          </el-icon>
        </div>
        <div class="title">{{ copilot.username }}</div>
        <div class="chat-settings">
         

        </div>
      </div>
    </el-row>

    <div class="embeddingApp">
      <!-- <el-form label-position="top" size="large" :model="form" label-width="80"> -->
        <el-row :gutter="10">
          <el-col :xl="12" :lg="12" :md="12" :sm="24" style="margin-bottom: 10px;">
            <el-card shadow="hover">
              <template #header>
                <div class="card-header">
                  <el-space>
                    <h1>{{ $t("base_info") }}</h1>
                  </el-space>
                  <img src="@/assets/icons/save.svg" class="save-icon" @click="saveBase"/>

                </div>
              </template>
              <el-form-item :label="$t('copilot_name')">
                <el-input class="input-edit-app-name" v-model=copilot.username />
              </el-form-item>
              <!-- <el-form-item :label="$t('app_code')">
              
              {{copilot.code}}
              </el-form-item> -->
              <el-form-item :label="$t('avatar')">
                <el-upload :accept="'image/jpeg,image/jpg,image/png'" class="avatar-uploader" :headers="customHeaders"
                  :on-success="handleImageUploadSuccess" action="https://api.dorylus.ai/upload"
                  :show-file-list="false">
                  <img v-if="copilot.avatar" :src="copilot.avatar" class="avatar" />
                  <el-icon v-else class="avatar-uploader-icon">
                    <Plus />
                  </el-icon>
                </el-upload>
                <!-- <el-button type="primary">{{ $t('logo') }}</el-button> -->
              </el-form-item>
              <el-form-item :label="$t('description')">
                <el-input v-model="copilot.intro" :rows="3" type="textarea" />


              </el-form-item>

              <!-- <el-form-item>
                <el-button type="danger">{{$t('drop_copilot')}}</el-button>
              </el-form-item> -->
            </el-card>
          </el-col>



          <el-col :xl="12" :lg="12" :md="12" :sm="24" style="margin-bottom: 10px;">
            <el-card shadow="hover">
              <template #header>
                <div class="card-header">
                  <el-space>
                    <h1>{{ $t("show_in_hub") }}</h1>
                  </el-space>
                  <img src="@/assets/icons/save.svg" class="save-icon"  @click="saveCopilot"/>

                </div>
              </template>
    
              <el-form-item :label="$t('is_public')">
                <el-switch size="large" v-model="copilot.visiablity" inline-prompt :active-text="$t('public')"
                  :inactive-text="$t('private')" @click="toggleBotVisiablity(copilot.agent_id)" />
              </el-form-item>

              <el-form-item :label="$t('greeting')">
                <el-input v-model="copilot.greeting" />
              </el-form-item>
            </el-card>
          </el-col>


          <el-col :xl="12" :lg="12" :md="12" :sm="24" style="margin-bottom: 10px;">
            <el-card shadow="hover">
              <template #header>
                <div class="card-header">
                  <el-space>
                    <h1>{{ $t('model_setup') }}</h1>
                  </el-space>
                  <img src="@/assets/icons/save.svg" class="save-icon"  @click="saveLLM"/>

                </div>
              </template>









              <el-form-item>
                <template #label>
                  <div class="temperature">
                    <span>{{ $t('temperature') }}</span>
                    <el-tooltip class="box-item" effect="dark" :content="$t('temperature_desc')" placement="top-start">
                      <el-icon>
                        <InfoFilled />
                      </el-icon>
                    </el-tooltip>
                  </div>
                </template>
                <div class="slider-wi">
                  <el-slider v-model="copilot.temperature" :format-tooltip="formatTooltip" :step="10" />
                </div>
              </el-form-item>

              <el-form-item :label="$t('user_prompt')">
                <el-input type="textarea" v-model="copilot.user_prompt" :rows="5" :placeholder='$t("prompt_desc")' />
              </el-form-item>


            </el-card>
          </el-col>

          <el-col :xl="12" :lg="12" :md="12" :sm="24" style="margin-bottom: 10px;">
            <el-card shadow="hover">
              <template #header>
                <div class="card-header">
                  <el-space>
                    <h1>{{ $t("data_setup") }}</h1>
                  </el-space>

                  <img src="@/assets/icons/save.svg" class="save-icon"  @click="saveCopilot"/>

                </div>
              </template>

              <!-- <el-form-item :label="$t('urls')">
                <el-input type="textarea" :rows="5" :placeholder='$t("url_source_desc")' />
              </el-form-item> -->

              <el-upload   class="upload-kb" drag
                :headers="customHeaders"
                :on-success="handleKnowledgeUploadSuccess" action="https://api.dorylus.ai/private_upload"
                :show-file-list="true"
                multiple>
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">
                  Drop file here or <em>click to upload</em>
                </div>
                <template #tip>
                  <div class="el-upload__tip">
                    pdf/Text files with a size less than 500kb
                  </div>
                </template>
              </el-upload>


              <el-button type="primary" size="small" @click="dealUrl()">{{ $t('begin_deal_url')
              }}</el-button>
              <!-- <el-button type="primary" size="small" @click="upload()">{{ $t('begin_upload')
              }}</el-button> -->

            </el-card>
          </el-col>


        </el-row>
      <!-- </el-form> -->
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

const kbFiles = ref([])
const llm = ref("gpt-3.5")


interface CopliotFace {
  agent_id: string
  username: string
  main_model: string
  greeting: string
  avatar: string
  code: string
  share_url: string
  visiablity: boolean
  user_prompt: string
  temperature: number,
  intro:string



}
const copilot: Ref<CopliotFace> = ref(
  {
    agent_id: '',
    intro:"",
    username: '',
    main_model: 'gpt-3.5',
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


const toggleBotVisiablity = async (agent_id: string) => {

}
const dealUrl = async () => {
  let ret = await BotService.dealUrl({
    id:agent_id,
    urls:kbFiles.value,
  });
  console.log(ret)
  if (ret.code === 0) {
    ElMessage.success(  t("success"))
  } else {
    ElMessage.success(  t("fail"))
  }
}
const upload = async () => {

}

const handleImageUploadSuccess = (response:any, file:any, fileList:any) => {
  // 上传成功后的回调函数
  // response 是服务器返回的响应数据
  // file 是当前上传的文件对象
  // fileList 是当前已上传的文件列表

  // 假设服务器返回的响应数据中包含图片地址字段 imageUrl
  console.log(response)
  copilot.value.avatar = response.result.url;
}

const handleKnowledgeUploadSuccess = (response:any, file:any, fileList:any) => {
  // 上传成功后的回调函数
  // response 是服务器返回的响应数据
  // file 是当前上传的文件对象
  // fileList 是当前已上传的文件列表

  // 假设服务器返回的响应数据中包含图片地址字段 imageUrl
  console.log(response)
  kbFiles.value.push(response.result.url);
}




const router = useRouter()
const agent_id = router.currentRoute.value.query.code

const formatTooltip = (val: number) => {
  return val / 100
}

const saveCopilot = async () => {
  let ret = await BotService.saveCopilot(copilot.value);
  console.log(ret)
  if (ret.code === 0) {
    ElMessage.success(  t("success"))
  } else {
    ElMessage.success(  t("fail"))
  }
  
}
const saveBase = async () => {
  let ret = await BotService.agentSaveBase({id:agent_id, avatar:copilot.value.avatar,username:copilot.value.username, intro:copilot.value.intro});
  console.log(ret)
  if (ret.code === 0) {
    ElMessage.success(  t("success"))
  } else {
    ElMessage.success(  t("fail"))
  }
  
}

const saveLLM = async () => {
  let ret = await BotService.agentSaveLLM({
    id:agent_id,
    main_model:llm.value,
    temperature:copilot.value.temperature,
    user_prompt:copilot.value.user_prompt,

  });
  console.log(ret)
  if (ret.code === 0) {
    ElMessage.success(  t("success"))
  } else {
    ElMessage.success(  t("fail"))
  }
  
}

onMounted(() => {
  getCopilot(agent_id);
});

const getCopilot = async (agent_id: string) => {

  let params = { id: agent_id }
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