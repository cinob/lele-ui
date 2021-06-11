import LeBackToTop from './backToTop'
import LeIcon from './icon'
import LeLink from './link'
import LeRadio from './LeRadio'
import LeButton from './button'
import LeButtonGroup from './button-group'

function install (Vue) {
  Vue.component('LeBackToTop', LeBackToTop)
  Vue.component('LeIcon', LeIcon)
  Vue.component('LeRadio', LeRadio )
  Vue.component('LeLink', LeLink )
  Vue.component('LeButton', LeButton )
  Vue.component('LeButtonGroup', LeButtonGroup )
}

export default {
  install,
  LeBackToTop,
  LeIcon,
  LeLink,
  LeRadio,
  LeButton,
  LeButtonGroup
}
