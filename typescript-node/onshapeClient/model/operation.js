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
var Operation = /** @class */ (function () {
    function Operation() {
    }
    Operation.getAttributeTypeMap = function () {
        return Operation.attributeTypeMap;
    };
    Operation.discriminator = undefined;
    Operation.attributeTypeMap = [
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "externalDocs",
            "baseName": "externalDocs",
            "type": "ExternalDocumentation"
        },
        {
            "name": "operationId",
            "baseName": "operationId",
            "type": "string"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<Parameter>"
        },
        {
            "name": "requestBody",
            "baseName": "requestBody",
            "type": "RequestBody"
        },
        {
            "name": "responses",
            "baseName": "responses",
            "type": "OperationResponses"
        },
        {
            "name": "callbacks",
            "baseName": "callbacks",
            "type": "{ [key: string]: Callback; }"
        },
        {
            "name": "deprecated",
            "baseName": "deprecated",
            "type": "boolean"
        },
        {
            "name": "security",
            "baseName": "security",
            "type": "Array<SecurityRequirement>"
        },
        {
            "name": "servers",
            "baseName": "servers",
            "type": "Array<Server>"
        },
        {
            "name": "extensions",
            "baseName": "extensions",
            "type": "{ [key: string]: any; }"
        }
    ];
    return Operation;
}());
exports.Operation = Operation;
