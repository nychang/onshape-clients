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
var BTPartMaterialPropertyInfo = /** @class */ (function () {
    function BTPartMaterialPropertyInfo() {
    }
    BTPartMaterialPropertyInfo.getAttributeTypeMap = function () {
        return BTPartMaterialPropertyInfo.attributeTypeMap;
    };
    BTPartMaterialPropertyInfo.discriminator = undefined;
    BTPartMaterialPropertyInfo.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "string"
        }
    ];
    return BTPartMaterialPropertyInfo;
}());
exports.BTPartMaterialPropertyInfo = BTPartMaterialPropertyInfo;
