<template>
	<view class="checkerboard-box">
		<view class="lattice" v-for="(item, index) in latticeArr" :key="index">
			<view 
				class="lattice-box" 
				v-for="(boxItem, boxIndex) in item" 
				@tap="latticeBoxTap(boxItem, boxIndex, index)" 
				:key="boxIndex">
				<image v-if="index === 0 && boxIndex === 0" class="szx" src="../static/szx3.png"></image>
				<image v-else-if="index === 13 && boxIndex === 0"  class="szx" src="../static/szx7.png"></image>
				<image v-else-if="index === 0 && boxIndex === 13" class="szx" src="../static/szx4.png"></image>
				<image v-else-if="index === 13 && boxIndex === 13" class="szx" src="../static/szx6.png"></image>
				<image v-else-if="index === 13 && boxIndex !== 0" class="szx" src="../static/szx5.png"></image>
				<image v-else-if="index === 0 && boxIndex !== 0"  class="szx" src="../static/szx2.png"></image>
				<image v-else-if="boxIndex == 0"  class="szx" src="../static/szx9.png"></image>
				<image v-else-if="boxIndex === 13" class="szx" src="../static/szx8.png"></image>
				<image v-else class="szx" src="../static/szx1.png"></image>
					<view 
						class="piece" 
						v-if="boxItem.checked === true" 
						:class="{'win': boxItem.win}"
						:style="{'background-color': boxItem.style.backgroundColor}"></view>
				</view>
		</view>
		<view class="success-text">{{ successTxt }}</view>
		<button v-show="isShow" @tap="reopen">重新开始</button>
	</view>
</template>

<script>
	import Victory from './victory.js'
	export default {
		name: 'checkerboardBox',
		data () {
			return {
				latticeArr: [],
				checkedArr: {
					red: [],
					black: []
				},
				nowRole: 'red',
				roleColor: {
					red: 'red',
					black: '#000'
				},
				roleTxt: {
					red: '红方',
					black: '黑方'
				},
				win: false,
				successTxt: '',
				isShow: false
			}
		},
		created () {
			this.init()
		},
		methods: {
			init () {
				this.latticeArr = this.getlatticeArr()
			},
			clear () {
				this.latticeArr = []
				this.checkedArr.red = []
				this.checkedArr.black = []
				this.nowRole = 'red'
				this.win = false,
				this.successTxt = ''
			},
			reopen () {
				this.clear()
				this.init()
				this.isShow = false
			},
			getSize() {
				let _this = this
				uni.getSystemInfo({
					success(res) {
						_this.windowHeight = res.windowHeight
						_this.windowWidth = res.windowWidth
					}
				})
			},
			latticeBoxTap (boxItem, boxIndex, index) {
				if (boxItem.checked === false && this.win === false) {
					boxItem.checked = true
					boxItem.style.backgroundColor = this.roleColor[this.nowRole]
					boxItem.role = this.nowRole
					this.checkedArr[this.nowRole].push({
						rowIndex: boxIndex, // 列
						rolIndex: index // 行
					})
					let win= Victory.judge(this.checkedArr[this.nowRole])
					if (win.length > 0) {
						this.winFn(win)
						this.successTxt = `${this.roleTxt[this.nowRole]} 获胜`
						this.win = true
						this.isShow = true
					} else {
						this.switchRole()
					}
				}
			},
			winFn (arr) {
				let _this = this
				console.log(_this.latticeArr)
				arr.forEach(item => {
					item.forEach(nowItem => {
						_this.latticeArr[nowItem.rolIndex][nowItem.rowIndex].win = true
					})
				})
			},
			switchRole () {
				if (this.nowRole === 'red') {
					this.nowRole = 'black'
				} else {
					this.nowRole = 'red'
				}
			},
			getlatticeArr() {
				let lattices = []
				for (let i = 0; i < 14; i++) {
					let boxs = []
					for(let b = 0; b < 14; b++){
						boxs.push({
							checked: false,
							win: false,
							role: "",
							style: {
								backgroundColor: '#ddd'
							}
						})
					}
					lattices.push(boxs)
				}
				return lattices
			}
		}
	}
</script>

<style scoped>
.checkerboard-box{
	width: 700rpx;
	height: 700rpx;
	background-color: #F2F6FC;
	margin: 25rpx;
}
.lattice::after{
	content:"";
	height:0;
	line-height:0;
	display:block;
	visibility:hidden;
	clear:both;
}
.lattice-box{
	width: 50rpx;
	height: 50rpx;
	float: left;
	font-size: 18rpx;
	position: relative;
}
.piece{
	width: 34rpx;
	height: 34rpx;
	border-radius: 50%;
	background-color: #4CD964;
	position: absolute;
	top: 8rpx;
	left: 8rpx;
	box-shadow: 2rpx 2rpx 2rpx #E4E7ED;
}
.szx{
	width: 100%;
	height: 100%;
}
.win{
	border: 1px solid #fff;
}
.success-text{
	margin: 32rpx 0 ;
	text-align: center;
	font-size: 32rpx;
	color: #606266;
}
</style>
