/**
 * Onshape REST API
 * The Onshape REST API consumed by all clients.
 *
 * OpenAPI spec version: 1.96
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest = require('request');
import http = require('http');
import Promise = require('bluebird');

/* tslint:disable:no-unused-locals */

import { ObjectSerializer, Authentication, HttpBasicAuth, ApiKeyAuth, OAuth, VoidAuth } from '../model/models';

let defaultBasePath = 'https://cad.onshape.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum MetadataApiApiKeys {
}

export class MetadataApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'OAuth2': new OAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: MetadataApiApiKeys, value: string) {
        (this.authentications as any)[MetadataApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.OAuth2.accessToken = token;
    }

    /**
     * 
     * @param did 
     * @param vid 
     * @param eid 
     * @param otype 
     * @param oid 
     * @param pid 
     * @param configuration 
     * @param linkDocumentId 
     */
    public getVEOPStandardContentMetadata (did: string, vid: string, eid: string, otype: string, oid: string, pid: string, configuration?: string, linkDocumentId?: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/api/metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'vid' + '}', encodeURIComponent(String(vid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'otype' + '}', encodeURIComponent(String(otype)))
            .replace('{' + 'oid' + '}', encodeURIComponent(String(oid)))
            .replace('{' + 'pid' + '}', encodeURIComponent(String(pid)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new Error('Required parameter did was null or undefined when calling getVEOPStandardContentMetadata.');
        }

        // verify required parameter 'vid' is not null or undefined
        if (vid === null || vid === undefined) {
            throw new Error('Required parameter vid was null or undefined when calling getVEOPStandardContentMetadata.');
        }

        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new Error('Required parameter eid was null or undefined when calling getVEOPStandardContentMetadata.');
        }

        // verify required parameter 'otype' is not null or undefined
        if (otype === null || otype === undefined) {
            throw new Error('Required parameter otype was null or undefined when calling getVEOPStandardContentMetadata.');
        }

        // verify required parameter 'oid' is not null or undefined
        if (oid === null || oid === undefined) {
            throw new Error('Required parameter oid was null or undefined when calling getVEOPStandardContentMetadata.');
        }

        // verify required parameter 'pid' is not null or undefined
        if (pid === null || pid === undefined) {
            throw new Error('Required parameter pid was null or undefined when calling getVEOPStandardContentMetadata.');
        }

        if (configuration !== undefined) {
            localVarQueryParameters['configuration'] = ObjectSerializer.serialize(configuration, "string");
        }

        if (linkDocumentId !== undefined) {
            localVarQueryParameters['linkDocumentId'] = ObjectSerializer.serialize(linkDocumentId, "string");
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.OAuth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param pid 
     * @param configuration 
     * @param linkDocumentId 
     * @param inferMetadataOwner 
     */
    public getWMVEPMetadata (did: string, wvm: string, wvmid: string, eid: string, pid: string, configuration?: string, linkDocumentId?: string, inferMetadataOwner?: boolean) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/api/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/p/{pid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'pid' + '}', encodeURIComponent(String(pid)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new Error('Required parameter did was null or undefined when calling getWMVEPMetadata.');
        }

        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new Error('Required parameter wvm was null or undefined when calling getWMVEPMetadata.');
        }

        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new Error('Required parameter wvmid was null or undefined when calling getWMVEPMetadata.');
        }

        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new Error('Required parameter eid was null or undefined when calling getWMVEPMetadata.');
        }

        // verify required parameter 'pid' is not null or undefined
        if (pid === null || pid === undefined) {
            throw new Error('Required parameter pid was null or undefined when calling getWMVEPMetadata.');
        }

        if (configuration !== undefined) {
            localVarQueryParameters['configuration'] = ObjectSerializer.serialize(configuration, "string");
        }

        if (linkDocumentId !== undefined) {
            localVarQueryParameters['linkDocumentId'] = ObjectSerializer.serialize(linkDocumentId, "string");
        }

        if (inferMetadataOwner !== undefined) {
            localVarQueryParameters['inferMetadataOwner'] = ObjectSerializer.serialize(inferMetadataOwner, "boolean");
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.OAuth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param configuration 
     * @param linkDocumentId 
     * @param inferMetadataOwner 
     */
    public getWMVEPsMetadata (did: string, wvm: string, wvmid: string, eid: string, configuration?: string, linkDocumentId?: string, inferMetadataOwner?: boolean) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/api/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/p'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new Error('Required parameter did was null or undefined when calling getWMVEPsMetadata.');
        }

        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new Error('Required parameter wvm was null or undefined when calling getWMVEPsMetadata.');
        }

        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new Error('Required parameter wvmid was null or undefined when calling getWMVEPsMetadata.');
        }

        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new Error('Required parameter eid was null or undefined when calling getWMVEPsMetadata.');
        }

        if (configuration !== undefined) {
            localVarQueryParameters['configuration'] = ObjectSerializer.serialize(configuration, "string");
        }

        if (linkDocumentId !== undefined) {
            localVarQueryParameters['linkDocumentId'] = ObjectSerializer.serialize(linkDocumentId, "string");
        }

        if (inferMetadataOwner !== undefined) {
            localVarQueryParameters['inferMetadataOwner'] = ObjectSerializer.serialize(inferMetadataOwner, "boolean");
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.OAuth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @param did 
     * @param wv 
     * @param wvid 
     * @param eid 
     * @param configuration 
     * @param linkDocumentId 
     * @param inferMetadataOwner 
     */
    public getWVEMetadata (did: string, wv: string, wvid: string, eid: string, configuration?: string, linkDocumentId?: string, inferMetadataOwner?: boolean) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/api/metadata/d/{did}/{wv}/{wvid}/e/{eid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wv' + '}', encodeURIComponent(String(wv)))
            .replace('{' + 'wvid' + '}', encodeURIComponent(String(wvid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new Error('Required parameter did was null or undefined when calling getWVEMetadata.');
        }

        // verify required parameter 'wv' is not null or undefined
        if (wv === null || wv === undefined) {
            throw new Error('Required parameter wv was null or undefined when calling getWVEMetadata.');
        }

        // verify required parameter 'wvid' is not null or undefined
        if (wvid === null || wvid === undefined) {
            throw new Error('Required parameter wvid was null or undefined when calling getWVEMetadata.');
        }

        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new Error('Required parameter eid was null or undefined when calling getWVEMetadata.');
        }

        if (configuration !== undefined) {
            localVarQueryParameters['configuration'] = ObjectSerializer.serialize(configuration, "string");
        }

        if (linkDocumentId !== undefined) {
            localVarQueryParameters['linkDocumentId'] = ObjectSerializer.serialize(linkDocumentId, "string");
        }

        if (inferMetadataOwner !== undefined) {
            localVarQueryParameters['inferMetadataOwner'] = ObjectSerializer.serialize(inferMetadataOwner, "boolean");
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.OAuth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @param did 
     * @param wv 
     * @param wvid 
     * @param linkDocumentId 
     * @param inferMetadataOwner 
     */
    public getWVEsMetadata (did: string, wv: string, wvid: string, linkDocumentId?: string, inferMetadataOwner?: boolean) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/api/metadata/d/{did}/{wv}/{wvid}/e'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wv' + '}', encodeURIComponent(String(wv)))
            .replace('{' + 'wvid' + '}', encodeURIComponent(String(wvid)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new Error('Required parameter did was null or undefined when calling getWVEsMetadata.');
        }

        // verify required parameter 'wv' is not null or undefined
        if (wv === null || wv === undefined) {
            throw new Error('Required parameter wv was null or undefined when calling getWVEsMetadata.');
        }

        // verify required parameter 'wvid' is not null or undefined
        if (wvid === null || wvid === undefined) {
            throw new Error('Required parameter wvid was null or undefined when calling getWVEsMetadata.');
        }

        if (linkDocumentId !== undefined) {
            localVarQueryParameters['linkDocumentId'] = ObjectSerializer.serialize(linkDocumentId, "string");
        }

        if (inferMetadataOwner !== undefined) {
            localVarQueryParameters['inferMetadataOwner'] = ObjectSerializer.serialize(inferMetadataOwner, "boolean");
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.OAuth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @param did 
     * @param wv 
     * @param wvid 
     * @param linkDocumentId 
     * @param inferMetadataOwner 
     */
    public getWVMetadata (did: string, wv: string, wvid: string, linkDocumentId?: string, inferMetadataOwner?: boolean) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/api/metadata/d/{did}/{wv}/{wvid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wv' + '}', encodeURIComponent(String(wv)))
            .replace('{' + 'wvid' + '}', encodeURIComponent(String(wvid)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new Error('Required parameter did was null or undefined when calling getWVMetadata.');
        }

        // verify required parameter 'wv' is not null or undefined
        if (wv === null || wv === undefined) {
            throw new Error('Required parameter wv was null or undefined when calling getWVMetadata.');
        }

        // verify required parameter 'wvid' is not null or undefined
        if (wvid === null || wvid === undefined) {
            throw new Error('Required parameter wvid was null or undefined when calling getWVMetadata.');
        }

        if (linkDocumentId !== undefined) {
            localVarQueryParameters['linkDocumentId'] = ObjectSerializer.serialize(linkDocumentId, "string");
        }

        if (inferMetadataOwner !== undefined) {
            localVarQueryParameters['inferMetadataOwner'] = ObjectSerializer.serialize(inferMetadataOwner, "boolean");
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.OAuth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @param did 
     * @param vid 
     * @param eid 
     * @param otype 
     * @param oid 
     * @param pid 
     * @param body 
     * @param linkDocumentId 
     */
    public updateVEOPStandardContentPartMetadata (did: string, vid: string, eid: string, otype: string, oid: string, pid: string, body: string, linkDocumentId?: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/api/metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/{otype}/{oid}/p/{pid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'vid' + '}', encodeURIComponent(String(vid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'otype' + '}', encodeURIComponent(String(otype)))
            .replace('{' + 'oid' + '}', encodeURIComponent(String(oid)))
            .replace('{' + 'pid' + '}', encodeURIComponent(String(pid)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new Error('Required parameter did was null or undefined when calling updateVEOPStandardContentPartMetadata.');
        }

        // verify required parameter 'vid' is not null or undefined
        if (vid === null || vid === undefined) {
            throw new Error('Required parameter vid was null or undefined when calling updateVEOPStandardContentPartMetadata.');
        }

        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new Error('Required parameter eid was null or undefined when calling updateVEOPStandardContentPartMetadata.');
        }

        // verify required parameter 'otype' is not null or undefined
        if (otype === null || otype === undefined) {
            throw new Error('Required parameter otype was null or undefined when calling updateVEOPStandardContentPartMetadata.');
        }

        // verify required parameter 'oid' is not null or undefined
        if (oid === null || oid === undefined) {
            throw new Error('Required parameter oid was null or undefined when calling updateVEOPStandardContentPartMetadata.');
        }

        // verify required parameter 'pid' is not null or undefined
        if (pid === null || pid === undefined) {
            throw new Error('Required parameter pid was null or undefined when calling updateVEOPStandardContentPartMetadata.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateVEOPStandardContentPartMetadata.');
        }

        if (linkDocumentId !== undefined) {
            localVarQueryParameters['linkDocumentId'] = ObjectSerializer.serialize(linkDocumentId, "string");
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "string")
        };

        this.authentications.OAuth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @param did 
     * @param wv 
     * @param wvid 
     * @param eid 
     * @param body 
     */
    public updateWVEMetadata (did: string, wv: string, wvid: string, eid: string, body: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/api/metadata/d/{did}/{wv}/{wvid}/e/{eid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wv' + '}', encodeURIComponent(String(wv)))
            .replace('{' + 'wvid' + '}', encodeURIComponent(String(wvid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new Error('Required parameter did was null or undefined when calling updateWVEMetadata.');
        }

        // verify required parameter 'wv' is not null or undefined
        if (wv === null || wv === undefined) {
            throw new Error('Required parameter wv was null or undefined when calling updateWVEMetadata.');
        }

        // verify required parameter 'wvid' is not null or undefined
        if (wvid === null || wvid === undefined) {
            throw new Error('Required parameter wvid was null or undefined when calling updateWVEMetadata.');
        }

        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new Error('Required parameter eid was null or undefined when calling updateWVEMetadata.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateWVEMetadata.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "string")
        };

        this.authentications.OAuth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param subResource 
     * @param body 
     */
    public updateWVEPMetadata (did: string, wvm: string, wvmid: string, subResource: string, body: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/api/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/p/{pid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'subResource' + '}', encodeURIComponent(String(subResource)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new Error('Required parameter did was null or undefined when calling updateWVEPMetadata.');
        }

        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new Error('Required parameter wvm was null or undefined when calling updateWVEPMetadata.');
        }

        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new Error('Required parameter wvmid was null or undefined when calling updateWVEPMetadata.');
        }

        // verify required parameter 'subResource' is not null or undefined
        if (subResource === null || subResource === undefined) {
            throw new Error('Required parameter subResource was null or undefined when calling updateWVEPMetadata.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateWVEPMetadata.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "string")
        };

        this.authentications.OAuth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @param did 
     * @param wv 
     * @param wvid 
     * @param body 
     */
    public updateWVMetadata (did: string, wv: string, wvid: string, body: string) : Promise<{ response: http.ClientResponse; body?: any;  }> {
        const localVarPath = this.basePath + '/api/metadata/d/{did}/{wv}/{wvid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wv' + '}', encodeURIComponent(String(wv)))
            .replace('{' + 'wvid' + '}', encodeURIComponent(String(wvid)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new Error('Required parameter did was null or undefined when calling updateWVMetadata.');
        }

        // verify required parameter 'wv' is not null or undefined
        if (wv === null || wv === undefined) {
            throw new Error('Required parameter wv was null or undefined when calling updateWVMetadata.');
        }

        // verify required parameter 'wvid' is not null or undefined
        if (wvid === null || wvid === undefined) {
            throw new Error('Required parameter wvid was null or undefined when calling updateWVMetadata.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateWVMetadata.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "string")
        };

        this.authentications.OAuth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body?: any;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
