<template>
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <Test />
  <BackToTop />
  
  <h2>按钮样式测试</h2>
  <LeButton circle size='small'>普通圆形small大小按钮</LeButton>
  <p>按钮组演示</p>
  <LeButtonGroup>
    <LeButton round>默认圆角按钮</LeButton>
    <LeButton size='medium' type='primary'>medium大小的primary样式按钮</LeButton>
    <LeButton circle size='small' type='danger'>圆形</LeButton>
    <LeButton size='mini' type='danger' plain round>mini大小danger样式圆角朴素按钮</LeButton>
  </LeButtonGroup>
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
  height: 200vh;
}
</style>
