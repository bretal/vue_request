// src/stores/userStore.ts
import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
  }),
  actions: {
    setUsers(newUsers) {
      this.users = newUsers
    },
  },
})
