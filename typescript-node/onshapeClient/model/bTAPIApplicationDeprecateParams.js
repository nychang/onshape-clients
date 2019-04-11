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
var BTAPIApplicationDeprecateParams = /** @class */ (function () {
    function BTAPIApplicationDeprecateParams() {
    }
    BTAPIApplicationDeprecateParams.getAttributeTypeMap = function () {
        return BTAPIApplicationDeprecateParams.attributeTypeMap;
    };
    BTAPIApplicationDeprecateParams.discriminator = undefined;
    BTAPIApplicationDeprecateParams.attributeTypeMap = [
        {
            "name": "ownerEmailSubjectText",
            "baseName": "ownerEmailSubjectText",
            "type": "string"
        },
        {
            "name": "ownerEmailMessageText",
            "baseName": "ownerEmailMessageText",
            "type": "string"
        },
        {
            "name": "userEmailSubjectText",
            "baseName": "userEmailSubjectText",
            "type": "string"
        },
        {
            "name": "userEmailMessageText",
            "baseName": "userEmailMessageText",
            "type": "string"
        }
    ];
    return BTAPIApplicationDeprecateParams;
}());
exports.BTAPIApplicationDeprecateParams = BTAPIApplicationDeprecateParams;
