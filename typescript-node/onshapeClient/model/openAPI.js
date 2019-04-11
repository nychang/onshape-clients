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
var OpenAPI = /** @class */ (function () {
    function OpenAPI() {
    }
    OpenAPI.getAttributeTypeMap = function () {
        return OpenAPI.attributeTypeMap;
    };
    OpenAPI.discriminator = undefined;
    OpenAPI.attributeTypeMap = [
        {
            "name": "openapi",
            "baseName": "openapi",
            "type": "string"
        },
        {
            "name": "info",
            "baseName": "info",
            "type": "Info"
        },
        {
            "name": "externalDocs",
            "baseName": "externalDocs",
            "type": "ExternalDocumentation"
        },
        {
            "name": "servers",
            "baseName": "servers",
            "type": "Array<Server>"
        },
        {
            "name": "security",
            "baseName": "security",
            "type": "Array<SecurityRequirement>"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<Tag>"
        },
        {
            "name": "paths",
            "baseName": "paths",
            "type": "OAuthFlowScopes"
        },
        {
            "name": "components",
            "baseName": "components",
            "type": "Components"
        },
        {
            "name": "extensions",
            "baseName": "extensions",
            "type": "{ [key: string]: any; }"
        }
    ];
    return OpenAPI;
}());
exports.OpenAPI = OpenAPI;
