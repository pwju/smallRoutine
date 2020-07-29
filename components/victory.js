export default class Victory {
	static check(list){
		console.log('123')
		return this.judge(list)
	}
	static judge (list) {
		let now = list[list.length - 1]
		let _left = this.left(now, list) // 左
		let _right = this.right(now, list) // 右
		let _top = this.top(now, list) // 上
		let _bottom = this.bottom(now, list) // 下
		let _lt = this.lt(now, list) // 左上
		let _rt = this.rt(now, list) // 右上
		let _lb = this.lb(now, list) // 左下
		let _rb = this.rb(now, list) // 右下
		let result = this.basis([
			[_left, _right],
			[_top, _bottom],
			[_lt, _rb],
			[_rt, _lb]
		])
		return result
	}
	static basis (arr) {
		console.log('arr',arr)
		let result = []
		arr.forEach(item => {
			if ((item[0].length + item[1].length - 1) >=5) {
				result.push(item[0])
				result.push(item[1])
			}
		})
		return result
	}
	static left (now, list) {
		// 左
		let nowIndex = now.rowIndex
		let nowrolIndex = now.rolIndex
		let yArr = [now]
		for (let i = 0; i < 4; i++) {
			list.forEach(item => {
				if (item.rowIndex === nowIndex - 1 && item.rolIndex === nowrolIndex) {
					nowIndex -= 1
					yArr.push(item)
				}
			})
		}
		return yArr
	}
	static right (now, list) {
		// 右
		let nowIndex = now.rowIndex
		let nowrolIndex = now.rolIndex
		let yArr = [now]
		for (let i = 0; i < 4; i++) {
			list.forEach(item => {
				if (item.rowIndex === nowIndex + 1 && item.rolIndex === nowrolIndex) {
					nowIndex += 1
					yArr.push(item)
				}
			})
		}
		return yArr
	}
	static top (now, list) {
		//上
		let nowIndex = now.rolIndex
		let nowrowIndex = now.rowIndex
		let yArr = [now]
		for (let i = 0; i < 4; i++) {
			list.forEach(item => {
				if (item.rolIndex === nowIndex - 1 && item.rowIndex === nowrowIndex) {
					nowIndex -= 1
					yArr.push(item)
				}
			})
		}
		return yArr
	}
	static bottom (now, list) {
		let nowIndex = now.rolIndex
		let nowrowIndex = now.rowIndex
		let yArr = [now]
		for (let i = 0; i < 4; i++) {
			list.forEach(item => {
				if (item.rolIndex === nowIndex + 1 && item.rowIndex === nowrowIndex) {
					nowIndex += 1
					yArr.push(item)
				}
			})
		}
		return yArr
	}
	static lt (now, list) {
		// 左上
		let nowRolIndex = now.rolIndex - 1
		let nowRowIndex = now.rowIndex - 1
		let yArr = [now]
		for (let i = 0; i < 4; i++) {
			list.forEach(item => {
				if (item.rolIndex === nowRolIndex && item.rowIndex === nowRowIndex) {
					nowRolIndex -= 1
					nowRowIndex -= 1
					yArr.push(item)
				}
			})
		}
		return yArr
	}
	static rt (now, list) {
		// 右上
		let nowRolIndex = now.rolIndex - 1
		let nowRowIndex = now.rowIndex + 1
		let yArr = [now]
		for (let i = 0; i < 4; i++) {
			list.forEach(item => {
				if (item.rolIndex === nowRolIndex && item.rowIndex === nowRowIndex) {
					nowRolIndex -= 1
					nowRowIndex += 1
					yArr.push(item)
				}
			})
		}
		return yArr
	}
	static lb (now, list) {
		// 左下
		let nowRolIndex = now.rolIndex + 1
		let nowRowIndex = now.rowIndex - 1
		let yArr = [now]
		for (let i = 0; i < 4; i++) {
			list.forEach(item => {
				if (item.rolIndex === nowRolIndex && item.rowIndex === nowRowIndex) {
					nowRolIndex += 1
					nowRowIndex -= 1
					yArr.push(item)
				}
			})
		}
		return yArr
	}
	static rb (now, list) {
		// 右下
		let nowRolIndex = now.rolIndex + 1
		let nowRowIndex = now.rowIndex + 1
		let yArr = [now]
		for (let i = 0; i < 4; i++) {
			list.forEach(item => {
				if (item.rolIndex === nowRolIndex && item.rowIndex === nowRowIndex) {
					nowRolIndex += 1
					nowRowIndex += 1
					yArr.push(item)
				}
			})
		}
		return yArr
	}
}
