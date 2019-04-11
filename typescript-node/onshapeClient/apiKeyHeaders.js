"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = __importStar(require("crypto"));
/*
 * Generates a 25-character nonce for the request.
 *
 * @return {string}
 */
function makeNonce() {
    var nonceLength = 25;
    var characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var nonce = '';
    var index = 0;
    while (index < nonceLength) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        nonce += characters.charAt(randomIndex);
        index++;
    }
    return nonce;
}
/*
 * Creates authentication signature.
 *
 * @param {string} method
 * @param {string} date
 * @param {string} nonce
 * @param {string} path
 * @param {string} accessKey
 * @param {string} secretKey
 * @param {string} queryString
 * @param {string} ctype
 * @return {string}
 */
function makeAuth(method, nonce, date, ctype, path, queryString, accessKey, secretKey) {
    // utf-8 encode accessKey, secretKey
    var hmacArray = [
        method,
        nonce,
        date,
        ctype,
        path,
        queryString,
        ''
    ];
    var hmacString = hmacArray.join('\n').toLowerCase(); // to utf-8 ?
    var signature = crypto.createHmac('sha256', secretKey)
        .update(hmacString)
        .digest('base64');
    var auth = 'On ' + accessKey + ':HmacSHA256:' + signature; // decode accessKey, signature to utf-8 ?
    return auth;
}
/*
 * Adds request headers for authentication.
 *
 * @param {string} method
 * @param {string} path
 * @param {object} queryParams
 * @param {object} headers
 * @param {string} accessKey
 * @param {string} secretKey
 * @return {object}
 */
function addAuthHeaders(method, path, queryParams, // object
headers, // object
accessKey, secretKey) {
    var nonce = makeNonce();
    var date = (new Date()).toUTCString();
    var contentType = headers['Content-Type'];
    var queryString = '';
    if (queryParams) {
        var query = [];
        for (var key in queryParams) {
            query.push(key + '=' + queryParams[key]);
        }
        queryString += query.join('&'); // urlencode?
    }
    var auth = makeAuth(method.toLowerCase(), nonce, date, contentType, path, queryString, accessKey, secretKey);
    var requestHeaders = {
        'Date': date,
        'On-Nonce': nonce,
        'Authorization': auth
    };
    Object.assign(headers, requestHeaders);
    return headers;
}
