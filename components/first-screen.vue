<template>
	<view class="first-screen">
		<square-box v-if="squareBoxShow" :row="60" :rol="30" @changeSquareBoxSize="changeSquareBoxSize"/>
	</view>
</template>

<script>
	import SquareBox from './square-box.vue'
	export default {
		components:{
			SquareBox
		},
		name: 'first-screen',
		data () {
			return {
				windowHeight: 0,
				windowWidth: 0,
				squareBoxShow: true
			}
		},
		created() {
			this.getSize()
			console.log('windowHeight', this.windowHeight)
			console.log('windowWidth', this.windowWidth)
		},
		methods: {
			getSize() {
				let _this = this
				uni.getSystemInfo({
					success(res) {
						_this.windowHeight = res.windowHeight
						_this.windowWidth = res.windowWidth
					}
				})
			},
			changeSquareBoxSize () {
				this.squareBoxShow = false
			}
		}
	}
</script>

<style>
	.first-screen{
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}
	.square-box{
		height: 75rpx;
		width: 75rpx;
		background-color: #007AFF;
	}
</style>
