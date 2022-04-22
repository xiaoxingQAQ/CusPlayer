import axios from 'axios'

// let protocol = window.location.protocol; //协议
// let host = window.location.host; //主机
// let port = window.location.port; //主机
// let reg = /^localhost+/;
// if(reg.test(host)) {
//   //若本地项目调试使用
//    axios.defaults.baseURL = 'http://localhost:8888';
// } else {
//    //动态请求地址             协议               主机
//    axios.defaults.baseURL = protocol + "//" + host  + ":" + port;
// }

if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "/api";
}

//创建axios实例
var service = axios.create({
	// baseURL: 'http://localhost:9988',
	timeout: 15000,
	headers: {
		// 'content-type': 'application/json',
		// "token":'14a1347f412b319b0fef270489f'
	}
})
export default {
	service,

	//get请求
	get(url, data) {
		return service({
			url: url,
			method: 'get',
			params: data
		})
	},

	post(url, data) {
		return service({
			url: url,
			method: 'post',
			data
		})
	},

	put(url, data) {
		return service({
			url: url,
			method: 'put',
			data
		})
	},

	delete(url, data) {
		return service({
			url: url,
			method: 'delete',
			data
		})
	}
}
