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
var ConfigurationInfoEntry = /** @class */ (function () {
    function ConfigurationInfoEntry() {
    }
    ConfigurationInfoEntry.getAttributeTypeMap = function () {
        return ConfigurationInfoEntry.attributeTypeMap;
    };
    ConfigurationInfoEntry.discriminator = undefined;
    ConfigurationInfoEntry.attributeTypeMap = [
        {
            "name": "parameterDisplayValue",
            "baseName": "parameterDisplayValue",
            "type": "string"
        },
        {
            "name": "explicit",
            "baseName": "explicit",
            "type": "boolean"
        },
        {
            "name": "parameterId",
            "baseName": "parameterId",
            "type": "string"
        },
        {
            "name": "parameterValue",
            "baseName": "parameterValue",
            "type": "string"
        },
        {
            "name": "parameterName",
            "baseName": "parameterName",
            "type": "string"
        }
    ];
    return ConfigurationInfoEntry;
}());
exports.ConfigurationInfoEntry = ConfigurationInfoEntry;