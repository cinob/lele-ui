<template>
  <div
    class="le-radio-group"
    role="radiogroup"
  >
    <slot/>
  </div>
</template>

<script setup>
import { defineProps, defineEmit } from "vue"

const componentName = 'LeRadioGroup'

const prop = defineProps({
  modelValue: {},
  size: String,
  fill: String,
  textColor: String,
  disabled: Boolean
})

const emit = defineEmit([
  'change',
  'update:modelValue'
])


</script>

<style lang="stylus" scoped>
@import '../../../src/styles/global.styl'
@import '../../../src/styles/var.styl'
</style>