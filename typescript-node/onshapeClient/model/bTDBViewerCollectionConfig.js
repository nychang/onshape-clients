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
var BTDBViewerCollectionConfig = /** @class */ (function () {
    function BTDBViewerCollectionConfig() {
    }
    BTDBViewerCollectionConfig.getAttributeTypeMap = function () {
        return BTDBViewerCollectionConfig.attributeTypeMap;
    };
    BTDBViewerCollectionConfig.discriminator = undefined;
    BTDBViewerCollectionConfig.attributeTypeMap = [
        {
            "name": "collection",
            "baseName": "collection",
            "type": "string"
        },
        {
            "name": "db",
            "baseName": "db",
            "type": "string"
        },
        {
            "name": "queryFields",
            "baseName": "queryFields",
            "type": "Array<string>"
        },
        {
            "name": "hiddenFields",
            "baseName": "hiddenFields",
            "type": "Array<string>"
        },
        {
            "name": "binaryFields",
            "baseName": "binaryFields",
            "type": "Array<string>"
        },
        {
            "name": "hasCreatedDate",
            "baseName": "hasCreatedDate",
            "type": "boolean"
        }
    ];
    return BTDBViewerCollectionConfig;
}());
exports.BTDBViewerCollectionConfig = BTDBViewerCollectionConfig;
