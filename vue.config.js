// vue.config.js
module.exports = {
    lintOnSave: 'warning',
    devServer: {
        proxy: {
            '^/portal.luqmanr.xyz': {
                target: 'https://portal.luqmanr.xyz/',
                pathRewrite: {
                    '^/portal.luqmanr.xyz': ''
                }
            },
            '^/riset.luqmanr.xyz': {
                target: 'https://riset.luqmanr.xyz/',
                pathRewrite: {
                    '^/riset.luqmanr.xyz': ''
                }
            }               
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/fr_analytics'
    : '/'
}