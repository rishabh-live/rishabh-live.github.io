const withCSS = require('@zeit/next-css')


module.exports = withCSS({
    cssLoaderOptions: {
        url: false
    }
});

// module.exports = {
//     basePath: '/rishabh-live.github.io',
//     assetPrefix: '/rishabh-live.github.io'
// }