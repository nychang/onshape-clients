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
var BTTagParams = /** @class */ (function () {
    function BTTagParams() {
    }
    BTTagParams.getAttributeTypeMap = function () {
        return BTTagParams.attributeTypeMap;
    };
    BTTagParams.discriminator = undefined;
    BTTagParams.attributeTypeMap = [
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "tag",
            "baseName": "tag",
            "type": "string"
        }
    ];
    return BTTagParams;
}());
exports.BTTagParams = BTTagParams;