const url = 'http://192.168.0.17:3000'
export default {
	data() {
		return {
		}
	},
	methods: {
		existence(){
			console.log(this.phoneData)
			console.log(url)
			uni.reLaunch({
				url:'http://192.168.0.17:3000/cellphone/existence/check',
				data:{
					phone:this.phoneData
				},
				success(res) {
					console.log(res)
				},
				fail(err) {
					console.log(err)
				}
			})
		}
		// loginHandel() {
		// 	if (this.isverCode) {
		// 		uni.request({
		// 			url: 'http://192.168.0.17:3000/captcha/verify',
		// 			data: {
		// 				phone: _this.phoneData,
		// 				captcha: _this.verCode
		// 			},
		// 			success(res) {
		// 				if (res.data.code == 200) {
		// 					uni.showToast({
		// 						icon: 'none',
		// 						position: 'bottom',
		// 						title: '登录成功'
		// 					})
		// 					uni.setStorageSync('setUserData', res.data.cookie);
		// 					uni.reLaunch({
		// 						url: '../index/index'
		// 					})
		// 				} else {
		// 					uni.showToast({
		// 						icon: 'none',
		// 						position: 'bottom',
		// 						title: '账号或验证码错误!'
		// 					});
		// 				}
		// 			}
		// 		})
		// 	} else {
		// 		if (/@/.test(this.phoneData)) {
		// 			uni.request({
		// 				url: 'http://192.168.0.17:3000/login',
		// 				data: {
		// 					email: _this.phoneData,
		// 					password: _this.passData
		// 				},
		// 				success(res) {
		// 					if (res.data.code == 200) {
		// 						uni.showToast({
		// 							icon: 'none',
		// 							position: 'bottom',
		// 							title: '登录成功'
		// 						})
		// 						uni.setStorageSync('setUserData', res.data.cookie);
		// 						uni.reLaunch({
		// 							url: '../index/index'
		// 						})
		// 					} else {
		// 						uni.showToast({
		// 							icon: 'none',
		// 							position: 'bottom',
		// 							title: '账号或密码错误!'
		// 						});
		// 					}
		// 				}
		// 			})
		// 		} else {
		// 			uni.request({
		// 				url: 'http://192.168.0.17:3000/login/cellphone',
		// 				data: {
		// 					phone: _this.phoneData,
		// 					password: _this.passData
		// 				},
		// 				success(res) {
		// 					if (res.data.code == 200) {
		// 						console.log(res)
		// 						uni.showToast({
		// 							icon: 'none',
		// 							position: 'bottom',
		// 							title: '登录成功'
		// 						})
		// 						uni.setStorageSync('setUserData', res.data.cookie);
		// 						uni.reLaunch({
		// 							url: '../index/index'
		// 						})
		// 					} else {
		// 						uni.showToast({
		// 							icon: 'none',
		// 							position: 'bottom',
		// 							title: '账号或密码错误!'
		// 						});
		// 					}
		// 				}
		// 			})
		// 		}
		// 	}
		// }
	}
}
