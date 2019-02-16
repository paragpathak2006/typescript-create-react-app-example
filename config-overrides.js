const path = require('path');
const {override, addWebpackAlias} = require('customize-cra');

module.exports = override(
    addWebpackAlias({
        environment: path.join(__dirname, 'src', 'environments', process.env.NODE_ENV)
    })
);
