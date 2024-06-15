const useWsStore = defineStore(
  'ws',
  () => {
    const state = reactive({
      baseUserInfo: {},
      userInfoDetail: {},
      bdcode: 1,
    })

    const setBdcode = (newBdcode) => {
      state.bdcode = newBdcode
    }
    
    return {
      ...toRefs(state),
      setBaseUserInfo,
      setUserInfoDetail,
      setBdcode,
    }
  },
  {
    persist: {
      key: import.meta.env.VITE_APP_CACHE_PREFIX + '-user',
    },
  }
)
export default useUserStore
