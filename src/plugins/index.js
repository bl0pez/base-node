const { getUUID } = require('./get-id.plugins');
const { getAge } = require('./get-age.plugin');
const { httpClientPlugin } = require('./http-client.plugin');

module.exports = {
    getUUID,
    getAge,
    httpClientPlugin
};

