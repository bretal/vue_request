// src/stores/userStore.ts
import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    loading: false,
    isFirstLoad: true,
  }),

  actions: {
    setUsers(newUsers) {
      this.users = newUsers
    },
    setLoading(loading) {
      this.loading = loading
    },
    setIsFirstLoad(isFirstLoad) {
      this.isFirstLoad = isFirstLoad
    },
  },
})
