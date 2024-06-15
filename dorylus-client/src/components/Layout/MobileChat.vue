<template>
  <el-drawer class="popup-dialog" v-model="commonStore.showMobileChat" :with-header="false" width="100%" direction="ltr">
    <div class="chat-left">
      <el-scrollbar wrap-class="app-main-scroll-wrap" v-if="currentLocation == 'chat'">
        <div class="message-left-mess" @contextmenu="handleContextmenu" @click="handleChangeChat(item, index)"
          :class="currentChatId == item.id ? 'is-Active' : ''" v-for="(item, index) in chatList" :key="item.id">
          <div class="msg-img">
            <el-image :src="item.img" class="msg-el-img" fit="cover" />
          </div>
          <div class="msg-content">
            <div class="msg-title">
              {{ item.name }}
            </div>
            <div class="msg-desc">
              {{ item.desc }}
            </div>
            <div class="time">
              {{ item.time }}
            </div>
          </div>
        </div>
      </el-scrollbar>


      <el-scrollbar wrap-class="app-main-scroll-wrap" v-if="currentLocation == 'channel'">
        <div class="message-left-mess" @contextmenu="handleContextmenu" @click="handleChangeChannel(item, index)"
          :class="currentChannelId == item._id ? 'is-Active' : ''" v-for="(item, index) in channelList" :key="item._id">
          <div class="msg-img">

          </div>
          <div class="msg-content">
            <div class="msg-title">
              {{ item.name }}
            </div>
            <!-- <div class="msg-desc">
              {{ item.desc }}
            </div>
            <div class="time">
              {{ item.time }}
            </div> -->
          </div>
        </div>
      </el-scrollbar>

    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/store/common'
import { ref, h, onMounted } from 'vue'
import type { Ref } from 'vue';
import Mock from 'mockjs'
import ContextMenu from '@imengyu/vue3-context-menu'
import { Delete } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import { RemovableRef, useStorage } from '@vueuse/core';
interface ChatListFace {
  id: number
  name: string
  img: string
  desc: string
  time: string
}
interface ChannelListFace {
  _id: string
  name: string
  serverId: string

}

const commonStore = useCommonStore()
const currentChatId: Ref<number> = ref(1)
const currentChannelId: Ref<string> = ref("")

const router = useRouter()

const chatList: Ref<ChatListFace[]> = ref([])
const channelList: Ref<ChannelListFace[]> = ref([])
const currentLocation: Ref<string> = ref("")


// const data = Mock.mock({
//   'list|20': [
//     {
//       'id|+1': 1,
//       name: '@name',
//       img: '@image',
//       desc: '@paragraph(1)',
//       time: '@time("HH:mm")',
//     },
//   ],
// })
// chatList.value = data.list

onMounted(() => {
  // 回显当前选择的用户
  const currentLocation: RemovableRef<string> = useStorage('nowSelectLocation', 'chat')
  if (currentLocation.value == "chat") {
    const nowSelect: RemovableRef<string> = useStorage('nowSelect', '')
    try{
      currentChatId.value = JSON.parse(nowSelect.value)
    }catch(e){}
  } else if (currentLocation.value == "channel") {

  }




})

const handleChangeChat = (item: ChatListFace, index: number) => {
  currentChatId.value = item.id
  localStorage.setItem('nowSelect', JSON.stringify(currentChatId.value))
  router.push(`/chat/${item.id}`)
  commonStore.showMobileChat = false
}

const handleChangeChannel = (item: ChannelListFace, index: number) => {
  currentChannelId.value = item._id
  localStorage.setItem('nowSelect', JSON.stringify(currentChatId.value))
  router.push(`/server/${item._id}`)
  commonStore.showMobileChat = false
}


const handleContextmenu = (e: MouseEvent) => {
  e.preventDefault()
  ContextMenu.showContextMenu({
    x: e.x,
    y: e.y,
    items: [
      {
        label: 'Delete',
        icon: () => h(Delete, { style: { width: 20 } }),
        onClick: () => { },
      },
    ],
  })
}
</script>

<style scoped lang="scss">
.popup-dialog {
  overflow-x: hidden;

  .chat-left {
    width: 100%;
    height: 100%;
    overflow: auto;
    overflow-x: hidden;

    .message-left-mess {


      user-select: none;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 10px;
      border-radius: 10px;

      .msg-img {
        .msg-el-img {
          width: 50px;
          height: 50px;
          border-radius: 4px;
          vertical-align: middle;
        }
      }

      .msg-content {
        width: 66%;
        margin-left: 10px;
        position: relative;

        .msg-title {
          font-size: 18px;
          line-height: 28px;
          width: 70%;
          font-weight: 600;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .msg-desc {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          line-height: 20px;
        }

        .time {
          position: absolute;
          right: 0;
          top: 8px;
          font-size: 12px;
          line-height: 1rem;
        }
      }
    }

    .is-Active {
      background-color: #eff0f0;
    }
  }
}
</style>