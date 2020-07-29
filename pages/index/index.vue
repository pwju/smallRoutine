<template>
	<view class="content">
		<first-screen/>
	</view>
</template>

<script>
	import FirstScreen from '../../components/first-screen.vue'
	export default {
		components: {
			FirstScreen
		},
		data() {
			return {
				title: 'Hello n...'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
