const { injectBabelPlugin } = require('react-app-rewired');
const PATH =require('path')

function resolve(url) {
    return PATH.resolve(__dirname,'src/',url)
}

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    //babelPlugin工具
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd-mobile', style: 'css' }],
        config
    );
    //配置别名
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': resolve(''),
        '@as' : resolve('assets'),
        '@c': resolve('components'),
        '@pages': resolve('pages'),
        '@lib': resolve('lib'),
    }
    console.log(config.resolve.alias);
    return config;
};