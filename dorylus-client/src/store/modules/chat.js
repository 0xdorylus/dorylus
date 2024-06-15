const useChatStore = defineStore(
    'chatStore',
    () => {
        const state = reactive({
            chatLists: new Map(),

        })
        const addChat = (channel_id, value) => {
            if (!state.chatLists.has(channel_id)) {
                state.chatLists.set(channel_id, [])
            }
            state.chatLists.get(channel_id).push(value)
        }
        const getChat = (channel_id) => {
            state.chatLists.get(channel_id)
        }
        const changeChat = (channel_id, id, list) => {
            const chatList = state.chatLists.get(channel_id)
            const index = chatList.findIndex((item) => item.id == id)
            chatList[index].chat = list
        }
        const changeOne = (channel_id, id, message) => {
            const chatList = state.chatLists.get(channel_id)
            const data = chatList.find((item) => item.id == id)
            if (data.chat && data.chat.length) {
                const index = data.chat.findIndex((item) => item.id == message.id)
                data.chat[index] = message
            }
        }


        return {
            ...toRefs(state),
            addChat,
            changeChat,
            changeOne,
            getChat,
        }
    },
    {
        persist: {
            key: import.meta.env.VITE_APP_CACHE_PREFIX + '-chatlist',
        },
    }
)
export default useChatStore
