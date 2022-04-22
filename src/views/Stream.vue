<template>
	<div>
		<div>
			<el-row>
				<el-col><el-button @click="handleAdd" plain>新增流</el-button></el-col>
			</el-row>
		</div>

		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="url" label="流"></el-table-column>
			<el-table-column prop="remark" label="备注" width="100px"></el-table-column>
			<el-table-column prop="status" label="流状态" width="200px" align="center">
				<template slot-scope="scope">
					<el-switch
						@change="changeStatus($event, scope.row)"
						style="display: block"
						v-model="scope.row.status"
						active-color="#13ce66"
						inactive-color="#ff4949"
						active-text="开启推流"
						inactive-text="停止"
					></el-switch>
				</template>
			</el-table-column>
			<el-table-column label="操作" align="center" width="180px">
				<template slot-scope="scope">
					<!-- <el-button size="mini" type="text" icon="el-icon-view" @click="handleEdit(scope.row)">编辑</el-button> -->
					<!-- <el-button size="mini" type="text" icon="el-icon-view" @click="handleDel(scope.row)">删除</el-button> -->
					<el-button size="mini" type="text" icon="el-icon-view" @click="handleStop(scope.row)">停止并删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!-- 添加或修改app、微信端用户对话框 -->
		<el-dialog title="编辑流" :visible.sync="showAdd" width="650px" append-to-body>
			<el-form ref="form" :model="form" :rules="rules" label-width="120px">
				<el-form-item label="url" prop="url"><el-input v-model="form.url" placeholder="请输入流地址" /></el-form-item>
				<el-form-item label="备注" prop="remark"><el-input v-model="form.remark" placeholder="请输入备注" /></el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="submitForm">确 定</el-button>
				<el-button @click="showAdd = false">取 消</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {},
			rules: {},
			showAdd: false,
			tableData: []
		};
	},
	created() {
		this.getList();
	},
	methods: {
		getList() {
			this.$http.get('/list').then(res => {
				if (res.data.code == 200) {
					this.tableData = res.data.data;
				}
			});
		},

		handleAdd() {
			this.reset();
			this.showAdd = true;
		},

		handleStop(row) {
			this.$http.get('/del', { url: row.url }).then(res => {
				if (res.data.code == 200) {
					this.$message.success(res.data.msg);
					this.getList();
				}
			});
		},

		submitForm() {
			this.$http.get('/add', this.form).then(res => {
				if (res.data.code == 200) {
					this.$message.success(res.data.msg);
					this.showAdd = false;
					this.getList();
				}
			});
		},

		changeStatus(res, row) {
			const loading = this.$loading({
				lock: true,
				text: 'Loading',
				spinner: 'el-icon-loading',
				background: 'rgba(0, 0, 0, 0.7)'
			});
			if (res) {
				this.$http.get('/start', { url: row.url }).then(res => {
					if (res.data.code == 200) {
						this.$message.success(res.data.msg);
						setTimeout(() => {
							this.getList();
							loading.close();
						}, 3000);
					}
				});
			} else {
				this.$http.get('/stop', { url: row.url }).then(res => {
					if (res.data.code == 200) {
						this.$message.success(res.data.msg);
						setTimeout(() => {
							this.getList();
							loading.close();
						}, 3000);
					}
				});
			}
		},

		// 表单重置
		reset() {
			this.form = {
				id: undefined,
				num: undefined,
				remark: undefined
			};
		}
	}
};
</script>

<style></style>
