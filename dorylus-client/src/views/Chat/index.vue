<template>
     <div class="chat-page">
          <div class="content">
               <div class="chat-left">
                    <el-scrollbar wrap-class="app-main-scroll-wrap">
                         <div><el-input>search</el-input></div>
                         <div class="message-left-mess" @contextmenu="handleContextmenu"
                              @click="handleChangeChat(item, index)" :class="currentId == item._id ? 'is-Active' : ''"
                              v-for="(item, index) in chatList" :key="item._id">
                              <div class="msg-img">
                                   <el-image :src="item.avatar" class="msg-el-img" fit="cover" />
                              </div>
                              <div class="msg-content">
                                   <div class="msg-title">
                                        {{ item.title }}
                                   </div>
                                   <div class="msg-desc">
                                        {{ item.content }}
                                   </div>
                                   <div class="time">
                                        {{ item.create_at.substring(10) }}
                                   </div>
                              </div>
                         </div>
                    </el-scrollbar>

               </div>
               <div class="chat-right">
                    <div class="chat-right-content">
                         <el-scrollbar ref="scrollbarRef">
                              <div class="message-right-content-box" id="scrollRef">
                                   <div class="message-right-content-box-full" :class="fold ? '' : 'pb-open'"
                                        ref='contentref' id="contentref">
                                        <div class="chat-header-msg">
                                             <div class="title">{{ username }}</div>
                                             <div class="chat-settings">
                                                  <el-icon @click="to_chat_setting">
                                                       <Setting />
                                                  </el-icon>
                                             </div>
                                        </div>
                                        <div style="width:100%;padding-top: 60px;" id="messageBox">
                                             <div class="message-box"
                                                  :class="item.person == 1 ? 'message-box-left' : 'message-box-right'"
                                                  v-for="item in recordData" :key="item.id">
                                                  <div class="img-icon">
                                                       <img :src="item.avatar || '@/assets/icons/photo.png'"
                                                            class="img-icon-img">
                                                  </div>
                                                  <div class="mssage-info"
                                                       :class="item.person == 1 ? 'mssage-info-phone-right' : 'mssage-info-phone'">
                                                       <div class="time-info "
                                                            :class="item.person == 1 ? 'time-info-left' : 'time-info-right'">
                                                            {{
                                                                 item.time }}</div>
                                                       <div :class="item.person == 1 ? 'text-your' : 'text-me-box'">
                                                            <Markdown :breaks="true" :source="item.content"
                                                                 class="markdown-body" />
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </el-scrollbar>
                    </div>
                    <div class="message-right-input">
                         <div class="message-tool" :class="fold ? 'fold' : 'open'">
                              <button class="tool-btn">图片</button>
                              <button class="tool-btn">语音</button>
                              <button class="tool-btn">买币</button>
                              <button class="tool-btn">买币</button>
                              <button class="tool-btn">买币</button>
                              <button class="tool-btn">买币</button>
                         </div>
                         <div class="input-box">
                              <div class="delete-icon">
                                   <el-icon @click="fold = !fold">
                                        <Plus />
                                   </el-icon>
                              </div>
                              <textarea @keyup="handleKeyup" rows="1" v-model.trim="sendValue" class="edit-box"
                                   placeholder="Ctrl + Enter 发送，/ 触发补全"></textarea>
                              <div class="send-icon" :class="messageStatus != 'done' && 'dont_send'" @click="handleSendMsg">
                                   <el-icon>
                                        <Promotion />
                                   </el-icon>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <!-- 设置面板 -->
          <el-dialog v-model="dialogVisible" title="Settings" :width="dialogWidth">
               <div class="share-bot">
                    <div class="title">
                         Share Bot
                    </div>
                    <div class="copy-link">
                         https://chat.link-ai.tech/app/KdNN142A
                    </div>
                    <div class="copy-link-btn">
                         <button class="link-btn">copy link</button>
                    </div>
               </div>
               <el-divider />
               <div class="connect-bot">
                    <div class="title">
                         Connect Bot to Platofrm
                    </div>
                    <div class="connect-code">
                         <span class="code-label">Code:</span>
                         <span class="code-content">KdNN142A</span>
                         <span class="code-copy link-btn">Copy</span>
                    </div>
                    <div class="connect-media">
                         <el-button>Discord</el-button>
                         <el-button>Telegram</el-button>
                         <el-button>help</el-button>
                    </div>
               </div>
          </el-dialog>
     </div>
</template>

