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
var BTElementPropertiesParams = /** @class */ (function () {
    function BTElementPropertiesParams() {
    }
    BTElementPropertiesParams.getAttributeTypeMap = function () {
        return BTElementPropertiesParams.attributeTypeMap;
    };
    BTElementPropertiesParams.discriminator = undefined;
    BTElementPropertiesParams.attributeTypeMap = [
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "elementId",
            "baseName": "elementId",
            "type": "string"
        },
        {
            "name": "apiConfiguration",
            "baseName": "apiConfiguration",
            "type": "string"
        }
    ];
    return BTElementPropertiesParams;
}());
exports.BTElementPropertiesParams = BTElementPropertiesParams;
