const { request, response } = require("../app");

module.exports = (request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if(request.method === 'OPTIONS'){
        return response.sendStatus(200);
    };
    next();
}