<script setup lang="ts">
import Markdown from 'vue3-markdown-it'
import Mock from 'mockjs'
import { ref, h, nextTick, onMounted, watch, toRef, getCurrentInstance, computed, onUpdated } from 'vue'
import type { Ref } from 'vue'
import { useRouter } from 'vue-router'
import ContextMenu from '@imengyu/vue3-context-menu'
import { Delete, Plus, Promotion } from '@element-plus/icons-vue'
import { ElScrollbar } from 'element-plus'
import { RemovableRef, set, useElementBounding, useStorage } from '@vueuse/core'
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.min.css';
import { useWindowSize } from '@vueuse/core'
import { BotService } from '@/api/api'
import { getNowTimes } from '@/utils/common'
import { useAuthStore } from '@/store/common'
import { useWebSocket } from '@vueuse/core'

interface ChatListFace {
     _id: number
     title: string
     avatar: string
     content: string
     create_at: string
}
interface RecordFace {
     id: number
     avatar?: string
     person: number
     content: string
     time: string
     uid?: number
}

interface usreBaseInfo {
     uid: string
     avatar: string
     username: string
}

const dialogWidth: Ref<string> = ref('30%')
const dialogVisible: Ref<boolean> = ref(false)
const fold: Ref<boolean> = ref(true)
const sendValue: Ref<string> = ref('')
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
const contentref: Ref<null> = ref(null)
const { height } = useElementBounding(contentref)
const router = useRouter()


const currentId: Ref<number> = ref(1)
const chatList: Ref<ChatListFace[]> = ref([])
const recordData: Ref<RecordFace[]> = ref([])
const conversationId: Ref<number> = ref(0)

const assistantId = router.currentRoute.value.params.id

const historyLists = ref([])
const searchList = ref([])
const langPopup = ref(null)
const historyPopup = ref(null)

const inputHeight = ref(0)
const sendMsg = ref('')
const bottomId = ref('')
const loading = ref(false)
const ScrollTop = ref(0)
const InterFaceActive = ref(-1)
const interfaceTags = ref([])
const conversation_id = ref('')




const username = ref("")
const authStore = useAuthStore()
const token = authStore.token
const wsUrl = `wss://api.dorylus.ai/wss?token=${token}`


const messageStatus = ref("done");
let userList: Ref<Map<number, usreBaseInfo>> = ref(new Map());
let isFirstShow = true;
const { status, data, close } = useWebSocket(wsUrl, {
     heartbeat: {
          message: 'ping',
          interval: 5000,
          pongTimeout: 10000,
     },
     onMessage(ws: WebSocket, e: MessageEvent) {
          if (e.data == "PING" || e.data == "PONG") {

          } else {
               const item = JSON.parse(e.data)
               // console.log(item)

               // 消息信息
               const lastIndex = recordData.value.length - 1
               if (recordData.value[lastIndex].id == item.id) {
                    recordData.value[lastIndex].content += item.content
               } else {
                    recordData.value.push({
                         id: item.id,
                         uid: item.uid,
                         person: 1,
                         avatar: userList.value.get(item.uid as number)?.avatar,
                         content: item.content,
                         time: getNowTimes("YYYY-mm-dd HH:MM:SS") as string
                    })
                    if (!userList.value.get(item.uid)) getUserInfo(recordData.value.length - 1, item.uid)
               }
               messageStatus.value = item.status
               if (isFirstShow) {
                    // isFirstShow = false
                    // const dom = document.getElementById("contentref");
                    // console.log(dom?.clientHeight, dom?.scrollHeight);
                    nextTick(() => {
                         scrollbarRef.value!.setScrollTop(height.value)
                         sendValue.value = ''
                    })
               }
          }
     }
})

const getUserInfo = async (index: number, uid: number) => {
     let res = await BotService.getUserInfo({ uids: uid })
     if (res.code == 0) {
          recordData.value[index].avatar = res.result[uid].avatar;
          userList.value.set(uid, res.result[uid]);
          console.log(userList.value)
     } else {

     }
}



const page = ref({
     current: 1,
     total: 0,
     totalPage: 0
}

)
const chatHistory = ref([])

// 用户模拟数据
const data2 = Mock.mock({
     'list|20': [
          {
               'id|+1': 1,
               name: '@name',
               img: '@image',
               desc: '@paragraph(1)',
               time: '@time("HH:mm")',
          },
     ],
})
// 记录模拟数据
// recordData.value = Mock.mock({
//   'list|20': [
//     {
//       'id|+1': 1,
//       'person': '@integer(1,2)',
//       'content': '@paragraph(1)',
//       'time': '@time',
//     }
//   ]
// }).list

// 监听浏览器宽度实现dialog动态宽度
const { width: windowsWidth } = useWindowSize()

const handleResize = (newVal: number) => {
     if (newVal < 768) {
          dialogWidth.value = '90%'
     } else if (newVal < 1280) {
          dialogWidth.value = '50%'
     } else {
          dialogWidth.value = '30%'
     }
}



watch(windowsWidth, (newVal) => {
     handleResize(newVal)
})


