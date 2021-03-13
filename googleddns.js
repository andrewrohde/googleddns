var https = require('https');
const files = require('./fileReadWrite');
var domain = process.env.DDNS_DOMAIN;
var username = process.env.DDNS_USERNAME;
var password = process.env.DDNS_PASSWORD;
var ipResponse = '';
var currentIP = '';

getIPUpdatePath = function(ip) {
    return '/nic/update?hostname=' + domain + '&myip=' + ip;
}

var optionsIPRequest = {
    host: 'api.ipify.org',
    path: '/?format=json'
};

var optionsIPUpdate = {
    host: 'domains.google.com',
    port: 443,
    auth: username + ':' + password,
    path: '',
    method: 'POST'
};

callbackIPRequest = function(response) {

    response.on('data', function (chunk) {
        ipResponse = JSON.parse(chunk);
    });

    response.on('end', function () {
        currentIP = ipResponse.ip;
        if (files.readPreviousIP() != currentIP ) {
            files.writePreviousIP(currentIP);
            updateIP(currentIP);                
        } 
    });

    response.on('error', function (error) {
        console.log(error);
    });
}

updateIP = function(ip) {
    optionsIPUpdate.path = getIPUpdatePath(ip);
    https.request(optionsIPUpdate, callbackIPUpdate).end();
}

callbackIPUpdate = function(response) {

    response.on('data', function (chunk) {
        var buffer = Buffer.from(chunk);
        console.log(buffer.toString());
    });

    response.on('end', function () {});

    response.on('error', function (error) {
        console.log(error);
    });

};

if(domain && username && password)
    https.request(optionsIPRequest, callbackIPRequest).end();
else
    console.log('Domain, Username, or Password is blank. Check env variables.')