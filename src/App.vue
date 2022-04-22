<template>
	<div id="app">
		<div id="nav">
			<!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
			<el-row class="tac">
				<el-col :span="4">
					<el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="select">
						<el-menu-item index="1">
							<i class="el-icon-s-unfold"></i>
							<span slot="title">流管理</span>
						</el-menu-item>
						<el-menu-item index="2">
							<i class="el-icon-monitor"></i>
							<span slot="title">演示页面</span>
						</el-menu-item>
					</el-menu>
				</el-col>
				<el-col :span="20"><router-view /></el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
export default {
	created() {
	},
	mounted() {
		this.$router.push('/stream');
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
		select(key, keyPath) {
			console.log(key);
			if (key == 1) {
				this.$router.push('/stream');
			} else if (key == 2) {
				this.$router.push('/preview');
			}
		}
	}
};
</script>

<style></style>
