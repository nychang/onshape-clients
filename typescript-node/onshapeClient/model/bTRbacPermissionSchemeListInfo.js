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
var BTRbacPermissionSchemeListInfo = /** @class */ (function () {
    function BTRbacPermissionSchemeListInfo() {
    }
    BTRbacPermissionSchemeListInfo.getAttributeTypeMap = function () {
        return BTRbacPermissionSchemeListInfo.attributeTypeMap;
    };
    BTRbacPermissionSchemeListInfo.discriminator = undefined;
    BTRbacPermissionSchemeListInfo.attributeTypeMap = [
        {
            "name": "defaultIndex",
            "baseName": "defaultIndex",
            "type": "number"
        },
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
            "type": "Array<BTRbacPermissionSchemeInfo>"
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string"
        }
    ];
    return BTRbacPermissionSchemeListInfo;
}());
exports.BTRbacPermissionSchemeListInfo = BTRbacPermissionSchemeListInfo;
