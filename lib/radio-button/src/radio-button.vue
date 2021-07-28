<template>
  <label
    :class="['le-radio-button',
      size ? 'le-radio-button-' + size : ''
    ]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
  >
    <input
      class="le-radio-button-orig-radio"
      type="radio"
      :value="label"
      v-model="model"
      tabindex="-1"
      :disabled="isDisabled"
    >
    <span
      class="le-radio-button-inner"
    >
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup>
import { defineProps, computed, getCurrentInstance } from "vue"

const componentName = 'LeRadioButton'

const props = defineProps({
  label: {},
  disabled: Boolean,
  size: {}
})

const instance = getCurrentInstance()
const radioGroup = computed(() => {
  let parent = instance.parent
  while (parent) {
    if (parent.ctx.componentName !== 'LeRadioGroup') {
      parent = parent.parent
    } else {
      return parent.ctx
    }
  }
  return parent
})

const model = computed({
  get () {
    return radioGroup.value.modelValue
  },
  set (val) {
    radioGroup.value.$emit('update:modelValue', val)
  },
})

const isDisabled = computed(() => {
  return radioGroup.value.$props.disabled || props.disabled
})

</script>

<style lang="stylus" scoped>
@import '../../../src/styles/global.styl'
@import '../../../src/styles/var.styl'
@import '../../../src/styles/button.styl'
.le-radio-button
  position relative
  display inline-block
  outline none
  .le-radio-button-inner
    display inline-block
    line-height 1
    white-space nowrap
    vertical-align middle
    background-color $button-default-background-color
    border $border-base
    font-weight $button-font-weight
    border-left 0
    color $button-default-font-color
    text-align center
    box-sizing border-box
    outline none
    margin 0
    position relative
    cursor pointer
    allTransition()
    button-size($button-padding-vertical, $button-padding-horizontal, $button-font-size, 0)
    &:hover
      color $color-primary
    & [class*="le-icon-"]
      line-height 0.9
      & + span
        margin-left 5px
  &:first-child
    .le-radio-button-inner
      border-left $border-base
      border-radius $border-radius-base 0 0 $border-radius-base
      box-shadow none !important
  .le-radio-button-orig-radio
    opacity 0
    outline none
    position absolute
    z-index -1
    &:checked
      & + .le-radio-button-inner
        color $radio-button-checked-font-color
        background-color $radio-button-checked-background-color
        border-color $radio-button-checked-border-color
        box-shadow -1px 0 0 0 $radio-button-checked-border-color
    &:disabled
      & + .le-radio-button-inner
        color $button-disabled-font-color
        cursor not-allowed
        background-image none
        background-color $button-disabled-background-color
        border-color $button-disabled-border-color
        box-shadow none
  &:last-child
    .le-radio-button-inner
      border-radius 0 $border-radius-base $border-radius-base 0
  &:first-child:last-child
    .le-radio-button-inner
      border-radius: $border-radius-base
.le-radio-button-medium
  & .le-radio-button-inner
    button-size($button-medium-padding-vertical, $button-medium-padding-horizontal, $button-medium-font-size, 0)
.le-radio-button-small
  & .le-radio-button-inner
    button-size($button-small-padding-vertical, $button-small-padding-horizontal, $button-small-font-size, 0)
.le-radio-button-mini
  & .le-radio-button-inner
    button-size($button-mini-padding-vertical, $button-mini-padding-horizontal, $button-mini-font-size, 0)
</style>