onMounted(async () => {

     Prism.highlightAll();
     handleResize(windowsWidth.value)
     window.addEventListener("resize", () => {
          handleResize(windowsWidth.value)
     });
     // 回显当前选择的对话用户
     const nowSelect: RemovableRef<string> = useStorage('nowSelect', '')
     if (nowSelect.value) {
          try {
               currentId.value = JSON.parse(nowSelect.value)
          }catch(e){}
     }

     await initConversationId(assistantId)
     await fetchHistoryData()
     getChatList()
});

const getChatList = async () => {
     let ret = await BotService.listConversation({})
     if (ret.code == 0) {
          chatList.value = ret.result
     } else {

     }
}

const initConversationId = async (assistant_id: string | string[]) => {
     let ret = await BotService.startConversation({ assistant_id: assistant_id })
     if (ret.code == 0) {
          conversationId.value = ret.result.conversation_id
          username.value = ret.result.assistant.name
     } else {

     }
}

const fetchHistoryData = async () => {
     let params = {
          page: page.value.current,
          conversationId: conversationId.value
     }
     let ret = await BotService.getHistoryMsg(params)
     const {
          result
     } = ret
     const data = result.list
     // 如果第一页的数据为空就去请求推荐词
     if (page.value.current == 1 && data.length === 0) {
          fetchRecord()
     }
     chatHistory.value = data
     page.value.total = result.total
     page.value.totalPage = result.totalPage
     if (data.length) {
          const id = data[data.length - 1].id
          nextTick(() => {
               bottomId.value = `bottom${id}`
          })
     }
}

const fetchRecord = () => {
     // const common = useCommonStore()
     // promote(common.assistant_id).then(res => {
     //   const {
     //     question_list
     //   } = res.result[0]
     //   let list = [];
     //   console.log(question_list)
     //   question_list.forEach(item => {
     //     list.push(item.content);
     //   })

     //   console.log(list)
     //   interfaceTags.value = list
     // })
}



