import LeBackToTop from './backToTop'
import LeIcon from './icon'
import LeLink from './link'
import LeRadio from './radio'
import LeRadioGroup from './radio-group'
import LeButton from './button'
import LeButtonGroup from './button-group'
import LeSwitch from './switch'

function install (Vue) {
  Vue.component('LeBackToTop', LeBackToTop)
  Vue.component('LeIcon', LeIcon)
  Vue.component('LeRadio', LeRadio )
  Vue.component('LeRadioGroup', LeRadioGroup )
  Vue.component('LeLink', LeLink )
  Vue.component('LeButton', LeButton )
  Vue.component( 'LeButtonGroup', LeButtonGroup )
  Vue.component( 'LeSwitch', LeSwitch )
}

export default {
  install,
  LeBackToTop,
  LeIcon,
  LeLink,
  LeRadio,
  LeRadioGroup,
  LeButton,
  LeButtonGroup,
  LeSwitch
}
