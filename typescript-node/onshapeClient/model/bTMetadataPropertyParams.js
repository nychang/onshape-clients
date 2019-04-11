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
var BTMetadataPropertyParams = /** @class */ (function () {
    function BTMetadataPropertyParams() {
    }
    BTMetadataPropertyParams.getAttributeTypeMap = function () {
        return BTMetadataPropertyParams.attributeTypeMap;
    };
    BTMetadataPropertyParams.discriminator = undefined;
    BTMetadataPropertyParams.attributeTypeMap = [
        {
            "name": "array",
            "baseName": "array",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string"
        },
        {
            "name": "ownerId",
            "baseName": "ownerId",
            "type": "string"
        },
        {
            "name": "valueType",
            "baseName": "valueType",
            "type": "number"
        },
        {
            "name": "ownerTypeOrdinal",
            "baseName": "ownerTypeOrdinal",
            "type": "number"
        },
        {
            "name": "propertyConfigParamList",
            "baseName": "propertyConfigParamList",
            "type": "Array<BTMetadataPropertyConfigParams>"
        },
        {
            "name": "objectDefName",
            "baseName": "objectDefName",
            "type": "string"
        },
        {
            "name": "blobMimeType",
            "baseName": "blobMimeType",
            "type": "string"
        },
        {
            "name": "editableInVersion",
            "baseName": "editableInVersion",
            "type": "boolean"
        },
        {
            "name": "editableInMicroversion",
            "baseName": "editableInMicroversion",
            "type": "boolean"
        },
        {
            "name": "uiReadonlyInVersion",
            "baseName": "uiReadonlyInVersion",
            "type": "boolean"
        },
        {
            "name": "uiReadonlyInMicroversion",
            "baseName": "uiReadonlyInMicroversion",
            "type": "boolean"
        },
        {
            "name": "searchBoost",
            "baseName": "searchBoost",
            "type": "number"
        }
    ];
    return BTMetadataPropertyParams;
}());
exports.BTMetadataPropertyParams = BTMetadataPropertyParams;
