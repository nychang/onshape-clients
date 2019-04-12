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
var BTUpdateVersionThumbnailParams = /** @class */ (function () {
    function BTUpdateVersionThumbnailParams() {
    }
    BTUpdateVersionThumbnailParams.getAttributeTypeMap = function () {
        return BTUpdateVersionThumbnailParams.attributeTypeMap;
    };
    BTUpdateVersionThumbnailParams.discriminator = undefined;
    BTUpdateVersionThumbnailParams.attributeTypeMap = [
        {
            "name": "versionIds",
            "baseName": "versionIds",
            "type": "Array<BTIdAndConfiguration>"
        },
        {
            "name": "forceUpdate",
            "baseName": "forceUpdate",
            "type": "boolean"
        }
    ];
    return BTUpdateVersionThumbnailParams;
}());
exports.BTUpdateVersionThumbnailParams = BTUpdateVersionThumbnailParams;