import { defineStore } from "pinia";

export const useStore = defineStore("inputValue", {
  state: () => ({
    value: "istanbul"
  }),
  actions: {
    setValue(newValue) {
      this.value = newValue
    }
  }
})