<template>
  <button
    class="le-button--default"
    @click="handleClick"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'le-button--' + type : '',
      size ? 'le-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
  >
    <i :class="['le-icon-loading']" v-if="loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'default',
  },
  size: String,
  icon: {
    type: String,
    default: '',
  },
  nativeType: {
    type: String,
    default: 'button',
  },
  loading: Boolean,
  disabled: Boolean,
  plain: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
})

function handleClick(evt) {
  this.$emit('click', evt)
}
</script>

<style lang="stylus" scoped>
@import '../../../src/styles/button.styl'
</style>