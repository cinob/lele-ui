import LeButton from './src/button.vue'

LeButton.install = Vue => {
  Vue.component( 'LeButton', LeButton )
}

export default LeButton
