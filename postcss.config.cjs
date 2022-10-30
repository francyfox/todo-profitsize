module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-preset-env'),
        require('postcss-nested'),
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default',
        }),
    ]
}