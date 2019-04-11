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
var BTCloudStorageProviderObjectInfo = /** @class */ (function () {
    function BTCloudStorageProviderObjectInfo() {
    }
    BTCloudStorageProviderObjectInfo.getAttributeTypeMap = function () {
        return BTCloudStorageProviderObjectInfo.attributeTypeMap;
    };
    BTCloudStorageProviderObjectInfo.discriminator = undefined;
    BTCloudStorageProviderObjectInfo.attributeTypeMap = [
        {
            "name": "cloudProviderId",
            "baseName": "cloudProviderId",
            "type": "number"
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
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "viewRef",
            "baseName": "viewRef",
            "type": "string"
        }
    ];
    return BTCloudStorageProviderObjectInfo;
}());
exports.BTCloudStorageProviderObjectInfo = BTCloudStorageProviderObjectInfo;
