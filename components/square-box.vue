<template>
	<view class="square-box">
		<checkerboard-box/>
	</view>
</template>

<script>
	import checkerboardBox from './checkerboard-box.vue'
	export default {
		name: 'SquareBox',
		components: {
			checkerboardBox
		}
	}
</script>

<style scoped>
</style>
