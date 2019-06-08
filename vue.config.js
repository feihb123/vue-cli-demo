module.exports = {

    devServer: {
        proxy: { // 配置跨域
            '/api': {
　　　　　　　　　　//要访问的跨域的api的域名
                target: 'http://127.0.0.1:8008',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: app => { }
    }
}