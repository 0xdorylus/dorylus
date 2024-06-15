const useUserStore = defineStore(
  'explore',
  () => {
    const tag_ids = ref([])
    return {
      tag_ids,
    }
  },
  {
    persist: {
      key: import.meta.env.VITE_APP_CACHE_PREFIX + '-explore',
    },
  }
)
