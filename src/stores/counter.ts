import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'Jun'
  }),
  actions: {
    increment() {
      this.count++
    },
    setName(newName: string) {
      this.name = newName
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2
  }
})
