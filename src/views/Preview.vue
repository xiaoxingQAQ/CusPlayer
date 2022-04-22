<template>
	<div>
		<div style="margin-left: 12px;">
			<el-row :gutter="1" type="flex" align="middle">
				<el-col :span="3">选择流快速填写：</el-col>
				<el-col :span="12">
					<el-select @change="changeSelectValue" v-model="selectValue" placeholder="可以从这里选择流" style="width: 100%;">
						<el-option v-for="item in tableData" :key="item.url" :label="item.remark + '--' + item.url" :value="item.url"></el-option>
					</el-select>
				</el-col>
			</el-row>
			<el-row :gutter="1" type="flex" align="middle">
				<el-col :span="3">播放地址：</el-col>
				<el-col :span="12"><el-input v-model="playUrl" placeholder="播放地址"></el-input></el-col>
				<el-col :span="9"><el-button @click="handlePlay" type="primary">播放</el-button></el-col>
			</el-row>
		</div>

		<div style="margin: 10px 10px 10px 10px;">
			<el-row :gutter="1">
				<el-col :span="2"><el-button @click="selectType(0)" type="primary">单屏</el-button></el-col>
				<el-col :span="2"><el-button @click="selectType(1)" type="primary">四分屏</el-button></el-col>
				<el-col :span="2"><el-button @click="selectType(2)" type="primary">九分屏</el-button></el-col>
				<el-col :span="2"><el-button @click="selectType(3)" type="primary">十六分屏</el-button></el-col>
			</el-row>
		</div>

		<div style="display: flex;justify-content: center;align-items: center;position: fixed;bottom: 0px;top: 150px;width: 80%;">
			<!-- 1*1 -->
			<div style="width: 100%;height: 100%;margin-left: 20px;" v-if="selected == 0">
				<el-row :gutter="10" type="flex" style="min-height: 90%;" justify="center">
					<el-col :span="24">
						<div @click="clickVideo(0)" :class="videoIndex == 0 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video0"></cus-player></div>
					</el-col>
				</el-row>
			</div>
			<!-- 2*2 -->
			<div style="width: 100%;height: 100%;margin-left: 20px;" v-else-if="selected == 1">
				<el-row :gutter="1" type="flex" style="height: 45%;" justify="center">
					<el-col :span="12">
						<div @click="clickVideo(0)" :class="videoIndex == 0 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video0"></cus-player></div>
					</el-col>
					<el-col :span="12">
						<div @click="clickVideo(1)" :class="videoIndex == 1 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video1"></cus-player></div>
					</el-col>
				</el-row>
				<el-row :gutter="1" type="flex" style="height: 45%;" class="row-bg" justify="center">
					<el-col :span="12">
						<div @click="clickVideo(2)" :class="videoIndex == 2 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video2"></cus-player></div>
					</el-col>
					<el-col :span="12">
						<div @click="clickVideo(3)" :class="videoIndex == 3 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video3"></cus-player></div>
					</el-col>
				</el-row>
			</div>
			<!-- 3*3 -->
			<div style="height:100%;width:100%;margin-left: 20px;" v-else-if="selected == 2">
				<el-row :gutter="1" type="flex" style="height: 30%;" justify="center">
					<el-col :span="8">
						<div @click="clickVideo(0)" :class="videoIndex == 0 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video0"></cus-player></div>
					</el-col>
					<el-col :span="8">
						<div @click="clickVideo(1)" :class="videoIndex == 1 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video1"></cus-player></div>
					</el-col>
					<el-col :span="8">
						<div @click="clickVideo(2)" :class="videoIndex == 2 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video2"></cus-player></div>
					</el-col>
				</el-row>
				<el-row :gutter="1" type="flex" style="height: 30%;" justify="center">
					<el-col :span="8">
						<div @click="clickVideo(3)" :class="videoIndex == 3 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video3"></cus-player></div>
					</el-col>
					<el-col :span="8">
						<div @click="clickVideo(4)" :class="videoIndex == 4 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video4"></cus-player></div>
					</el-col>
					<el-col :span="8">
						<div @click="clickVideo(5)" :class="videoIndex == 5 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video5"></cus-player></div>
					</el-col>
				</el-row>
				<el-row :gutter="1" type="flex" style="height: 30%;" class="row-bg" justify="center">
					<el-col :span="8">
						<div @click="clickVideo(6)" :class="videoIndex == 6 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video6"></cus-player></div>
					</el-col>
					<el-col :span="8">
						<div @click="clickVideo(7)" :class="videoIndex == 7 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video7"></cus-player></div>
					</el-col>
					<el-col :span="8">
						<div @click="clickVideo(8)" :class="videoIndex == 8 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video8"></cus-player></div>
					</el-col>
				</el-row>
			</div>
			<!-- 4*4 -->
			<div style="height:100%;width:100%;margin-left: 20px;" v-else-if="selected == 3">
				<el-row :gutter="1" type="flex" style="height: 22.5%;" justify="center">
					<el-col :span="6">
						<div @click="clickVideo(0)" :class="videoIndex == 0 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video0"></cus-player></div>
					</el-col>
					<el-col :span="6">
						<div @click="clickVideo(1)" :class="videoIndex == 1 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video1"></cus-player></div>
					</el-col>
					<el-col :span="6">
						<div @click="clickVideo(2)" :class="videoIndex == 2 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video2"></cus-player></div>
					</el-col>
					<el-col :span="6">
						<div @click="clickVideo(3)" :class="videoIndex == 3 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video3"></cus-player></div>
					</el-col>
				</el-row>
				<el-row :gutter="1" type="flex" style="height: 22.5%;" justify="center">
					<el-col :span="6">
						<div @click="clickVideo(4)" :class="videoIndex == 4 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video4"></cus-player></div>
					</el-col>
					<el-col :span="6">
						<div @click="clickVideo(5)" :class="videoIndex == 5 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video5"></cus-player></div>
					</el-col>
					<el-col :span="6">
						<div @click="clickVideo(6)" :class="videoIndex == 6 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video6"></cus-player></div>
					</el-col>
					<el-col :span="6">
						<div @click="clickVideo(7)" :class="videoIndex == 7 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video7"></cus-player></div>
					</el-col>
				</el-row>
				<el-row :gutter="1" type="flex" style="height: 22.5%;" justify="center">
					<el-col :span="6">
						<div @click="clickVideo(8)" :class="videoIndex == 8 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video8"></cus-player></div>
					</el-col>
					<el-col :span="6">
						<div @click="clickVideo(9)" :class="videoIndex == 9 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video9"></cus-player></div>
					</el-col>
					<el-col :span="6">
						<div @click="clickVideo(10)" :class="videoIndex == 10 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video10"></cus-player></div>
					</el-col>
					<el-col :span="6">
						<div @click="clickVideo(11)" :class="videoIndex == 11 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video11"></cus-player></div>
					</el-col>
				</el-row>
				<el-row :gutter="1" type="flex" style="height: 22.5%;" justify="center">
					<el-col :span="6">
						<div @click="clickVideo(12)" :class="videoIndex == 12 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video12"></cus-player></div>
					</el-col>
					<el-col :span="6">
						<div @click="clickVideo(13)" :class="videoIndex == 13 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video13"></cus-player></div>
					</el-col>
					<el-col :span="6">
						<div @click="clickVideo(14)" :class="videoIndex == 14 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video14"></cus-player></div>
					</el-col>
					<el-col :span="6">
						<div @click="clickVideo(15)" :class="videoIndex == 15 ? 'selectVideo' : 'video'"><cus-player @clickPlayer="clickPlayer" ref="video15"></cus-player></div>
					</el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
