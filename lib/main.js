import LeBackToTop from './backToTop'
import LeIcon from './icon'
import LeLink from './link'
import Button from './button'
import ButtonGroup from './button-group'

function install (Vue) {
  Vue.component('LeBackToTop', LeBackToTop)
  Vue.component('LeIcon', LeIcon)
  Vue.component('LeLink', LeLink)
  Vue.component('Button', Button)
  Vue.component('ButtonGroup', ButtonGroup)
}

export default {
  install,
  LeBackToTop,
  LeIcon,
  LeLink,
  Button,
  ButtonGroup
}
