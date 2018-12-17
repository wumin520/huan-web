module.exports = {
    devServer: {
        proxy: {
            '^/v1': {
                target: 'http://huan.me.com:8891',
                // ws: true,
                changeOrigin: true
            },
            '^/s5': {
                target: 'https://qianka.com'
            }
        }
    }
    // baseUrl: '/m/'
}