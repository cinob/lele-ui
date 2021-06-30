# lele-ui
使用 `vue3` + `vite`仿写element-ui

## 安装
```bash
# npm
npm i lele-ui
# yarn
yarn add lele-ui
```

## 使用
```javascript
import { createApp } from 'vue'
import App from './App.vue'
// 全局引入样式文件
import 'lele-ui/dist/style.css'
import LeleUI from 'lele-ui'

createApp(App)
  .use(LeleUI)
  .mount('#app')
```



## 组件列表

- [x] `LeBackToTop`
- [x] `LeButtonGroup`
- [x] `LeButton`
- [x] `LeIcon`
- [x] `LeLink`
- [x] `LeRadio`
- [x] `LeSwitch`