import 'xgplayer';
import FlvJsPlayer from 'xgplayer-flv.js';
import CusPlayer from './CusPlayer';
export default {
	components: {
		CusPlayer
	},
	data() {
		return {
			selected: 0, //表格类型
			videoIndex: 0, //表格索引
			tableData: [], //列表
			selectValue: '', //当前选择的相机
			playUrl: '' //播放的url
		};
	},
	created() {
		this.getList();
	},
	methods: {
		selectType(selected) {
			this.selected = selected;
		},

		clickVideo(index) {
			this.videoIndex = index;
		},

		changeSelectValue() {
			this.playUrl = 'ws://localhost:8866/live?url=' + this.selectValue;
		},

		getList() {
			this.$http.get('/list').then(res => {
				if (res.data.code == 200) {
					this.tableData = res.data.data;
				}
			});
		},

		handlePlay() {
			if (this.playUrl) {
				let ref = 'video' + this.videoIndex;
				this.$refs[ref].createPlayer(this.playUrl, true, this.videoIndex);
			} else {
				this.$message.error('请填写播放地址');
			}
		},

		clickPlayer(index) {
			this.videoIndex = index;
		}
	}
};
</script>

<style>
.selectVideo {
	border: solid 2px red;
	height: 100%;
	width: 100%;
	position: relative;
}
.video {
	border: solid 1px #55557f;
	height: 100%;
	width: 100%;
	position: relative;
}
</style>
