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
var Components = /** @class */ (function () {
    function Components() {
    }
    Components.getAttributeTypeMap = function () {
        return Components.attributeTypeMap;
    };
    Components.discriminator = undefined;
    Components.attributeTypeMap = [
        {
            "name": "schemas",
            "baseName": "schemas",
            "type": "{ [key: string]: Schema; }"
        },
        {
            "name": "responses",
            "baseName": "responses",
            "type": "{ [key: string]: ApiResponse; }"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "{ [key: string]: Parameter; }"
        },
        {
            "name": "examples",
            "baseName": "examples",
            "type": "{ [key: string]: Example; }"
        },
        {
            "name": "requestBodies",
            "baseName": "requestBodies",
            "type": "{ [key: string]: RequestBody; }"
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "{ [key: string]: Header; }"
        },
        {
            "name": "securitySchemes",
            "baseName": "securitySchemes",
            "type": "{ [key: string]: SecurityScheme; }"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: Link; }"
        },
        {
            "name": "callbacks",
            "baseName": "callbacks",
            "type": "{ [key: string]: Callback; }"
        },
        {
            "name": "extensions",
            "baseName": "extensions",
            "type": "{ [key: string]: any; }"
        }
    ];
    return Components;
}());
exports.Components = Components;