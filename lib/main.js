import Test from './test'
import BackToTop from './backToTop'

function install (Vue) {
  Vue.component('Test', Test)
  Vue.component('BackToTop', BackToTop)
}

export default {
  install,
  Test,
  BackToTop
}