import Test from './src/main.vue'

Test.install = (Vue) => {
  Vue.component('Test', Test)
}

export default Test