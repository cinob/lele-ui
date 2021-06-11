<template>
  <label class="le-radio">
    <input type="radio">
    <span>
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script setup>
import { defineProps } from "vue"
defineProps({
  label: {},
  value: {}
})
</script>

<style lang="stylus" scoped>
@import '../../../src/styles/global.styl'

</style>