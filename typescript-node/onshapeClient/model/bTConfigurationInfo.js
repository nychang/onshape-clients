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
var BTConfigurationInfo = /** @class */ (function () {
    function BTConfigurationInfo() {
    }
    BTConfigurationInfo.getAttributeTypeMap = function () {
        return BTConfigurationInfo.attributeTypeMap;
    };
    BTConfigurationInfo.discriminator = undefined;
    BTConfigurationInfo.attributeTypeMap = [
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<ConfigurationInfoEntry>"
        },
        {
            "name": "isStandardContent",
            "baseName": "isStandardContent",
            "type": "boolean"
        }
    ];
    return BTConfigurationInfo;
}());
exports.BTConfigurationInfo = BTConfigurationInfo;
