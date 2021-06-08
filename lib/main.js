import LeBackToTop from './backToTop'
import LeIcon from './icon'
import LeLink from './link'

function install (Vue) {
  Vue.component('LeBackToTop', LeBackToTop)
  Vue.component('LeIcon', LeIcon)
  Vue.component('LeLink', LeLink)
}

export default {
  install,
  LeBackToTop,
  LeIcon,
  LeLink
}