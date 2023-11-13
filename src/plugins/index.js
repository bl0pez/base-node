const { getUUID } = require('./get-id.plugins');
const { getAge } = require('./get-age.plugin');
const { httpClientPlugin } = require('./http-client.plugin');
const buildLogger = require('./logger.plugin');

module.exports = {
    getUUID,
    getAge,
    httpClientPlugin,
    buildLogger
};

