import LeBackToTop from './backToTop'
import LeIcon from './icon'
import LeLink from './link'
import LeRadio from './radio'

function install (Vue) {
  Vue.component('LeBackToTop', LeBackToTop)
  Vue.component('LeIcon', LeIcon)
  Vue.component('LeLink', LeLink)
  Vue.component('LeRadio', LeRadio)
}

export default {
  install,
  LeBackToTop,
  LeIcon,
  LeLink,
  LeRadio
}