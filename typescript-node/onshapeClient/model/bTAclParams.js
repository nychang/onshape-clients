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
var BTAclParams = /** @class */ (function () {
    function BTAclParams() {
    }
    BTAclParams.getAttributeTypeMap = function () {
        return BTAclParams.attributeTypeMap;
    };
    BTAclParams.discriminator = undefined;
    BTAclParams.attributeTypeMap = [
        {
            "name": "_public",
            "baseName": "public",
            "type": "boolean"
        },
        {
            "name": "anonymousAccessAllowed",
            "baseName": "anonymousAccessAllowed",
            "type": "boolean"
        },
        {
            "name": "anonymousAllowsExport",
            "baseName": "anonymousAllowsExport",
            "type": "boolean"
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string"
        }
    ];
    return BTAclParams;
}());
exports.BTAclParams = BTAclParams;
