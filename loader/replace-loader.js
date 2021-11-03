const {getOptions} = require('loader-utils')

module.exports = function (source) {
    // 获取loader的options的配置
    const options = getOptions(this) || {};

    return source.replace(/Edit/g, options.words)

}