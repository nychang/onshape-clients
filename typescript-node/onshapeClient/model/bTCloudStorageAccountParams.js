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
var BTCloudStorageAccountParams = /** @class */ (function () {
    function BTCloudStorageAccountParams() {
    }
    BTCloudStorageAccountParams.getAttributeTypeMap = function () {
        return BTCloudStorageAccountParams.attributeTypeMap;
    };
    BTCloudStorageAccountParams.discriminator = undefined;
    BTCloudStorageAccountParams.attributeTypeMap = [
        {
            "name": "importFolderId",
            "baseName": "importFolderId",
            "type": "string"
        },
        {
            "name": "exportFolderId",
            "baseName": "exportFolderId",
            "type": "string"
        }
    ];
    return BTCloudStorageAccountParams;
}());
exports.BTCloudStorageAccountParams = BTCloudStorageAccountParams;
