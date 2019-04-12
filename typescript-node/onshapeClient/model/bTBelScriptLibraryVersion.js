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
var BTBelScriptLibraryVersion = /** @class */ (function () {
    function BTBelScriptLibraryVersion() {
    }
    BTBelScriptLibraryVersion.getAttributeTypeMap = function () {
        return BTBelScriptLibraryVersion.attributeTypeMap;
    };
    BTBelScriptLibraryVersion.discriminator = undefined;
    BTBelScriptLibraryVersion.attributeTypeMap = [
        {
            "name": "major",
            "baseName": "major",
            "type": "number"
        },
        {
            "name": "minor",
            "baseName": "minor",
            "type": "number"
        },
        {
            "name": "valid",
            "baseName": "valid",
            "type": "boolean"
        },
        {
            "name": "versionNumber",
            "baseName": "versionNumber",
            "type": "number"
        },
        {
            "name": "point",
            "baseName": "point",
            "type": "number"
        }
    ];
    return BTBelScriptLibraryVersion;
}());
exports.BTBelScriptLibraryVersion = BTBelScriptLibraryVersion;