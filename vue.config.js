const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    css: {
        loaderOptions: {
            css: {
                sourceMap:true
            },
            postcss: {
                // options here will be passed to postcss-loader
            }
        }
    },
    transpileDependencies: true,

})
