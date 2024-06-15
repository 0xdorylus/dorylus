<template>
  <div class="create-page">
    <div class="create-content">
      <h2 class="intro">
        {{ $t("register_your_bot") }}
      </h2>

      <el-tabs type="border-card">
        <el-tab-pane label="Register Your Agent">
          <div class="select-app-body">
            <el-form
              :model="form"
              size="large"
              label-width="70px"
              label-position="top"
            >
              <el-form-item :label="$t('avatar')">
                <el-space>
                  <el-upload
                    :accept="'image/jpeg,image/jpg,image/png'"
                    class="avatar-uploader"
                    :headers="customHeaders"
                    :on-success="handleImageUploadSuccess"
                    action="https://api.dorylus.ai/upload"
                    :show-file-list="false"
                  >
                    <img v-if="form.avatar" :src="form.avatar" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon">
                      <Plus />
                    </el-icon>
                  </el-upload>
                </el-space>
              </el-form-item>

              <el-form-item :label="$t('club_name')">
                <el-input v-model="form.username" />
              </el-form-item>

              <el-form-item :label="$t('description')">
                <el-input v-model="form.intro" :rows="5" type="textarea" />
              </el-form-item>

              <el-form-item :label="$t('access_url')">
                <el-input v-model="form.access_url" :rows="2" type="textarea" />
              </el-form-item>
              <el-form-item :label="$t('home_url')">
                <el-input v-model="form.home_url" :rows="2" type="textarea" />
              </el-form-item>

              <el-form-item label="">
                <el-button type="primary" @click="register_agent">{{
                  $t("register_bot")
                }}</el-button>
                <!-- <span style="padding-left:2rem;">
              {{ $t("advance_setting_desc") }}
            </span> -->
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { Ref } from "vue";
const documentType: Ref<number> = ref(1); //文档类型
const documentUpload: Ref<string> = ref(".txt,.pdf,.md,.docx");
import { ElMessage } from "element-plus";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

import { useAuthStore } from "@/store/common";
const router = useRouter();

const { locale, t } = useI18n(); // 先调用此方法，然后再使用
const authStore = useAuthStore();
const generateForm = () => {
  return {
    username: "",
    intro: "",
    access_url: "",
    home_url:"",
    avatar: "https://s.dorylus.ai/s/bot.png",
    greeting: "",
  };
};
import { postUpload } from "@/api/controller/fs/postUpload.js";

import { postAgentCreateAgent } from "@/api/controller/agent/postAgentCreateAgent.js";
import { BotService } from "@/api/api";

const customHeaders = {
  "x-app": authStore.app,
  "x-auth": authStore.token,
};

const form = reactive(generateForm());
const handleChangeDocumentType = (type: number) => {
  documentUpload.value = type == 1 ? ".txt,.pdf,.md,.docx" : ".csv";
  documentType.value = type;
};

const handleImageUploadSuccess = (response, file, fileList) => {
  // 上传成功后的回调函数
  // response 是服务器返回的响应数据
  // file 是当前上传的文件对象
  // fileList 是当前已上传的文件列表

  // 假设服务器返回的响应数据中包含图片地址字段 imageUrl
  console.log(response);
  form.avatar = response.result.url;
};

const register_agent = async () => {
  let params = form;
  const ret = await BotService.registerAgent(params);
  if (ret.code != 0) {
    ElMessage({
      offset: 100,
      message: ret.msg,
      type: "warning",
    });
  } else {
    ElMessage({
      offset: 100,
      message: t("success"),
      type: "info",
    });
    router.push("/mybots");
  }
};
const to_advance_bot_setup = () => {
  ElMessage({
    offset: 100,
    message: t("wait_to_open"),
    type: "warning",
  });
};
</script>

<style scoped lang="scss">
.title_club {
  padding: 15;
  line-height: 150%;
}

.intro {
  text-align: center;
  font-size: 20px;
  margin: 16px 0;
}

.create-page {
  padding: 0 20px;
  overflow-y: auto;

  .create-content {
    width: 40%;
    max-width: 1280px;
    margin: 0 auto;

    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }
}

.select-app-body {
  margin-top: 20px;
  width: 100%;
}

.avatar-uploader .avatar {
  width: 100px;
  height: 100px;
  display: block;
}

.tips {
  color: #555;
  font-size: 12px;
  margin-left: 20px;
}

.select-app-type {
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: space-around;

  .select-app-type-select {
    cursor: pointer;
    border-radius: 8px;
    width: 50%;
    position: relative;
    margin: 0 10px;
    height: 100px;
    padding: 20px 10px;
    box-sizing: border-box;
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;

    @media screen and (max-width: 768px) {
      margin: 0;
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }
    }

    strong {
      font-weight: bold;
      font-size: 18px;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }

    .des {
      color: #7f7d7d;
      font-size: 0.8rem;
      margin-top: 25px;
      line-height: 1rem;

      @media screen and (max-width: 768px) {
        margin-top: 15px;
      }
    }
  }
}

.is-active {
  background-color: #e7f2fe !important;
  border: 1px solid #1c64f2 !important;
}

.upload-demo {
  width: 100%;
}

.select-upload-type {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;

  .select-upload-type-select {
    cursor: pointer;
    border-radius: 8px;
    width: 50%;
    position: relative;
    padding: 3px 7px;
    margin: 10px;
    height: 75px;
    box-sizing: border-box;
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;

    @media screen and (max-width: 768px) {
      margin: 0;
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }
    }

    .upload-des {
      color: #7f7d7d;
      font-size: 0.6rem;
      line-height: 20px;
    }
  }
}

.down-csv {
  cursor: pointer;
  color: #1c64f2;
}
</style>
<style>
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
</style>