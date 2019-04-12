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
var BTNodeReference = /** @class */ (function () {
    function BTNodeReference() {
    }
    BTNodeReference.getAttributeTypeMap = function () {
        return BTNodeReference.attributeTypeMap;
    };
    BTNodeReference.discriminator = undefined;
    BTNodeReference.attributeTypeMap = [
        {
            "name": "nodeId",
            "baseName": "nodeId",
            "type": "string"
        },
        {
            "name": "nodeIdRaw",
            "baseName": "nodeIdRaw",
            "type": "BTObjectId"
        },
        {
            "name": "typeId",
            "baseName": "typeId",
            "type": "number"
        },
        {
            "name": "connectionSource",
            "baseName": "connectionSource",
            "type": "BTConnection"
        },
        {
            "name": "exportTypeName",
            "baseName": "exportTypeName",
            "type": "string"
        },
        {
            "name": "unknownClass",
            "baseName": "unknownClass",
            "type": "boolean"
        }
    ];
    return BTNodeReference;
}());
exports.BTNodeReference = BTNodeReference;