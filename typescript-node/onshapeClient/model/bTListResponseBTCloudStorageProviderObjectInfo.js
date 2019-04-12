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
var BTListResponseBTCloudStorageProviderObjectInfo = /** @class */ (function () {
    function BTListResponseBTCloudStorageProviderObjectInfo() {
    }
    BTListResponseBTCloudStorageProviderObjectInfo.getAttributeTypeMap = function () {
        return BTListResponseBTCloudStorageProviderObjectInfo.attributeTypeMap;
    };
    BTListResponseBTCloudStorageProviderObjectInfo.discriminator = undefined;
    BTListResponseBTCloudStorageProviderObjectInfo.attributeTypeMap = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<BTCloudStorageProviderObjectInfo>"
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string"
        }
    ];
    return BTListResponseBTCloudStorageProviderObjectInfo;
}());
exports.BTListResponseBTCloudStorageProviderObjectInfo = BTListResponseBTCloudStorageProviderObjectInfo;