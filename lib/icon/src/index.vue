<template>
  <i :class="'le-icon-' + name"></i>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  name: String
})

</script>

<style lang="stylus" scoped>
@import '../../../src/styles/icon.styl'
</style>