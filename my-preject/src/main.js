// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 上面是ES6的语法    类似于下面的
//var App = require('./App.vue');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
