import { WebSocketBean } from 'tools-vue3'
import useUserStore from '@/store/modules/user'
import bus from "@/utils/mittbus.ts";

class WSUtil {
  static socket;
   async init() {
    const userStore = useUserStore()

      const sendSuffix = ''


        //初始化websokcet对象
        this.socket = new WebSocketBean({
            url: wsURL+"?token="+userStore.baseUserInfo.token,
            needReconnect: true,
            reconnectGapTime: 3000,
            onerror: () => {
                console.log('断开')
            },
            sendSuffix,
            messageSuffix: sendSuffix,
            heartSend: '~',
            heartGet: '~',
            heartGapTime: 3000,
            onmessage: (data) => {
            	//在这里写消息处理逻辑

                if(data.data == "~"){
                    return
                } else {
                    try {
                        const items  = JSON.parse(data.data)
                        if (items.kind == "notice") {
                            bus.emit("notice",JSON.parse(data.data))

                        } else if(items.kind == "message_notice") {

                        } else{
                            console.log("emit data:",data.data)
                            bus.emit("chat",JSON.parse(data.data))
                        }

                    } catch (e) {
                        console.log(e)
                    }

                }

              // console.log(sp)

                //channel --->
                //notice-->通知

              // //这里sp的数据为['{\"code\":\"getData\",\"data\":\"test\"}']
              // sp.forEach(item=>{
              //     // const jsonData = JSON.parse(item)
              //     //事件触发
              //     CEvent.emit("xxx",item)
              // })



            }
        })
        //建立连接
        this.socket.start()
    }
    isReady() {
       if (this.socket === undefined) {
           return false
       }
       if(this.socket.status !== 1){
              return false
       }
        return true;
    }
     send(data) {
       console.log("try send:",data)
       let  msg = JSON.stringify(data)
        this.socket.send(msg)
    }
}
let wsURL = import.meta.env.VITE_APP_API_SOCKET_URL
const ws = new WSUtil()
export default ws;
