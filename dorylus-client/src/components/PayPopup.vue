<template>
  <div class="popup" @touchmove.stop.prevent>
    <div class="popup-card panel-card">


      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>Bot Chat Setting</span>

          </div>
        </template>
        <div class="text item">
          <h1>Share Bot App</h1>
          https://www.0xbot.org/bot/DpDgvXVQ
          <el-icon>
            <DocumentCopy />
          </el-icon>

        </div>

        <div class="text item">
          <h1>Share Bot App</h1>
          <el-switch v-model="show_panel" class="mb-2" active-text="Pay by month" inactive-text="Pay by year" />

        </div>

      </el-card>



    </div>
  </div>
</template>
<script setup lang="ts">


defineProps({
  props: {
    bot_id: {
      type: String,
      default: '父传子的默认值',
    },
  }
})

const show_panel = ref(0)

</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.15);
  margin: 0 auto;
  max-width: 1025px;

  .popup-card {
    margin-left: 0.4324rem;
    margin-right: 0.4324rem;
    padding: 0.6486rem;
    width: 100%;
    z-index: 20;
    margin-top: 5.4054rem;
    border-radius: 0.5946rem;
    max-height: 5.9729rem;
    position: relative;

    .title {
      font-size: 0.4324rem;
      font-weight: 500;
      color: #333;
      line-height: 0.5135rem;
      text-align: center;
      margin-bottom: 0.8378rem;
    }

    .content {
      font-size: 0.3784rem;
      font-weight: 400;
      line-height: 0.4324rem;
      color: rgba(0, 0, 0, 0.7);
      margin-bottom: 1.0541rem;
    }

    .tool {
      display: flex;
      justify-content: center;
      align-items: center;

      .primary-btn {
        width: 100%;
        text-align: center;
        border-radius: 0.2162rem;
        color: #000000;
        font-weight: bold;
        font-size: 0.3784rem;
        padding: 0.3243rem 1.8919rem;
        border: 0.027rem solid #2422f4;
        background: rgb(166, 255, 225);
      }
    }

    .close-btn {
      position: absolute;
      top: 0.2973rem;
      right: 0.2973rem;
      cursor: pointer;

      img {
        width: 0.6486rem;
        height: 0.6486rem;
      }
    }
  }
}
</style>

