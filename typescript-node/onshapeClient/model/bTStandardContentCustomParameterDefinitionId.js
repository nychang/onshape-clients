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
var BTStandardContentCustomParameterDefinitionId = /** @class */ (function () {
    function BTStandardContentCustomParameterDefinitionId() {
    }
    BTStandardContentCustomParameterDefinitionId.getAttributeTypeMap = function () {
        return BTStandardContentCustomParameterDefinitionId.attributeTypeMap;
    };
    BTStandardContentCustomParameterDefinitionId.discriminator = undefined;
    BTStandardContentCustomParameterDefinitionId.attributeTypeMap = [
        {
            "name": "propertyId",
            "baseName": "propertyId",
            "type": "string"
        },
        {
            "name": "ownerId",
            "baseName": "ownerId",
            "type": "string"
        },
        {
            "name": "ownerType",
            "baseName": "ownerType",
            "type": "number"
        },
        {
            "name": "parameterName",
            "baseName": "parameterName",
            "type": "string"
        },
        {
            "name": "standard",
            "baseName": "standard",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "string"
        },
        {
            "name": "types",
            "baseName": "types",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }
    ];
    return BTStandardContentCustomParameterDefinitionId;
}());
exports.BTStandardContentCustomParameterDefinitionId = BTStandardContentCustomParameterDefinitionId;
