import React from 'react'
import ReactDOM from 'react-dom'
// 引入样式重置文件
import './assets/css/reset.styl'
// 引入组件默认主题
import 'element-theme-default'
// 引入iconfont样式
import './assets/css/iconfont/iconfont.css'

// 引入根组件
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
