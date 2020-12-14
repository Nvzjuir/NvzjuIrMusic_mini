<template>
	<view>
		<uni-nav-bar left-icon="bars" title="首页" @clickLeft="test"></uni-nav-bar>
		<uni-drawer ref="draw">
			<view style="padding:30rpx; ">
				<view>
					<text class="cu-avatar round margin-left bg-red">B</text>
					<text class="padding-letf">立即登录</text>
				</view>
				<view class="cu-list menu sm-border card-menu margin-top">
					<!-- <view class="cu-item arrow">
						<view class="content">
							<text class="cuIcon-circlefill text-grey"></text>
							<text class="text-grey">图标 + 标题</text>
						</view>
					</view> -->
				</view>
			</view>
		</uni-drawer>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			test() {
				this.$refs.draw.open()
			}
		}
	}
</script>

<style>
</style>
