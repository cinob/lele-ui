import Test from './test'

function install (Vue) {
  Vue.component('Test', Test)
}

export default {
  install,
  Test
}