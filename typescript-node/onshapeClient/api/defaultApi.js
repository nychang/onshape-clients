"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var localVarRequest = require("request");
var Promise = require("bluebird");
var models_1 = require("../model/models");
var defaultBasePath = 'https://cad.onshape.com';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var DefaultApiApiKeys;
(function (DefaultApiApiKeys) {
})(DefaultApiApiKeys = exports.DefaultApiApiKeys || (exports.DefaultApiApiKeys = {}));
var DefaultApi = /** @class */ (function () {
    function DefaultApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new models_1.VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(DefaultApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    DefaultApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    DefaultApi.prototype.setApiKey = function (key, value) {
        this.authentications[DefaultApiApiKeys[key]].apiKey = value;
    };
    /**
     *
     * @summary OpenAPI spec documentation for the Onshape REST API.
     * @param fileType The type of file to return. Defaults to JSON.
     * @param excludedTags If an operation contains an excluded tag, it is not returned from this endpoint.
     * @param includedTags Return at most all the operations with tags included in includedTags. If not given, this will default to all tags.
     * @param documentationStatus Only return endpoints that have the specified document status. Default is to return all the keys the user should have access to.
     */
    DefaultApi.prototype.getOpenApi = function (fileType, excludedTags, includedTags, documentationStatus) {
        var localVarPath = this.basePath + '/api/openapi';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (fileType !== undefined) {
            localVarQueryParameters['fileType'] = models_1.ObjectSerializer.serialize(fileType, "'json' | 'yaml'");
        }
        if (excludedTags !== undefined) {
            localVarQueryParameters['excludedTags'] = models_1.ObjectSerializer.serialize(excludedTags, "string");
        }
        if (includedTags !== undefined) {
            localVarQueryParameters['includedTags'] = models_1.ObjectSerializer.serialize(includedTags, "string");
        }
        if (documentationStatus !== undefined) {
            localVarQueryParameters['documentationStatus'] = models_1.ObjectSerializer.serialize(documentationStatus, "Array<'DEVELOPMENT' | 'PRODUCTION' | 'STAGING' | 'EVP' | 'UNSET' | 'INTERNAL'>");
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = models_1.ObjectSerializer.deserialize(body, "OpenAPI");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return DefaultApi;
}());
exports.DefaultApi = DefaultApi;