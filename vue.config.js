module.exports = {
	devServer: {
		open: false, //浏览器自动打开页面
		host: "0.0.0.0", //如果是真机测试，就使用这个IP
		port: 8080,	//访问页面端口
		https: false,	//是否启用ssl
		hotOnly: false, //热更新（webpack已实现了，这里false即可）
		proxy: {
			//配置跨域
			'/api': {
				target: "http://localhost:8888",
				ws: true,
				changOrigin: true,
				pathRewrite: {
					'^/api': '/'
				}
			}
		},
		//去掉eslink警告
		overlay: {
			warnings: false,
			errors: false
		}
	}
}
