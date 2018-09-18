module.exports = function override(config, env) {
    const loaders = config.module.rules[1].oneOf;
    const lastLoaderIndex = loaders.length - 1;

    loaders.splice(lastLoaderIndex, 0, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
    });

    return config;
};
