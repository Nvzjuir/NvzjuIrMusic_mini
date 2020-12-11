<template>
	<view class="content">
		<button @click="handletest">获取</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			handletest() {
				console.log("ssss")
				uni.request({
					url:'http://192.168.0.17:3000/cellphone/existence/check',
					data:{
						phone:18774222422
					},
					method:'GET',
					success(res) {
						console.log(res)
					},
					fail(err) {
						console.log(err)
					}
				})
			}
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
</style>
