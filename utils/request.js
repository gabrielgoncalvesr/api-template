const axios = require("axios");

const post = async (url, query, params, headers) => {
    const response = await axios.post(`${url}?${query}`)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return response;
        });

    return response;
}

const get = async (url, query, headers) => {
    const response = await axios.get(`${url}?${query}`, { headers })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return response;
        });

    return response;
}

module.exports.post = post;
module.exports.get = get;