<template>
  <a
    :class="[
      'le-link',
      {
        [`le-link--${type}`]: type,
        'is-underline': underline && !disabled,
        'is-disabled': disabled
      }
    ]"
    :href="!disabled ? href : null"
    v-bind="$attrs"
    @click="handleClick"
  >
    <i :class="icon" v-if="icon"></i>

    <span v-if="$slots.default" class="le-link--inner">
      <slot />
    </span>

    <i :class="afterIcon" v-if="afterIcon"></i>
  </a>
</template>

<script setup>
import { defineEmit, defineProps } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  underline: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  href: String,
  icon: String,
  afterIcon: String
})

const emit = defineEmit(['click'])

function handleClick (e) {
  if (!props.disabled && !props.href) {
    emit('click')
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../src/styles/icon.styl'
@import '../../../src/styles/var.styl'

.le-link
  display inline-flex
  flex-direction row
  align-items center
  justify-content center
  vertical-align middle
  position relative
  text-decoration none
  outline none
  cursor pointer
  padding 0
  font-size $link-font-size
  font-weight $link-font-weight
  [class*='le-icon-'] + span[class='le-link--inner']
  span[class='le-link--inner'] + [class*='le-icon-']
    margin-left 5px
  /&.is-underline
    &:hover:after
      content ""
      position absolute
      left 0
      right 0
      height 0
      bottom 0
      border-bottom 1px solid $link-default-active-color
  /&.is-disabled
    cursor not-allowed
.le-link--default
  color $link-default-font-color
  &:hover
    color $link-default-active-color
  &:after
    border-color $link-default-active-color
  /&.is-disabled
    color $link-disabled-font-color

$typeName = primary danger success warning info
$typeVal = $link-primary-font-color $link-danger-font-color $link-success-font-color $link-warning-font-color $link-info-font-color

linkColor($name, $color)
  &.le-link--{$name}
    color $color
    &:hover
      color lighten($color, 20%)
    &:after
      border-color $color
    /&.is-disabled
      color lighten($color, 50%)
    /&.is-underline
      &:hover:after
        border-color $color
for $index in (0..4)
  linkColor($typeName[$index], $typeVal[$index])
</style>