<template>
  <el-scrollbar>
   
    <div class="settings-page">
      <div style="height=50px;">
        <div class="chat-header-msg">
          <div class="title" style="font-size: 28px"></div>
          <div class="title">{{ $t("wallet") }}</div>
          <div class="chat-settings">
            <el-icon @click="logout">
              <svg-icon name="logout" size="18"></svg-icon>
            </el-icon>
          </div>
        </div>
      </div>

      <el-card shadow="hover" style="margin-bottom: 20px">
        <template #header>
          <div class="card-header">
            <el-space>
              <h1>{{ $t("mywallet") }}</h1>
            </el-space>
          </div>
        </template>

        <el-table :data="walletItems" style="width: 100%">
          <el-table-column prop="token" label="Token" width="200px" />
          <el-table-column prop="amount" label="Amount" width="200px" />
          <!-- <el-table-column prop="frozen" label="Frozen" /> -->
        </el-table>

        <div class="center-btn">
          <el-button
            @click="getDepositAddress"
            style="margin-left: 20px"
            type="primary"
            >{{ $t("deposit") }}</el-button
          >
          <el-button style="margin-left: 20px" type="primary">{{
            $t("withdraw")
          }}</el-button>
        </div>
      </el-card>

      <!-- 设置面板 -->
      <el-dialog
        v-model="dialogVisible"
        :title="t('depoist')"
        :width="dialogWidth"
      >
        <div class="share-bot">
          <div class="title">
          {{ t("depoist_desc") }}
        </div>

          <div>
            <div class="item">
              <div class="title">
              </div>
              <div class="desc"> </div>
            </div>
            <div class="title">MainChain</div>
            <div>
              <el-select v-model="mainchain" placeholder="Select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                />
              </el-select>
            </div>

            <canvas style="display: block; margin: 0 auto" id="canvas"></canvas>
            <div class="title">
              <!-- {{ t("depoist_desc") }} -->
              <div @click="handleCopy(depositAddress)">
                {{ depositAddress
                }}<el-icon>
                  <CopyDocument />
                </el-icon>
              </div>
            </div>
          </div>
        </div>
        <el-divider />
      </el-dialog>

      <el-card shadow="hover" style="margin-bottom: 20px">
        <template #header>
          <div class="card-header">
            <h1>{{ $t("cashflow") }}</h1>
            <el-icon>
              <Refresh />
            </el-icon>
          </div>
        </template>
        <el-table :data="cashflow" style="width: 100%">
          <el-table-column prop="id" label="OrderNo" align="center" />
          <el-table-column prop="amount" label="Amount" align="center" />
          <el-table-column prop="token" label="Token" align="center" />
          <el-table-column
            prop="create_at"
            label="Time"
            align="center"
            width="180"
          />
        </el-table>
        <div class="pa">
          <el-pagination background layout="prev, pager, next" :total="20" />
        </div>
      </el-card>
    </div>



    
  </el-scrollbar>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, watch } from "vue";
import Mock from "mockjs";
import { ElMessage, ElMessageBox } from "element-plus";
import { useI18n } from "vue-i18n";
import type { ComputedRef, Ref } from "vue";
import { useWindowSize } from "@vueuse/core";

import { handleCopy } from "@/utils/common";
const { t } = useI18n();
import { UserService } from "@/api/api";
const dialogWidth: Ref<string> = ref("30%");
const dialogVisible: Ref<boolean> = ref(false);
import QRCode from "qrcode";

const walletItems = ref([]);
//   {
//     token: "DLS",
//     amount: 0,
//     frozen: 0,
//   },
//   {
//     token: "USDT",
//     amount: 0,
//     frozen: 0,
//   },
// ]);
const cashflow = ref([]);

const tableData = Mock.mock({
  "list|10": [
    {
      id: "@increment",
      create_at: "@datetime",
      score: "@integer(100, 1000)",
      money: "@integer(100, 1000)",
    },
  ],
}).list;

const depositAddress = ref("");
const title = "Wallet";
const mainchain = ref("BSC");
const options = [
  {
    value: "BSC",
    label: "BNB Chain",
    disabled: false,
  },

];
import { useRouter } from "vue-router";
const router = useRouter();

const form = reactive({
  credit: 0,
  usdt: 0,
});

const getMyWallet = async () => {
  let params = { mainchain: "BSC" };
  let ret = await UserService.getMyWallet(params);
  console.log(ret)
  if (ret.code == 0) {
    walletItems.value = ret.result;
  }
};
const logout = async () => {
  ElMessageBox.confirm(t("logout_info"), "Warning", {
    confirmButtonText: t("confirm"),
    cancelButtonText: t("cancle"),
    type: "warning",
  })
    .then(async () => {
      await UserService.logout({});
      ElMessage({
        type: "success",
        message: t("logout_succ"),
      });
      router.push("/");
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: t("logout_fail"),
      });
    });
};

const getDepositAddress = async () => {
  let params = { mainchain: "BSC" };
  dialogVisible.value = true;

  let ret = await UserService.getDepositAddress(params);
  if (ret.code == 0) {
    var canvas = document.getElementById("canvas");

    depositAddress.value = ret.result.address;

    QRCode.toCanvas(canvas, ret.result.address, function (error) {
      if (error) console.error(error);
      console.log("success!");
    });
  } else {
    ElMessage.error(ret.msg);
  }
};

// 监听浏览器宽度实现dialog动态宽度
const { width: windowsWidth } = useWindowSize();
const handleResize = (newVal: number) => {
  if (newVal < 768) {
    dialogWidth.value = "90%";
  } else if (newVal < 1280) {
    dialogWidth.value = "50%";
  } else {
    dialogWidth.value = "30%";
  }
};
watch(windowsWidth, (newVal) => {
  handleResize(newVal);
});
onMounted(async () => {
  handleResize(windowsWidth.value);
  window.addEventListener("resize", () => {
    handleResize(windowsWidth.value);
  });
  await getMyWallet()
});
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
  background-color: #3f63f1;
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

.center-btn {
  margin-top: 1rem;
  margin: auto 0;
  text-align: center;
}
.settings-page {
  @media screen and (max-width: 768px) {
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