<template>
  <BackToTop />
  <LeButtonGroup style='margin: 0 auto;width: fit-content'>
    <LeButton round type='primary'>按钮1</LeButton>
    <LeButton type='danger' disabled>按钮2</LeButton>
  </LeButtonGroup>
  <LeBackToTop />
  <LeIcon name='loading' />
  <p>
    <LeLink
      href='https://www.cinob.cn'
      target='_blank'
      type="primary"
      icon="le-icon-edit"
    >编辑</LeLink>
    <LeLink
      href='https://www.cinob.cn'
      type="warning"
      disabled
      afterIcon="le-icon-loading"
    >编辑</LeLink>
  </p>
  
  <LeRadio v-model="radio" size='mini' border label='1'>单选1</LeRadio>
  <LeRadio v-model="radio" label='2' disabled>单选2</LeRadio>
  <p>
    <LeSwitch
      :value="switchValue"
      active-text="打开的值"
      inactive-text="关闭的值"
      active-color="#13ce66"
      inactive-color="red"
      :inactive-value="0"
      :active-value="100"
      name="chenchunhao"
    />
  </p>
  <p>
    <LeSwitch
      :value="value2"
      active-text="禁用打开"
      inactive-icon-class="le-icon-edit"
      disabled
    />
  </p>
</template>

<script setup>
import { ref } from 'vue'

const radio = ref('1')

const switchValue = ref(true)

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
