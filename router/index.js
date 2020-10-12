// router/index.js
import Vue from 'vue'
import Router from 'uni-simple-router'
Vue.use(Router)
//初始化
const router = new Router({
    routes: [
		{
			//注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
			path: '/pages/layout/index',
			name: 'layout'
		},
	]//路由表
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
  next()
})
// 全局路由后置守卫
router.afterEach((to, from) => {
})
export default router;