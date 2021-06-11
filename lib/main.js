import LeBackToTop from './backToTop'
import LeIcon from './icon'
import LeLink from './link'
import LeButton from './button'
import LeButtonGroup from './button-group'

function install (Vue) {
  Vue.component('LeBackToTop', LeBackToTop)
  Vue.component('LeIcon', LeIcon)
  Vue.component( 'LeLink', LeLink )
  Vue.component( 'LeButton', LeButton )
  Vue.component( 'LeButtonGroup', LeButtonGroup )
}

export default {
  install,
  LeBackToTop,
  LeIcon,
  LeLink,
  LeButton,
  LeButtonGroup
}