<template>
	<view class="layout">
		<view class="layout-content">
			<home v-if="active === 1"></home>
			<test v-if="active === 2"></test>
		</view>
		<view class="layout-tab">
			<view class="cu-bar tabbar bg-white">
				<view :class="active === 1 ? 'action text-sc' : 'action text-gray'" @click="navigate(1)">
					<image src="../../static/tabbar/tab_01.png" v-if="active !== 1"></image>
					<image src="../../static/tabbar/tab_01_active.png" v-if="active === 1"></image>
					首页
				</view>
				<view :class="active === 2 ? 'action text-sc' : 'action text-gray'" @click="navigate(2)">
					<image src="../../static/tabbar/tab_02.png" v-if="active !== 2"></image>
					<image src="../../static/tabbar/tab_02_active.png" v-if="active === 2"></image>
					服务超市
				</view>
				<view class="action text-gray add-action">
					<button class="cu-btn cuIcon-add bg-sc shadow"></button> 发布
				</view>
				<view :class="active === 3 ? 'action text-sc' : 'action text-gray'" @click="navigate(3)">
					<image src="../../static/tabbar/tab_03.png" v-if="active !== 3"></image>
					<image src="../../static/tabbar/tab_03_active.png" v-if="active === 3"></image>
					双创金融
				</view>
				<view :class="active === 4 ? 'action text-sc' : 'action text-gray'" @click="navigate(4)">
					<image src="../../static/tabbar/tab_04.png" v-if="active !== 4"></image>
					<image src="../../static/tabbar/tab_04_active.png" v-if="active === 4"></image>
					我的
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import home from '@/pages/home/index.vue'
	import test from '@/pages/test/index.vue'
	export default {
		data() {
			return {
				active: 1
			};
		},
		methods: {
			navigate(n) {
				this.active = n
			}
		},
		components: {
			home,
			test
		}
	}
</script>

<style lang="less" scoped>
.layout {
	height: 100vh;
	.layout-content {
		width: 100%;
		height: calc(100% - 50px);
	}
	.layout-tab {
		position: absolute;
		bottom: 0;
		width: 100%;
		image {
			display: block;
			width: 24px;
			height: 24px;
			margin: 0 auto 3px;
		}
	}
}
</style>
