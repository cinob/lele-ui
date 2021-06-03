<template>
  <transition name="le-fade-in">
    <div
      class="back-to-top"
      :style="style"
      v-if="visible"
      @click.stop='handleClick'
    >
      <slot>top</slot>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, computed, ref, onMounted } from 'vue'
import { useEventListener, useThrottleFn, useRafFn } from '@vueuse/core'
const props = defineProps({
  visibilityHeight: {
    type: Number,
    default: 200
  },
  right: {
    type: Number,
    default: 40
  },
  bottom: {
    type: Number,
    default: 40
  }
})
const style = computed(() => ({ right: props.right + 'px', bottom: props.bottom + 'px'}))

const container = ref(document)
const el = ref(document.documentElement)
const visible = ref(false)

function handleClick () {
  const beginScroll = el.value.scrollTop
  const beginTime = Date.now()
  const progress = ref(0)
  const { pause } = useRafFn(() => {
    progress.value = (Date.now() - beginTime) / 500
    el.value.scrollTop = beginScroll * (1 - progress.value)
    if (progress.value > 1) {
      pause()
      el.value.scrollTop = 0
    }
  })
}

onMounted(() => {
  useEventListener(container, 'scroll', useThrottleFn(() => {
    const scrollTop = el.value.scrollTop
    visible.value = scrollTop >= props.visibilityHeight
  }, 100))
})

</script>

<style lang="stylus" scoped>
@import '../../../src/styles/global.styl'
.back-to-top
  position fixed
  background-color #fff
  square(40px)
  border-radius 50%
  color #409eff
  flex(center)
  align-items center
  font-size 20px
  box-shadow 0 0 6px rgba(0, 0, 0, 12%)
  @extend .pointer
  z-index 5
</style>