// chatList.value = data2.list
const handleChangeChat = (item: ChatListFace, index: number) => {
     currentId.value = item._id
     localStorage.setItem('nowSelect', JSON.stringify(currentId.value))
     router.push(`/chat/${item._id}`)
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


const cureentUser = JSON.parse(localStorage.getItem("userInfo") || "");
const handleSendMsg = async () => {
     if (messageStatus.value != "done") return
     if (sendValue.value) {
          recordData.value.push({
               id: recordData.value.length + 1,
               uid: cureentUser.uid,
               avatar: cureentUser.avatar,
               person: 2,
               content: sendValue.value,
               time: getNowTimes("YYYY-mm-dd HH:MM:SS") as string
          })

          //临时
          let ret = await BotService.sendMsg({ msg: sendValue.value, assistant_id: assistantId, conversation_id: conversationId.value });
          console.log(ret);

          nextTick(() => {
               scrollbarRef.value!.setScrollTop(height.value)
               sendValue.value = ''
          })
     }

}

const to_chat_setting = () => {
     dialogVisible.value = true
}
// 监听组合键ctrl+enter发送消息
const handleKeyup = (e: KeyboardEvent) => {
     if (e.ctrlKey && e.keyCode === 13) {
          handleSendMsg()
     }
}

</script>

<style scoped lang="scss">
.chat-page {
     overflow-x: hidden;
     height: 100%;

     .content {
          height: 100%;
          display: flex;

          .chat-left {
               width: 220px;
               height: 100%;
               overflow: auto;
               margin-right: 20px;

               @media screen and (max-width: 768px) {
                    display: none;
               }

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

          .chat-right {
               width: calc(100% - 240px);
               border-radius: 8px;
               border: 1px solid #eff0f0;
               position: relative;
               background-color: #fff;


               @media screen and (max-width: 768px) {
                    width: 100%;
               }

               .chat-right-content {
                    height: calc(100% - 68px);
                    overflow-x: hidden;

                    .message-right-content-box {
                         overflow-y: auto;

                         .message-right-content-box-full {
                              padding: 0 10px;
                              height: 100%;
                              transition: all .3s ease-in-out;

                              #messageBox {
                                   overflow-anchor: none;
                              }

                              div {

                                   .message-box {
                                        margin-bottom: 20px;
                                        width: 100%;
                                        overflow-anchor: auto;


                                        .img-icon {
                                             width: 32px;
                                             height: 32px;
                                             min-width: 32px;
                                             border-radius: 9999px;
                                             background-color: #ccc;
                                             overflow: hidden;
                                             margin-right: 10px;
                                             margin-left: 10px;

                                             .img-icon-img {
                                                  width: 100%;
                                                  height: 100%;
                                                  -o-object-fit: cover;
                                                  object-fit: cover;
                                             }
                                        }

                                        .mssage-info {

                                             .time-info {
                                                  margin-bottom: 4px;
                                                  font-size: 12px;
                                                  color: #ccc;
                                             }

                                             .time-info-left {
                                                  text-align: left;
                                             }

                                             .text-your {
                                                  padding: 12px 20px 10px 20px;
                                                  background-color: #f2f2f2;
                                                  font-size: 14px;
                                                  text-align: left;
                                                  border-radius: 8px;
                                                  line-height: 1.5;
                                                  word-break: break-all;
                                                  max-width: 500px;

                                                  @media screen and (max-width: 768px) {
                                                       max-width: 83%;
                                                  }

                                             }
                                        }

                                        .mssage-info-phone-right {
                                             max-width: 100% !important;
                                             overflow: auto;
                                        }
                                   }

                                   .message-box-left {
                                        display: flex;
                                   }
                              }
                         }
                    }

                    #scrollRef {}
               }
          }
     }
}

.message-box-right {
     display: flex;
     flex-direction: row-reverse;
}

.text-me-box {
     text-align: left;
     background-color: #e5f2ff;
     padding: 10px 20px 10px 20px;
     border-radius: 8px;
     font-size: 14px;
     line-height: 1.5;
}

.time-info-right {
     text-align: right;
}

.message-right-input {
     width: 100%;
     height: 60px;
     position: absolute;
     padding: 0 20px;
     box-sizing: border-box;
     bottom: 0;
     z-index: 999;

     @media screen and (max-width: 768px) {
          padding: 0 10px;
     }

     .input-box {
          display: flex;
          height: 50px;
          width: 100%;
          justify-content: center;
          align-items: center;
          background: #fff;

          .delete-icon {
               font-size: 1.3rem;
               margin-right: 13px;
               cursor: pointer;
               color: #4098fd;
          }

          .edit-box {
               flex: 1;
               overflow-y: auto;
               border-radius: 8px 8px 8px 8px;
               background: #F2F2F2;
               padding: 14px;
               outline: none;
               border: none;
               color: #333;
               font-weight: 500;
               word-break: break-all;
               resize: none;
               font-family: 'Montserrat', sans-serif;

               &::-webkit-scrollbar {
                    display: none;
               }
          }

          .send-icon {
               padding: 12px 22px;
               background: #3F63F1;
               color: #fff;
               border-radius: 8px;
               cursor: pointer;
               margin-left: 12px;
          }

          .dont_send {
               background: #bfbfc1;
               cursor: no-drop;
          }
     }
}

.mssage-info-phone {
     @media screen and (max-width: 768px) {
          max-width: 100% !important;
          overflow: auto;
          padding-left: 10px;
     }
}

.message-tool {
     position: absolute;
     bottom: 60px;
     z-index: -1;
     width: calc(100% - 20px);
     background-color: #fff;
     padding: 10px 0;
     transition: all .3s ease-in-out;
     display: flex;
     align-items: center;
     overflow-y: hidden;
     overflow-x: auto;

     .tool-btn {
          background-color: #f2f2f2;
          color: #333;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 32px;
          border-radius: 4px;
          cursor: pointer;
          user-select: none;
          padding: 0 17px;
          font-size: 12px;
          transition: all .15s ease-in-out;
          outline: none;
          border: none;
          margin-right: 13px;
          white-space: nowrap;

          &:hover {
               background-color: #175ceb;
               color: #fff;
          }

     }
}

.fold {
     transform: translateY(52px);
}

.open {
     transform: translateY(0);
}

.pb-open {
     padding-bottom: 52px !important;
}

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

.share-bot {

     .title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 20px;
     }

     .copy-link {
          background-color: #f9fafb;
          width: 100%;
          margin: 20px 0;
          padding: 10px;
          box-sizing: border-box;
          color: #409eff;
     }

     .copy-link-btn {
          display: flex;
          justify-content: flex-end;


     }
}

.connect-bot {
     .title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 20px;
     }

     .connect-code {
          display: flex;
          align-items: center;

          .code-content {
               flex: 1;
               background-color: #f9fafb;
               width: 100%;
               margin: 20px 10px;
               padding: 10px;
               box-sizing: border-box;
               color: #409eff;
          }

     }
}

.link-btn {
     outline: none;
     border: none;
     background-color: #3F63F1;
     color: #fff;
     display: flex;
     align-items: center;
     justify-content: center;
     height: 32px;
     border-radius: 4px;
     cursor: pointer;
     user-select: none;
     padding: 0 17px;
     font-size: 14px;
     transition: all .3s ease-in-out;
     font-family: 'Montserrat', sans-serif;

     &:hover {
          background-color: #175ceb;
     }
}
</style>
