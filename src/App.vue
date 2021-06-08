<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <LeBackToTop />
  <LeIcon name='loading'/>
  <p>
    <LeLink href='https://www.cinob.cn' target='_blank' type="primary" icon="le-icon-edit">编辑</LeLink>
    <LeLink href='https://www.cinob.cn' type="warning" disabled afterIcon="le-icon-loading">编辑</LeLink>
  </p>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
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
