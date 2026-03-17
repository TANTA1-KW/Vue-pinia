// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('user', {
  state: () => ({
    firstname: 'tt',
    lastname: 'kk',
  }),
  actions: {
    changeName (formdata) {
      this.firstname = formdata.firstname
      this.lastname = formdata.lastname
    }
  }
})
