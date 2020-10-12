import Vue from 'vue'
import App from './App'
import '@/static/style/base.less'
import basics from './pages/basics/home.vue'
Vue.component('basics',basics)

import components from './pages/component/home.vue'
Vue.component('components',components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false

import router from './router'
import { RouterMount } from 'uni-simple-router'
App.mpType = 'app'


import moment from 'moment'
Vue.filter('datafmt', function (input, fmtstring) {
    if (!input) return '-'
    return moment(input).format(fmtstring);
});

const app = new Vue({
    ...App
})
// #ifdef H5
	RouterMount(app,'#app');
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif

 



