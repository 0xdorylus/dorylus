
import { defineStore } from "pinia";

const useUserStore = defineStore(
  'user',
  () => {
    const state = reactive({
      baseUserInfo: {},
      userInfoDetail: {},
      bdcode: 1,
    })
    const setBaseUserInfo = (newUser) => {
      state.baseUserInfo = newUser
    }
    const setUid = (uid)=>{
        state.baseUserInfo.uid = uid
    }
    const setUserInfoDetail = (newUser) => {
      state.userInfoDetail = newUser
    }
    const setBdcode = (newBdcode) => {
      state.bdcode = newBdcode
    }

    return {
      ...toRefs(state),
      setBaseUserInfo,
      setUserInfoDetail,
      setBdcode,
        setUid,
    }
  },
  {
    persist: {
      key: import.meta.env.VITE_APP_CACHE_PREFIX + '-user',
    },
  }
)
export default useUserStore
