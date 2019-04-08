import * as crypto from 'crypto';

/*
 * Generates a 25-character nonce for the request.
 *
 * @return {string}
 */
function makeNonce(): string {
    const nonceLength: number = 25;
    const characters: string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let nonce: string = '';
    let index: number = 0;

    while (index < nonceLength) {
        const randomIndex: number = Math.floor(Math.random() * characters.length);
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
function makeAuth(
    method: string,
    nonce: string,
    date: string,
    ctype: string,
    path: string,
    queryString: string,
    accessKey: string,
    secretKey: string
): string {
    // utf-8 encode accessKey, secretKey

    const hmacArray: string[] = [
        method,
        nonce,
        date,
        ctype,
        path,
        queryString,
        ''
    ];
    const hmacString: string = hmacArray.join('\n').toLowerCase();  // to utf-8 ?

    const signature = crypto.createHmac('sha256', secretKey)
                            .update(hmacString)
                            .digest('base64');

    const auth = 'On ' + accessKey + ':HmacSHA256:' + signature;  // decode accessKey, signature to utf-8 ?

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
function addAuthHeaders(
    method: string,
    path: string,
    queryParams: any,  // object
    headers: any,  // object
    accessKey: string,
    secretKey: string
): object {
    const nonce: string = makeNonce();
    const date: string = (new Date()).toUTCString();
    const contentType: string = headers['Content-Type'];
    let queryString: string = '';

    if (queryParams) {
        const query: string[] = [];
        for (const key in queryParams) {
          query.push(key + '=' + queryParams[key]);
        }
        queryString += query.join('&');  // urlencode?
    }

    const auth = makeAuth(
        method.toLowerCase(),
        nonce,
        date,
        contentType,
        path,
        queryString,
        accessKey,
        secretKey
    );

    const requestHeaders = {
        'Date': date,
        'On-Nonce': nonce,
        'Authorization': auth
    };

    Object.assign(headers, requestHeaders);

    return headers;
}

