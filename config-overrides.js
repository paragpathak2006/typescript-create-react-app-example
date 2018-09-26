const path = require('path');
const rewireCssModules = require('react-app-rewire-css-modules');

module.exports = function override(config, env) {

    config = rewireCssModules(config, env);

    // Logic to load either the src/environments/production or src/environments/staging file in the app.
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
        environment: path.join(__dirname, 'src', 'environments', env)
    });

    return config;
};
