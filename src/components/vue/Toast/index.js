import Vue from 'vue'
import Toast from './Toast'

const ToastConstructor = Vue.extend(Toast)

export default {
  install(Vue, options) {
    Vue.$toast = function(message) {
      const instance = ToastConstructor({
        data: {
          message
        }
      })

      const { $el } = instance.$mount()
    }
  }
}
