<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <Test />
  <BackToTop />
  <Button2 :color-data="data">测试修改样式的button组件</Button2>
  <p>测试dropitem组件</p>
  <div>
    <Dropdown :split-button="false">
      <p>下拉列表</p>
    </Dropdown>
  </div>
  <h2>按钮样式测试</h2>
  <p>基础用法</p>
  <ButtonGroup>
    <!-- <div> -->
    <Button>默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="info">信息按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">危险按钮</Button>
    <!-- </div> -->
  </ButtonGroup>
  <p>朴素按钮</p>
  <ButtonGroup>
    <!-- <div> -->
    <Button plain>默认按钮</Button>
    <Button type="primary" plain>主要按钮</Button>
    <Button type="success" plain>成功按钮</Button>
    <Button type="info" plain>信息按钮</Button>
    <Button type="warning" plain>警告按钮</Button>
    <Button type="danger" plain>危险按钮</Button>
    <!-- </div> -->
  </ButtonGroup>
  <p>圆角按钮</p>
  <ButtonGroup>
    <!-- <div> -->
    <Button round plain>默认按钮</Button>
    <Button type="primary" round size="mini">主要按钮</Button>
    <Button type="success" round size="small">成功按钮</Button>
    <Button type="info" round size="medium">信息按钮</Button>
    <Button type="warning" round>警告按钮</Button>
    <Button type="danger" round size="small">危险按钮</Button>
    <!-- </div> -->
  </ButtonGroup>
  <p>圆形图标</p>
  <ButtonGroup>
    <div>
      <Button class="le-icon-loading" circle size="mini"></Button>
      <Button type="primary" size="small" class="le-icon-loading" circle></Button>
      <Button type="success" size="medium" class="le-icon-loading" circle></Button>
      <Button type="info" class="le-icon-loading" circle></Button>
      <Button type="warning" class="le-icon-loading" circle></Button>
      <Button type="danger" class="le-icon-loading" size="mini" circle></Button>
    </div>
  </ButtonGroup>
  <p>禁用图标</p>
  <ButtonGroup>
    <!-- <div> -->
    <Button disabled>默认按钮</Button>
    <Button type="primary" disabled>主要按钮</Button>
    <Button type="success" disabled>成功按钮</Button>
    <Button type="info" disabled>信息按钮</Button>
    <Button type="warning" disabled>警告按钮</Button>
    <Button type="danger" disabled>危险按钮</Button>
    <!-- </div> -->
  </ButtonGroup>
  <ButtonGroup>
    <!-- <div> -->
    <Button disabled plain>朴素按钮</Button>
    <Button type="primary" plain disabled>主要按钮</Button>
    <Button type="success" plain disabled>成功按钮</Button>
    <Button type="info" plain disabled>信息按钮</Button>
    <Button type="warning" plain disabled>警告按钮</Button>
    <Button type="danger" plain disabled>危险按钮</Button>
    <!-- </div> -->
  </ButtonGroup>
  <p>文字按钮</p>
  <ButtonGroup>
    <!-- <div> -->
    <Button type="text">文字按钮</Button>
    <Button type="text" disabled>文字按钮</Button>
    <!-- </div> -->
  </ButtonGroup>
  <p>文字图标按钮</p>
  <ButtonGroup>
    <!-- <div> -->
    <Button class="le-icon-d-arrow-left" type="primary">图标文字按钮</Button>
    <Button type="success">文字图标按钮<i class="le-icon-d-arrow-right"></i></Button>
    <Button type="success"><i class="le-icon-d-arrow-right"></i>文字图标按钮</Button>
    <!-- </div> -->
  </ButtonGroup>

  <p>加载中按钮</p>
  <div>
    <Button :loading="true">加载中</Button>
  </div>
  <p>不同尺寸</p>
  <ButtonGroup>
    <!-- <div> -->
    <Button>默认按钮</Button>
    <Button type="success" size="medium">中等按钮</Button>
    <Button type="info" size="small">小型按钮</Button>
    <Button type="warning" size="mini">超小按钮</Button>
    <!-- </div> -->
  </ButtonGroup>
  <ButtonGroup>
    <Button type="primary">测试按钮组</Button>
    <Button type="info">测试按钮组</Button>
    <Button disabled type="info">测试按钮组</Button>
    <Button type="info">测试按钮组</Button>
    <Button type="info">测试按钮组</Button>
    <Button type="primary">测试按钮组</Button>
    <Button type="info">测试按钮组</Button>
  </ButtonGroup>

  <div>
    <p>单独使用圆角按钮</p>
    <Button round>默认按钮</Button>
    <Button type="primary" round size="mini">主要按钮</Button>
    <Button type="success" size="small" round>成功按钮</Button>
    <Button type="info" size="medium" round>信息按钮</Button>
    <Button type="warning" round>警告按钮</Button>
    <Button type="danger" round>危险按钮</Button>
  </div>

  <div>
    <Button size="mini" circle>mi</Button>
    <Button size="small" circle>sm</Button>
    <Button circle size="medium">me</Button>
  </div>
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'

import { ref } from 'vue'
import './styles/icon.styl'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
const data = ref({
  color: 'green',
  background_color: 'yellow',
})
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
