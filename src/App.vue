<template>
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <LeBackToTop />
  <LeIcon name='loading'/>
  <p>
    <LeLink href='https://www.cinob.cn' target='_blank' type="primary" icon="le-icon-edit">编辑</LeLink>
    <LeLink href='https://www.cinob.cn' type="warning" disabled afterIcon="le-icon-loading">编辑</LeLink>
  </p>
  <LeRadio v-model="radio" label='1'>单选1</LeRadio>
  <LeRadio v-model="radio" label='2'>单选2</LeRadio>
</template>

<script setup>
import { ref } from 'vue'
const radio = ref(null)
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 200vh
}
</style>
