const path = require('path');

module.exports = function override(config, env) {
    const clientEnv = process.env.CLIENT_ENV || 'production';

    // Logic to load either the src/environments/production or src/environments/staging file in the app.
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
        environment: path.join(__dirname, 'src', 'environments', clientEnv)
    });

    return config;
};
