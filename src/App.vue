<template>
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <Test />
  <BackToTop />
  <LeButton circle size='small' type='success'>圆形按钮</LeButton>
  <LeButton type="primary" icon="le-icon-edit">按钮</LeButton>
  <LeButton type="warning" icon="le-icon-edit" circle ></LeButton>
  <div style="display: flex;justify-content: center;">
    <LeButtonGroup>
      <LeButton round plant>朴素按钮</LeButton>
      <LeButton round type="info" disabled>禁用按钮</LeButton>
      <LeButton size='medium'
                type='primary'>medium</LeButton>
      <LeButton size='small'
                type='danger'>small</LeButton>
      <LeButton size='mini'
                type='danger'
                plain
                round>mini</LeButton>
    </LeButtonGroup>
  </div>
  <LeBackToTop />
  <LeIcon name='loading' />
  <p>
    <LeLink href='https://www.cinob.cn'
            target='_blank'
            type="primary"
            icon="le-icon-edit">编辑</LeLink>
    <LeLink href='https://www.cinob.cn'
            type="warning"
            disabled
            afterIcon="le-icon-loading">编辑</LeLink>
  </p>
  <p>
    <LeRadio v-model="radio"
           label='1'>单选1</LeRadio>
    <LeRadio v-model="radio"
            label='2'>单选2</LeRadio>
  </p>
  <p>
    <LeSwitch :value="value1"
              :width='70'
              active-text="打开的值"
              inactive-text="关闭的值"
              active-color="#13ce66"
              inactive-color="red"
              @change='change'
              :inactive-value="0"
              :active-value="100"
              name="chenchunhao"
              >
    </LeSwitch>
    <LeSwitch :value="value2"
              :width='50'
              active-text="禁用打开的值"
              inactive-icon-class="le-icon-edit"
              active-color="#13ce66"
              inactive-color="red"
              disabled
              >
    </LeSwitch>
  </p>
  
</template>

<script setup>
import { ref } from 'vue'
const radio = ref(null)
const value1 = ref(true)

// switch 的值改变事件
function change (val) {
  console.log('switch组件当前的值', val);
}

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
