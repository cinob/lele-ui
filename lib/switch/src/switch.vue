<template>
  <div class="le-switch"
       :class="{ 'is-disabled': switchDisabled, 'is-checked': checked }"
       role="switch"
       :aria-checked="checked"
       :aria-disabled="props.switchDisabled"
       @click.prevent="switchValue">
    <input class="le-switch__input"
           type="checkbox"
           @change="handleChange"
           ref="input"
           :id="id"
           :name="props.name"
           :true-value="props.activeValue"
           :false-value="props.inactiveValue"
           :disabled="props.switchDisabled"
           @keydown.enter="props.switchValue">
    <!-- ?? -->
    <span :class="['le-switch__label', 'le-switch__lable--left', !checked ? 'is-active' : '']"
          v-if="inactiveIconClass || inactiveText">
      <i :class="[inactiveIconClass]"
         v-if="inactiveIconClass"></i>
      <span v-if="!inactiveIconClass && inactiveText"
            :aria-hidden="checked">{{ inactiveText }}</span>
    </span>
    <span class="le-switch__core"
          ref="core"
          :style="style">
    </span>
    <span :class="['le-switch__label', 'le-switch__lable--right', checked ? 'is-active' : '']"
          v-if="activeIconClass || activeText">
      <i :class="[activeIconClass]"
         v-if="activeIconClass"></i>
      <span v-if="!activeIconClass && activeText"
            :aria-hidden="!checked">{{ activeText }}</span>
    </span>
  </div>
</template>

<script setup>
import { get, set } from "@vueuse/shared"
import { defineProps, reactive, computed, defineEmit } from "vue"

const props = defineProps({
  value: {
    type: [Boolean, String, Number],
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  width: {
    type: Number,
    default: 40
  },
  activeIconClass: {
    type: String,
    default: ''
  },
  inactiveIconClass: {
    type: String,
    default: ''
  },
  activeText: String,
  inactiveText: String,
  activeColor: {
    type: String,
    default: ''
  },
  inactiveColor: {
    type: String,
    default: ''
  },
  activeValue: {
    type: [String, Number],
    default: ''
  },
  inactiveValue: {
    type: [String, Number],
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  id: String
})

const data = reactive({
  checked: props.value,
  disabled: props.disabled
})

const checked = computed(() => {
  return data.checked
})

const style = computed({
  get: () => {
    const extra_style = {}
    if (props.width) {
      extra_style['width'] = props.width + 'px'
    }

    const new_color_style = data.checked === true && data.disabled !== true ? 'activeColor' : 'inactiveColor'
    extra_style['background-color'] = props[new_color_style]
    extra_style['border-color'] = props[new_color_style]

    return extra_style
  }
})

function switchValue () {
  if (data.disabled === false) {
    data.checked = !data.checked 
  }
  handleChange()
}

const switchDisabled = computed(() => {
  return data.disabled
})

const emit = defineEmit([
  'change'
])

function handleChange (event) {
  if(data.checked === true ){
    if (props.activeValue !== '') {
      emit('change', props.activeValue)  
    } else {
      emit('change', true)  
    }
  }
  if(data.checked === false ){
    if (props.inactiveValue !== '') {
      emit('change', props.inactiveValue)
    }
    else {
      emit('change', false)
    }
  }
}

</script>

<style lang="stylus" scoped>
@import '../../../src/styles/icon.styl'
@import '../../../src/styles/var.styl'
.le-switch
  display inline-flex
  align-items center
  position relative
  font-size $switch-font-size
  line-height 20px
  height $switch-height
  vertical-align middle
.le-switch.is-disabled .le-switch__core, .le-switch.is-disabled .le-switch__label
  cursor not-allowed
.le-switch__label
  transition 0.2s
  height $switch-height
  display inline-block
  font-size $switch-font-size
  font-weight 500
  cursor pointer
  vertical-align middle
  color $color-text-primary
.le-switch__label.is-active
  color $color-primary
.le-switch__lable--left
  margin-right 10px
.le-switch__lable--right
  margin-left 10px
.le-switch__label *
  line-height 1
  font-size $switch-font-size
  display inline-block
.le-switch__input
  position absolute
  width 0
  height 0
  opacity 0
  margin 0
.le-switch__core
  margin 0
  display inline-block
  position relative
  width 40px
  height $switch-height
  border 1px solid $border-color-base
  outline none
  border-radius $switch-core-border-radius
  box-sizing border-box
  background $switch-off-color
  cursor pointer
  transition $switch-off-color 0.3s, $switch-off-color 0.3s
  vertical-align middle
.le-switch__core:after
  content ''
  position absolute
  top 1px
  left 1px
  border-radius 100%
  transition all 0.3s
  width 16px
  height 16px
  background-color $color-white
.le-switch.is-checked .le-switch__core
  border-color $switch-on-color
  background-color $switch-on-color
.le-switch.is-checked .le-switch__core::after
  left 100%
  margin-left -($switch-button-size + 1px)
.le-switch.is-disabled
  opacity 0.6
.le-switch--wide .le-switch__label.le-switch__lable--left span
  left 10px
.le-switch--wide .le-switch__label.le-switch__lable--right span
  right 10px
.le-switch .lable-fade-enter, .le-switch .lable-fade-leave-active
  opacity 0
</style>