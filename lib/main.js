import LeBackToTop from './backToTop'
import LeIcon from './icon'

function install (Vue) {
  Vue.component('LeBackToTop', LeBackToTop)
  Vue.component('LeIcon', LeIcon)
}

export default {
  install,
  LeBackToTop,
  LeIcon
}